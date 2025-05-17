import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

const baseUrl = `/api/available-exams`;

export const getAvailableExams = async (id?: string) => {
	try {
		const endpoint = id ? `${baseUrl}/${id}` : baseUrl;
		const res = await AuthHTTP.get(endpoint);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText ||
			(id ? 'Failed to fetch exams' : 'Failed to fetch exams');

		throw new Error(errorMessage);
	}
};

export function useGetAvailableExams(id?: string) {
	return useQuery({
		queryKey: [QueryKeys.GET_AVAILABLE_EXAMS, id],
		queryFn: () => getAvailableExams(id),
		retry: false,
	});
}
