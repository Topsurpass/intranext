'use client';

import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from '@/components/sidebar/sidebar-menu-group';
import SIDENAV_ITEMS from '@/routes/menu-list';
import { cn } from '@/lib/utils';
import { SideNavItem } from '@/types/sidenav-item';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/user-store';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

function SideBar() {
	const { toggleCollapse } = useSideBarToggle();
	const logout = useAuthStore((state) => state.reset);

	const asideStyle = classNames(
		'bg-sidebar text-white fixed top-0 left-0 h-full shadow-sm shadow-slate-500/40 transition-all z-[50] flex flex-col',
		{
			'w-[20rem]': !toggleCollapse,
			'sm:w-[5.4rem] sm:left-0 left-[-100%]': toggleCollapse,
		}
	);

	return (
		<aside className={asideStyle}>
			<div
				className={cn(
					'sidebar-top flex items-center px-4 py-3 backdrop-blur border-b',
					{
						'w-[20rem]': !toggleCollapse,
						'left-[-100%] sm:left-0 sm:w-[5.4rem] justify-center':
							toggleCollapse,
					}
				)}
			>
				<div className="flex gap-2 text-black dark:text-white h-[50px] items-end">
					<div className="w-full h-full flex items-start justify-start">
						<div className="relative inset-0 w-[50px] h-[50px]">
							<Image
								src={logo}
								width={500}
								height={500}
								alt="ALX"
								className="h-full object-cover"
							/>
						</div>
					</div>

					<div
						className={cn('min-w-max', {
							hidden: toggleCollapse,
						})}
					></div>
				</div>
			</div>

			<nav className="flex-1 overflow-y-auto pt-5 px-4 space-y-5 text-black dark:text-white">
				{SIDENAV_ITEMS.map((item: SideNavItem) => (
					<SideBarMenuGroup key={item.title} menuGroup={item} />
				))}
			</nav>

			<div className="p-4 mt-auto">
				{toggleCollapse ? (
					<div className="flex justify-center align-center border py-2 border-red-700 rounded-lg">
						<LogOut
							className="text-red-700 cursor-pointer"
							onClick={logout}
						/>
					</div>
				) : (
					<Button
						onClick={logout}
						className="bg-primary w-full dark:bg-red-700"
						type="button"
						label="Logout"
					/>
				)}
			</div>
		</aside>
	);
}

export default SideBar;
