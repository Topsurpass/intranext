import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthHTTP from '@/lib/http-clients';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type QuestionProp = {
	question: string;
	selected_option: string;
};

type SubmitDataProps = {
	exam_id: string;
	answers: QuestionProp[];
};

const useSubmitExam = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (requestPayload: SubmitDataProps) => {
			try {
				const res = await AuthHTTP.post(
					'/api/exam/submit/',
					requestPayload
				);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
		onSuccess: () => {
			router.push('/exam/completion');
			queryClient.invalidateQueries();
		},
		onError: (err: { response?: { data?: string[] } }) => {
			toast.error('Submission failed', {
				description: err?.response?.data?.[0],
			});
		},
	});
};

export default useSubmitExam;
