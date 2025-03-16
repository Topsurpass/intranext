'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import { HiOutlineLightBulb } from 'react-icons/hi';
import useAuthStore from '@/store/user-store';

export default function Welcome() {
	const firstName = useAuthStore((state) => state.firstname);

	return (
		<Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background shadow-lg rounded-xl">
			<CardHeader className="space-y-2">
				<CardTitle className="text-xl tracking-tight text-primary">
					Welcome Back, {firstName}! <span className="text-xl">👋</span>
				</CardTitle>
				<CardDescription className="text-muted-foreground text-">
					Your dedication to learning is inspiring! Keep up the great work. 🚀
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-6">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div className="w-full space-y-2">
						<p className="font-medium">Current Learning Progress</p>
						<div className="relative w-full h-3 rounded-full bg-muted">
							<div className="h-full w-4/6 rounded-full bg-primary transition-all"></div>
						</div>
						<p className="text-sm text-muted-foreground">Week 6 of 10</p>
					</div>
				</div>

				<div className="rounded-lg flex items-center gap-2">
					<HiOutlineLightBulb className="h-8 w-8 text-yellow-500" />
					<div>
						<p className="font-medium">Keep the Momentum Going!</p>
						<p className="text-sm">
							Set a goal to complete your next lesson today. Small steps lead to big success!
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
