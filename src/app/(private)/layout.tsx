import type { Metadata } from 'next';
import PrivateRouteLayout from '@/app/(private)/private-route-layout';

export const metadata: Metadata = {
	title: 'Learner dashboard Lagos Intranet',
	description: 'Welcome to your dashboard',
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<PrivateRouteLayout>{children}</PrivateRouteLayout>
		</div>
	);
}
