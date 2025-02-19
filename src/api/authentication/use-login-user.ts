import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { HTTP } from '@/lib/http-clients';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';
import useAuthStore from '@/store/user-store';
import { useRouter } from 'next/navigation';

type RequestPayload = {
	email: string;
	password: string;
};

export interface ILogin {
	access_token: string;
	token_type: string;
	refresh_token: string;
	expires_in: number;
	scope: string;
	id: number;
	firstname: string;
	email: string;
	mobile: string;
	lastname: string;
	username: string;
	roles: string[];
	authorities: string[];
	jti: string;
}

const useLoginUser = () => {
	const router = useRouter();
	const queryClient = useQueryClient();
	const addUserToStore = useAuthStore((state) => state.setUser);
	return useMutation({
		mutationFn: async (requestPayload: RequestPayload) => {
			try {
				const res = await HTTP.post('/api/auth/login/', requestPayload);
				return res;
			} catch (error) {
				return Promise.reject(error);
			}
		},
		onSuccess: (res) => {
			const { access_token: token, ...rest } = res.data;
			setAuthTokenHTTP(token);
			const decodedToken = jwtDecode(token);
			addUserToStore({
				token,
				...rest,
				...decodedToken,
			} as ILogin);
			router.push('/');
			queryClient.invalidateQueries();
		},
		onError: (err: { response?: { data?: { detail?: string } } }) => {
			console.log(err);
			return err?.response?.data?.detail;
		},
	});
};

export default useLoginUser;
