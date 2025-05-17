import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HTTP } from '@/lib/http-clients';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type RequestPayload = {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password: string;
};

const useSignupUser = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (requestPayload: RequestPayload) => {
			try {
				const res = await HTTP.post(
					'/api/user/create/',
					requestPayload
				);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
		onSuccess: () => {
			toast.success('Signup Successful', {
				description:
					'Account created successfully. Please sign in with your new credentials',
			});
			router.push('/login');
			queryClient.invalidateQueries();
		},
		onError: (err: { response?: { data?: { email?: string[] } } }) => {
			toast.error('Signup failed', {
				description: err?.response?.data?.email?.[0],
			});
		},
	});
};

export default useSignupUser;
