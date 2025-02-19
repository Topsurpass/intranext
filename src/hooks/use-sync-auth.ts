// use-sync-auth.ts
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/user-store';
import { setAuthTokenHTTP } from '@/lib/set-auth-token';

const useSyncAuth = () => {
	const router = useRouter();
	const { reset, setUser } = useAuthStore();

	useEffect(() => {
		const token = document.cookie
			.split('; ')
			.find((row) => row.startsWith('accessToken='))
			?.split('=')[1];

		if (!token) {
			setAuthTokenHTTP(false);
			reset();
			return;
		}

		try {
			const decoded = jwtDecode<{ exp: number }>(token);
			if (decoded.exp * 1000 < Date.now()) {
				// Token expired
				document.cookie =
					'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
				setAuthTokenHTTP(false);
				reset();
				router.push('/login');
			} else {
				setUser({ token, ...decoded });
				setAuthTokenHTTP(token);
				// Set auto-logout timer
				const expiresIn = decoded.exp * 1000 - Date.now();
				setTimeout(() => {
					document.cookie =
						'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
					setAuthTokenHTTP(false);
					reset();
					router.push('/login');
				}, expiresIn);
			}
		} catch {
			document.cookie =
				'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
			setAuthTokenHTTP(false);
			reset();
		}
	}, [reset, setUser, router]);
};

export default useSyncAuth;
