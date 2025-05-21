'use client';

import { Card, CardContent } from '@/components/ui/card';
import { FiPackage } from 'react-icons/fi';
import CardTopHeader from '@/components/card-top-header';
import Empty from '@/components/empty';

export default function CurrentProjects() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardTopHeader
				title="Active Projects"
				description="Ongoing initiatives and tasks"
				classNameHeader="p-5"
				classNameTitle="text-lg font-semibold"
			/>
			<CardContent className="h-48">
				<Empty
					Icon={FiPackage}
					title="No Active Projects"
					description="All tasks completed - great work!"
				/>
			</CardContent>
		</Card>
	);
}
