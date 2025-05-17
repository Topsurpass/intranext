import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

const baseUrl = `/api/completed-courses`;

export const getCoursesScores = async (id?: string) => {
	try {
		const endpoint = id ? `${baseUrl}/${id}` : baseUrl;
		const res = await AuthHTTP.get(endpoint);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText ||
			(id ? 'Failed to fetch techstack' : 'Failed to fetch techstacks');

		throw new Error(errorMessage);
	}
};

export function useGetCoursesScores(id?: string) {
	return useQuery({
		queryKey: [QueryKeys.GET_COURSES_SCORES, id],
		queryFn: () => getCoursesScores(id),
		retry: false,
	});
}
