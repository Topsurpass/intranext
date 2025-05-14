import { useQuery } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import QueryKeys from '@/api/query-keys';
import { AxiosError } from 'axios';

const baseUrl = `/api/concepts`;

export const getConcepts = async (id?: string, lesson_id?: string) => {
	try {
		let endpoint = id ? `${baseUrl}/${id}` : baseUrl;

		if (!id && lesson_id) {
			endpoint += `?lesson_id=${lesson_id}`;
		}

		const res = await AuthHTTP.get(endpoint);
		return res.data;
	} catch (error: unknown) {
		const axiosError = error as AxiosError;
		const errorMessage =
			axiosError.response?.statusText ||
			(id ? 'Failed to fetch concept' : 'Failed to fetch concepts');

		throw new Error(errorMessage);
	}
};

export function useGetConcepts(id?: string, lesson_id?: string) {
	return useQuery({
		queryKey: id
			? [QueryKeys.GET_CONCEPTS, id]
			: [QueryKeys.GET_CONCEPTS, { lesson_id }],
		queryFn: () => getConcepts(id, lesson_id),
		retry: false,
	});
}
