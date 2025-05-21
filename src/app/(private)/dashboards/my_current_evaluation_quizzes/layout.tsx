'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import CardTopHeader from '@/components/card-top-header';
import { ReactNode } from 'react';


const curriculumNav = [
	{
		name: 'Completed exams',
		path: '/dashboards/my_current_evaluation_quizzes',
	},
	{
		name: 'Available exams',
		path: '/dashboards/my_current_evaluation_quizzes/available',
	},
];


export default function Layout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<Card className="shadow-none rounded-none border-none p-0">
			<CardTopHeader
				title="Evaluation Quizzes"
				description="Comprehensive performance tracking through monthly
					assessments"
			/>

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
