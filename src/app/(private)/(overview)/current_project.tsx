'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { FiArrowRight, FiPackage } from 'react-icons/fi';
import { ReactNode } from 'react';

type EmptyStateProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

export default function CurrentProjects() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<div>
						<CardTitle>Active Projects</CardTitle>
						<CardDescription>
							Ongoing initiatives and tasks
						</CardDescription>
					</div>
					<button className="flex items-center">
						View All <FiArrowRight className="ml-2 h-4 w-4" />
					</button>
				</div>
			</CardHeader>
			<CardContent className="h-48">
				<EmptyState
					icon={<FiPackage className="h-8 w-8" />}
					title="No Active Projects"
					description="All tasks completed - great work!"
				/>
			</CardContent>
		</Card>
	);
}

const EmptyState = ({ icon, title, description }: EmptyStateProps) => (
	<div className="flex h-full flex-col items-center justify-center gap-3 text-center">
		<div className="rounded-full bg-muted p-4">{icon}</div>
		<div className="space-y-1">
			<p className="font-medium">{title}</p>
			<p className="text-sm text-muted-foreground">{description}</p>
		</div>
	</div>
);
