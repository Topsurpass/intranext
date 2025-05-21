'use client';

import { Card, CardContent } from '@/components/ui/card';
import CardTopHeader from '@/components/card-top-header';
import Empty from '@/components/empty';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function UpcomingEvent() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardTopHeader
				classNameHeader="px-5"
				title="Upcoming Events"
				description="Events to watchout for"
				classNameTitle="text-lg"
			/>
			<CardContent className="p-0">
				<Empty
					title="No event"
					description="Events will appear here as they are scheduled"
					Icon={FaRegCalendarAlt}
				/>
			</CardContent>
		</Card>
	);
}
