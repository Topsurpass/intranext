'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import { FiPlayCircle } from 'react-icons/fi';
import useAuthStore from '@/store/user-store';

export default function Welcome() {
	const firstName = useAuthStore((state) => state.firstname);

	return (
		<Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background">
			<CardHeader className="">
				<CardTitle className="text-2xl font-semibold tracking-tight">
					Welcome Back, {firstName}!
					<span className="ml-2 text-2xl">👋</span>
				</CardTitle>
				<CardDescription className="">
					We recognize your grit and consistency in learning. Keep it
					up!
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
					<div className="space-y-1">
						<p className="font-medium">Current Progress</p>
						<div className="flex items-center gap-2">
							<div className="h-2 w-32 rounded-full bg-muted">
								<div className="h-full w-4/6 rounded-full bg-primary" />
							</div>
							<span className="text-sm text-muted-foreground">
								Week 6/10
							</span>
						</div>
					</div>
					<button className="gap-2 transition-all hover:scale-[1.02]">
						<FiPlayCircle className="h-4 w-4" />
						Resume Learning
					</button>
				</div>
			</CardContent>
		</Card>
	);
}
