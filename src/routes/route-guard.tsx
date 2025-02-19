'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/user-store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RouteGuard(Component: any) {
	return function RouteGuard(props: React.ComponentProps<typeof Component>) {
		const router = useRouter();
		const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
		const [isHydrated, setIsHydrated] = useState(false);

		// Ensure Zustand store is hydrated
		useEffect(() => {
			const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
				setIsHydrated(true);
			});

			// If Zustand has already hydrated, set it immediately
			if (useAuthStore.persist.hasHydrated()) {
				setIsHydrated(true);
			}

			return () => unsubscribe();
		}, []);

		// Redirect if not authenticated AFTER hydration
		useEffect(() => {
			if (isHydrated && !isAuthenticated) {
				router.replace('/login');
			}
		}, [isHydrated, isAuthenticated, router]);

		// Prevent rendering until hydration is complete
		if (!isHydrated) return null;
		if (!isAuthenticated) return null;

		return <Component {...props} />;
	};
}
