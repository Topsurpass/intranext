'use client';

import { BsList } from 'react-icons/bs';
import { useSideBarToggle } from '../hooks/use-sidebar-toggle';
import ThemeSwitcher from './theme-switcher';
import { cn } from '../lib/utils';

export default function Header() {
	const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
	const sidebarToggle = () => {
		invokeToggleCollapse();
	};

	const headerStyle = cn(
		'bg-sidebar fixed top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 shadow-sm shadow-slate-500/40',
		{
			'sm:pl-[20rem]': !toggleCollapse,
			'sm:pl-[5.6rem]': toggleCollapse,
		}
	);

	return (
		<header className={headerStyle}>
			<div className="flex h-16 items-center justify-between">
				<button
					type="button"
					onClick={sidebarToggle}
					aria-label="sidebar"
					className="shrink-btn order-2 float-right ml-3 flex h-[35px] w-[35px] items-center justify-center rounded-md bg-foreground text-background shadow-md shadow-black/10 transition duration-300 ease-in-out hover:bg-foreground hover:text-background sm:order-1"
				>
					<BsList />
				</button>

				<div className="order-1 flex items-center justify-between gap-10 sm:order-2">
					<div className="">
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
