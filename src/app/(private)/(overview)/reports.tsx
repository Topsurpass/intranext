'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';

export default function Report() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardHeader className="">
				<CardTitle>Reports</CardTitle>
				<CardDescription>View reports</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex w-full flex-grow flex-col items-start">
					<p className="flex h-full w-full text-red-500">1 report</p>
				</div>
			</CardContent>
		</Card>
	);
}
