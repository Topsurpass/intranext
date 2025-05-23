import type { Metadata } from 'next';
import PrivateRouteLayout from '@/app/(private)/private-route-layout';

export const metadata: Metadata = {
	title: 'Learner dashboard',
	description: 'Welcome to the learner dashboard',
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<PrivateRouteLayout>{children}</PrivateRouteLayout>
		</div>
	);
}
