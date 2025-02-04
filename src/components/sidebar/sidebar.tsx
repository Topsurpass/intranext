'use client';

import classNames from 'classnames';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from '@/components/sidebar/sidebar-menu-group';
import SIDENAV_ITEMS from '@/routes/menu-list';
import { cn } from '@/lib/utils';
import { SideNavItem } from '@/types/sidenav-item';
// import HeroPic from '@/assets/me-hero.jpg';

function SideBar() {
	const { toggleCollapse } = useSideBarToggle();

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
					'sidebar-top fixed flex items-center px-4 py-4 backdrop-blur',
					//'shadow-sm shadow-slate-500/40',
					{
						'w-[20rem]': !toggleCollapse,
						'left-[-100%] sm:left-0 sm:w-[5.4rem]': toggleCollapse,
					}
				)}
			>
				<div className="flex flex-col gap-3 text-black dark:text-white">
					{/* <img src={HeroPic} alt="logo" className="h-12 w-12 rounded-full" /> */}
					<h3 className="text-2xl font-extrabold leading-5">ALX</h3>
					<div
						className={cn('min-w-max', {
							hidden: toggleCollapse,
						})}
					>
						<p className=" text-sm font-extralight leading-3">
							Software Engineering programme
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
				<div className="flex flex-col gap-5 px-4 pt-10">
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
			{/*<IdleTimerModal />*/}
		</aside>
	);
}

export default SideBar;
