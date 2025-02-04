'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';

export default function UpcomingEvent() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardHeader className="border-b">
				<CardTitle>Upcoming Events</CardTitle>
				<CardDescription>Events to watchout for</CardDescription>
			</CardHeader>
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
