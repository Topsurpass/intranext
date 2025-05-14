/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '@/@config';
import { jwtDecode } from 'jwt-decode';
import useAuthStore from '@/store/user-store';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';

export const HTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

const AuthHTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

const isTokenExpired = (token: string): boolean => {
	try {
		const decoded: any = jwtDecode(token);
		return decoded.exp * 1000 < Date.now();
	} catch {
		return true;
	}
};

export const refreshAccessToken = async () => {
	const { setUser, reset, refreshToken } = useAuthStore.getState();

	if (!refreshToken || isTokenExpired(refreshToken)) {
		reset();
		return Promise.reject('Session expired. Please log in again.');
	}

	try {
		const res = await HTTP.post('/api/auth/refresh/', {
			refresh: refreshToken,
		});
		const { access, refresh, ...rest } = res.data;
		setAuthTokenHTTP(access);

		const decodedToken = jwtDecode(access);

		setUser({
			access_token: access,
			refresh_token: refresh,
			...rest,
			...decodedToken,
		} as any);

		return access;
	} catch (err: any) {
		reset();
		return Promise.reject(
			err?.response?.data?.detail || 'Session expired.'
		);
	}
};

// Request Interceptor: Attach Access Token to Requests
AuthHTTP.interceptors.request.use(
	async (request: any) => {
		const { accessToken } = useAuthStore.getState();

		if (accessToken && !isTokenExpired(accessToken)) {
			request.headers.Authorization = `Bearer ${accessToken}`;
		}
		return request;
	},
	(err: any) => Promise.reject(err)
);

AuthHTTP.interceptors.response.use(
	(response) => response,
	async (error) => {
		const logout = useAuthStore.getState().reset;
		const originalRequest = error.config;

		// If request fails with 401 (Unauthorized) and it wasn't retried already
		if (error.response?.status === 401 && !originalRequest._retry) {
			try {
				originalRequest._retry = true;
				const newToken = await refreshAccessToken();

				// Retry the original request with the new access token
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return await HTTP(originalRequest);
			} catch (refreshError) {
				logout();
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default AuthHTTP;
