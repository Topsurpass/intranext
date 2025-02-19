// use-logout-user.ts
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/user-store';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';


const useLogoutUser = () => {
	const router = useRouter();
	const { reset } = useAuthStore();

	const logout = () => {
		document.cookie =
			'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
		setAuthTokenHTTP(false);
		reset();
		router.push('/login');
	};

	return logout;
};

export default useLogoutUser;
