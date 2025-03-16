'use client';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
	const params = useParams<{ id: string }>();
	const pathname = usePathname();
	const id = params.id;

	const subNavLinks = [
		{ label: 'Resources', href: `/projects/${id}/concepts` },
		{ label: 'Short quiz', href: `/projects/${id}/quiz` },
		{ label: 'Task', href: `/projects/${id}` },
	];

	return (
		<div className="h-screen">
			<div className="border-b border-gray-300 mb-4 dark:border-gray-800">
				<nav className="flex space-x-8">
					{subNavLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`py-2 px-4${
								pathname === link.href
									? 'font-semibold border-b-2 border-red-500'
									: 'border-transparent text-gray-600 dark:text-gray-500 hover:text-red-500'
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
			{children}
		</div>
	);
}
