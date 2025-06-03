import { Skeleton } from '@/components/ui/skeleton';
import { CardContent, Card } from '@/components/ui/card';

export function ScoresSkeleton() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background space-y-5">
			<div className="flex justify-between items-center flex-wrap border-b border-black dark:border-white">
				<CardContent className="flex justify-between items-center flex-wrap p-5">
					<div className="space-y-2">
						<Skeleton className="h-5 w-40" />
						<Skeleton className="h-4 w-64" />
					</div>
				</CardContent>
				<div className="px-5 pb-5">
					<Skeleton className="h-5 w-40" />
				</div>
			</div>

			<CardContent className="flex flex-col gap-6">
				{Array.from({ length: 1 }).map((_, i) => (
					<div key={i}>
						<div className="flex justify-between items-center mb-2">
							<Skeleton className="h-4 w-40" />
							<Skeleton className="h-5 w-24 rounded-md" />
						</div>
						<div className="flex flex-col gap-2">

							{Array.from({ length: 5 }).map((_, j) => (
								<div
									key={j}
									className="flex justify-between items-center"
								>
									<Skeleton className="h-4 w-60" />
									<Skeleton className="h-4 w-10" />
								</div>
							))}
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
