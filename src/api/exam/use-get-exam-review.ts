import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

const url = `/api/exam`;

export const getExamReviewById = async (id: string) => {
	try {
		const res = await AuthHTTP.get(`${url}/${id}/review`);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText || 'Failed to fetch exam';

		throw new Error(errorMessage);
	}
};

export function useGetExamReviewById(id: string) {
	return useQuery({
		queryKey: [QueryKeys.GET_EXAM, id],
		queryFn: () => getExamReviewById(id),
		enabled: !!id, // Only run when ID exists
		retry: false, // Prevent unnecessary retries
	});
}
