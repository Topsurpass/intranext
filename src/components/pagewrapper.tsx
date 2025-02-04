'use client'

import { ReactNode } from 'react';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import { cn } from '@/lib/utils';

export default function PageWrapper({ children }: { children: ReactNode }) {
	const { toggleCollapse } = useSideBarToggle();
	const bodyStyle = cn(
		'bg-background mt-[65px] h-full overflow-y-auto  pt-3 px-5 mb-5',
		{
			'sm:pl-[20rem]': !toggleCollapse,
			'sm:pl-[6.4rem]': toggleCollapse,
			'md:pl-[21rem] md:pr-5': !toggleCollapse,
			'md:pl-[6.5rem] md:pr-4': toggleCollapse,
		}
	);

	return <div className={bodyStyle}>{children}</div>;
}
