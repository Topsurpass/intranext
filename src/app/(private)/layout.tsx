import type { Metadata } from 'next';

import SideBar from '@/components/sidebar/sidebar';
import PageWrapper from '@/components/pagewrapper';
import Header from '@/components/header';

export const metadata: Metadata = {
	title: 'Learner dashboard Lagos Intranet',
	description: 'Welcome to your dashboard',
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<SideBar />
			<div className="flex flex-1 flex-col">
				<Header />
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
}
