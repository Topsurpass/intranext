'use client';

import SideBar from '@/components/sidebar/sidebar';
import PageWrapper from '@/components/pagewrapper';
import Header from '@/components/header';
import RouteGuard from '@/routes/route-guard';

import { ReactNode } from 'react';

export const PrivateRouteLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-full">
			<SideBar />
			<div className="flex flex-1 flex-col">
				<Header />
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
};

export default RouteGuard(PrivateRouteLayout);
