'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { MenuList } from '@/types/sidenav-item';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import { cn } from '@/lib/utils';

export default function SideBarMenuItem({ item }: { item: MenuList }) {
	const { toggleCollapse, closeSidebarOnMobile } = useSideBarToggle();
	const pathname = usePathname();
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	};

	const inactiveLink = cn(
		'flex items-center min-h-[40px] h-full py-2 px-4 hover:text-caution-foreground hover:bg-caution rounded-md transition duration-200',
		{ 'justify-center': toggleCollapse }
	);

	const activeLink = cn(
		'bg-caution text-foreground shadow-md border border-gray-400'
	);

	const navMenuDropdownItem =
		'text-red py-2 px-4 hover:text-caution transition duration-200 rounded-md';

	const dropdownMenuHeaderLink = cn(inactiveLink, {
		'rounded-b-none': subMenuOpen,
		'w-full': true,
	});

	return (
		<div>
			{item.submenu ? (
				<div className="min-w-[18px]">
					<button
						type="button"
						className={`${dropdownMenuHeaderLink} ${
							pathname === item.path ||
							pathname.startsWith(`${item.path}/`)
								? activeLink
								: ''
						}`}
						onClick={toggleSubMenu}
					>
						<div>{item.icon}</div>
						{!toggleCollapse && (
							<div className="flex flex-1 items-center justify-between">
								<span className="ml-3 cursor-pointer text-base font-semibold leading-6">
									{item.title}
								</span>
								<div>
									<BsChevronRight
										className={`${
											subMenuOpen ? 'rotate-90' : ''
										} ml-auto cursor-pointer stroke-2 text-xs`}
									/>
								</div>
							</div>
						)}
					</button>
					{subMenuOpen && !toggleCollapse && (
						<div className="border-l-4 bg-royal/20">
							<div className="grid gap-y-3 px-8 py-0 leading-3">
								{item.subMenuItems?.map((subItem) => (
									<Link
										key={subItem.path}
										href={subItem.path}
										className={`${navMenuDropdownItem} ${
											subItem.path === pathname
												? 'font-medium text-caution'
												: ''
										}`}
										onClick={closeSidebarOnMobile}
									>
										<span className="text-base font-normal">
											{subItem.title}
										</span>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			) : (
				<Link
					href={item.path}
					className={`${inactiveLink} ${
						pathname === item.path ||
						pathname.startsWith(`${item.path}/`)
							? activeLink
							: ''
					} hover:bg-sidebarhover`}
					onClick={closeSidebarOnMobile}
				>
					<div className="min-w-[20px] dark:text-gray-100 text-gray-500 font-extrabold text-2xl">
						{item.icon}
					</div>
					{!toggleCollapse && (
						<span className="ml-3 font-semibold leading-6">
							{item.title}
						</span>
					)}
				</Link>
			)}
		</div>
	);
}
