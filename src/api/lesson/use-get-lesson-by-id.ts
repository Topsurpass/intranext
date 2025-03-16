import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

const url = `/api/lesson`;

export const getLessonById = async (id: string) => {
	try {
		const res = await AuthHTTP.get(`${url}/${id}`);
		console.log('Lesson:', res.data);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText ||
			'Failed to fetch lesson';

		throw new Error(errorMessage);
	}
};

export function useGetLessonById(id: string) {
	return useQuery({
		queryKey: [QueryKeys.GET_LESSON, id],
		queryFn: () => getLessonById(id),
		enabled: !!id, // Only run when ID exists
		retry: false, // Prevent unnecessary retries
	});
}
