'use client';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetUserProfile } from '@/api/user/use-get-user-details';
import CardTopHeader from '@/components/card-top-header';

export default function Welcome() {
	const { data: userProfile, isLoading } = useGetUserProfile();

	return (
		<Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background shadow-lg rounded-xl">
			{isLoading ? (
				<div className="space-y-2 px-5 py-4">
					<Skeleton className="h-6 w-2/4" />
					<Skeleton className="h-4 w-full" />
				</div>
			) : (
				<CardTopHeader
					title={`Welcome Back ${userProfile?.first_name || ''}, ${userProfile?.last_name || ''}!`}
					description="Your dedication to learning is inspiring! Keep up the great work. 🚀"
					classNameHeader="space-y-2 px-5"
					classNameTitle="text-xl tracking-tight text-primary"
					classNameDescription="text-muted-foreground text-sm"
				/>
			)}
		</Card>
	);
}
