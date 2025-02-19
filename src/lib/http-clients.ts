/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '@/@config';
import { jwtDecode } from 'jwt-decode';
import useAuthStore from '@/store/user-store';



// PUBLIC HTTP client
export const HTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

// Authenticated HTTP client : for request that require accessToken
const AuthHTTP = axios.create({
	baseURL: config.baseUrl,
	timeout: config.httpTimeout,
});

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