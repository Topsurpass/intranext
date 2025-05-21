'use client';

import { Card, CardContent } from '@/components/ui/card';
import CardTopHeader from '@/components/card-top-header';

export default function UpcomingEvent() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardTopHeader
				classNameHeader="px-5"
				title="Upcoming Events"
				description="Events to watchout for"
				classNameTitle="text-lg"
			/>
			<CardContent>
				<div className="flex w-full flex-grow flex-col items-start">
					<div className="h-24 w-full">
						<p className="flex h-full w-full items-center justify-center text-center">
							None, enjoy the silence.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
