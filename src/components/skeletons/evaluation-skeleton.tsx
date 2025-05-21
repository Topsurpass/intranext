type CourseScoreSkeletonProps = {
	length?: number;
};

export function EvaluationSkeleton({ length = 3 }: CourseScoreSkeletonProps) {
	return (
		<>
			{Array.from({ length }).map((_, i) => (
				<div
					key={i}
					className="animate-pulse space-y-4 rounded-xl border bg-card p-6"
				>
					<div className="flex justify-between">
						<div className="h-4 w-1/3 rounded bg-muted" />
						<div className="h-3 w-1/4 rounded bg-muted" />
					</div>
					<div className="h-4 w-2/3 rounded bg-muted" />

					<div className="space-y-3">
						<div className="flex justify-between">
							<div className="h-3 w-1/4 rounded bg-muted" />
							<div className="h-3 w-1/4 rounded bg-muted" />
						</div>
						<div className="h-2 w-full rounded-full bg-muted" />
					</div>

					<div className="h-10 w-full rounded-lg bg-muted/50" />
				</div>
			))}
		</>
	);
}
