'use client';

import { Card, CardContent } from '@/components/ui/card';
import CardTopHeader from '@/components/card-top-header';
import Empty from '@/components/empty';
import { LiaProjectDiagramSolid } from 'react-icons/lia';

export default function CurrentProjects() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardTopHeader
				title="Active Projects"
				description="Ongoing initiatives and tasks"
				classNameHeader="p-5"
				classNameTitle="text-lg font-semibold"
			/>
			<CardContent className="p-">
				<Empty
					Icon={LiaProjectDiagramSolid}
					title="No Active Project"
					description="All active projects will be displayed here once they are available."
				/>
			</CardContent>
		</Card>
	);
}
