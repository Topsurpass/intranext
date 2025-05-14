/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '@/@config';
import { jwtDecode } from 'jwt-decode';
import useAuthStore from '@/store/user-store';
<<<<<<< HEAD



// PUBLIC HTTP client
=======
import { setAuthTokenHTTP } from '@/lib/set-auth-token';


>>>>>>> develop
export const HTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

<<<<<<< HEAD
// Authenticated HTTP client : for request that require accessToken
=======
>>>>>>> develop
const AuthHTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

<<<<<<< HEAD
// Function to refresh the access token
export const refreshAccessToken = async () => {
  const addUserToStore = useAuthStore.getState().setUser;
  const logout = useAuthStore.getState().reset;
  try {
		const { accessToken } = useAuthStore.getState();
		const res = await HTTP.post('/api/auth/refresh/', {
			refreshToken: accessToken,
		});
		const { token, ...rest } = res.data.data;
		const decodedToken = jwtDecode(token);
		addUserToStore({
			token,
			...rest,
			...decodedToken,
		} as any);
		return token;
  } catch (err: any) {
		logout();
		return err?.response?.data?.detail;
		// return Promise.reject(err);
  }
};

AuthHTTP.interceptors.request.use(
  async (setting: any) => {
    const token = useAuthStore.getState().accessToken;
    if (token !== null && token !== undefined && token) {
      setting.headers.Authorization = `Bearer ${token}`;
      return setting;
    }
    return setting;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

AuthHTTP.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const logout = useAuthStore.getState().reset;
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      try {
        originalRequest._retry = true;
        const token = await refreshAccessToken();
        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return await HTTP(originalRequest);
        // return await AuthHTTP(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


export default AuthHTTP;
=======
const isTokenExpired = (token: string): boolean => {
	try {
		const decoded: any = jwtDecode(token);
		return decoded.exp * 1000 < Date.now();
	} catch {
		return true;
	}
};

export const refreshAccessToken = async () => {
	const { setUser, reset, refreshToken } =
		useAuthStore.getState();

	if (!refreshToken || isTokenExpired(refreshToken)) {
		reset();
		return Promise.reject('Session expired. Please log in again.');
	}

	try {
		const res = await HTTP.post('/api/auth/refresh/', {
			refresh: refreshToken 
			}
		);
		const {
			access,
			refresh,
			...rest
		} = res.data;
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
>>>>>>> develop
