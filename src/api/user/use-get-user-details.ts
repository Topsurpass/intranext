/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

type RequestMethod = 'GET' | 'PUT' | 'PATCH';

interface IProps {
	requestPayload?: any;
	requestMethod: RequestMethod;
}

const url = '/api/user/me/';

export async function getUserProfile() {
	try {
		const res = await AuthHTTP.get(`${url}`);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText || 'Failed to fetch user profile';

		throw new Error(errorMessage);
	}
}

export function useGetUserProfile() {
	return useQuery({
		queryKey: [QueryKeys.GET_USER],
		queryFn: () => getUserProfile(),
		retry: false,
	});
}

export function useMutateUserProfile() {
	return useMutation({
		mutationFn: async ({ requestPayload, requestMethod }: IProps) => {
			try {
				let res: any;
				if (requestMethod === 'PUT') {
					return AuthHTTP.put(url, requestPayload);
				}
				if (requestMethod === 'PATCH') {
					return AuthHTTP.patch(url, requestPayload);
				}
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
	});
}
