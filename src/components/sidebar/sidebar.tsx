'use client';

import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from '@/components/sidebar/sidebar-menu-group';
import SIDENAV_ITEMS from '@/routes/menu-list';
import { cn } from '@/lib/utils';
import { SideNavItem } from '@/types/sidenav-item';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/user-store';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

function SideBar() {
	const { toggleCollapse } = useSideBarToggle();
	const logout = useAuthStore((state) => state.reset);

	const asideStyle = classNames(
		'bg-sidebar text-white overflow-y-auto overflow-x-auto fixed h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[50]',
		{
			'w-[20rem]': !toggleCollapse,
			'sm:w-[5.4rem] sm:left-0 left-[-100%]': toggleCollapse,
		}
	);

	return (
		<aside className={asideStyle}>
			<div
				className={cn(
					'sidebar-top fixed flex items-center px-4 py-3 backdrop-blur border',
					{
						'w-[20rem]': !toggleCollapse,
						'left-[-100%] sm:left-0 sm:w-[5.4rem] justify-center':
							toggleCollapse,
					}
				)}
			>
				<div className="flex gap-2 text-black  dark:text-white h-[50px] items-end">
					<div className="w-full h-full flex items-start justify-start">
						<div className="relative inset-0 w-[50px] h-[50px]">
							<Image
								src={logo}
								alt="ALX"
								className="h-full object-cover"
								layout="fill"
							/>
						</div>
					</div>

					<div
						className={cn('min-w-max', {
							hidden: toggleCollapse,
						})}
					>
						<p className=" text-sm font-serif font-extralight leading-3">
							Temz&Tech
						</p>
					</div>
				</div>
			</div>
			<nav
				className={cn(
					'flex flex-col gap-2 pt-14 transition duration-300 ease-in-out text-black dark:text-white',
					{}
				)}
			>
				<div className="flex flex-col gap-5 px-4 pt-12">
					{SIDENAV_ITEMS.map((item: SideNavItem) => {
						return (
							<SideBarMenuGroup
								key={item.title}
								menuGroup={item}
							/>
						);
					})}
				</div>
			</nav>

			<div className="flex justify-center mt-4">
				<Button
					onClick={logout}
					className="bg-primary w-full mx-4 mb-2 dark:bg-red-700"
					type="button"
				>
					Logout
				</Button>
			</div>
		</aside>
	);
}

export default SideBar;
