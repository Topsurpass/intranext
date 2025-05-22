'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/user-store';

type Props = {
	children: ReactNode;
};

export default function RouteGuard({ children }: Props) {
	const router = useRouter();
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
			setIsHydrated(true);
		});

		if (useAuthStore.persist.hasHydrated()) {
			setIsHydrated(true);
		}

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (isHydrated && !isAuthenticated) {
			router.replace('/login');
		}
	}, [isHydrated, isAuthenticated, router]);

	if (!isHydrated || !isAuthenticated) return null;

	return <>{children}</>;
}
