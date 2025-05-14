'use client';

import { PiGitBranchBold } from 'react-icons/pi';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import TechstackAccordion from './techstack-accordion';
import { useGetTechstacks } from '@/api/techstack/use-get-techstack';
import { ProjectAccordionSkeleton } from '@/components/skeletons/project-skeleton';

export default function Page() {
	const { data: techstacksData, isLoading } = useGetTechstacks();
	{
	}
	return (
		<Card className="rounded-none border-none p-0 shadow-none">
			<CardHeader className="border-none border-0 px-0">
				<CardTitle className="text-2xl">My project</CardTitle>
				<CardDescription>
					Previous projects completed and scored
				</CardDescription>
			</CardHeader>
			<CardContent className="px-0">
				<div className="group relative flex  w-full flex-col items-center justify-center rounded-xl border bg-gradient-to-br from-primary/5 to-background p-8 transition-all">
					<div className="absolute inset-0 bg-repeat  dark:opacity-10" />
					<div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center ">
						<div className="rounded-full bg-primary/10 p-4 transition-all bg-gradient-to-br from-primary/5 to-background">
							<PiGitBranchBold className="text-4xl text-primary/80" />
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold">
								No Active Projects
							</h3>
							<p className="text-muted-foreground text-sm">
								You will find projects here as soon as they are
								available
							</p>
						</div>
					</div>
				</div>
			</CardContent>
			{isLoading ? (
				<ProjectAccordionSkeleton />
			) : (
				<TechstackAccordion data={techstacksData} className="my-4" />
			)}
		</Card>
	);
}
