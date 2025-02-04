'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { curriculumNav } from '@/data/navLinks';
import { cn } from '@/lib/utils';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import { FiDownload, FiChevronRight } from 'react-icons/fi';

export default function Layout({ children }) {
	const pathname = usePathname();

	return (
		<Card className="shadow-none rounded-none border-none p-0 space-y-6">
			<CardHeader className="flex flex-col gap-4 px-0 md:flex-row md:items-center md:justify-between">
				<div className="space-y-1">
					<CardTitle className="text-2xl font-semibold tracking-tight">
						Academic Curriculum
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						Track your academic progress and manage credentials
					</CardDescription>
				</div>

				<Link
					href="#"
					className="group flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
				>
					<FiDownload className="h-4 w-4" />
					<span className="text-sm font-medium">
						Download Transcript
					</span>
					<FiChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
				</Link>
			</CardHeader>

			<CardContent className="space-y-6 p-0 border-none">
				<nav className="flex space-x-4 border-b">
					{curriculumNav.map((data, idx) => (
						<Link
							key={idx}
							href={data.path}
							className={cn(
								'relative px-1 pb-3 text-sm font-medium text-muted-foreground transition-all',
								'hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all',
								{
									'text-foreground after:w-full':
										pathname === data.path,
								}
							)}
						>
							{data.name}
						</Link>
					))}
				</nav>

				<div className="bg-card">{children}</div>
			</CardContent>
		</Card>
	);
}
