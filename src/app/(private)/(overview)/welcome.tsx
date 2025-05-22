'use client';

import { Card } from '@/components/ui/card';
import { useGetUserProfile } from '@/api/user/use-get-user-details';
import CardTopHeader from '@/components/card-top-header';

export default function Welcome() {
	const { data: userProfile } = useGetUserProfile();

	return (
		<Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background shadow-lg rounded-xl">
			<CardTopHeader
				title={`Welcome Back ${userProfile?.first_name || ''}, ${userProfile?.last_name || ''}!`}
				description="Your dedication to learning is inspiring! Keep up the great
					work. 🚀"
				classNameHeader="space-y-2 px-5"
				classNameTitle="text-xl tracking-tight text-primary"
				classNameDescription="text-muted-foreground text-sm"
			/>
		</Card>
	);
}
