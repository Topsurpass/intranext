import { Skeleton } from '@/components/ui/skeleton';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/table';
import { cn } from '@/lib/utils';

interface ITableSkeleton {
	columns?: number;
	rows?: number;
	className?: string;
}

const shimmerAnimation = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

export function TableSkeleton({
	columns = 7,
	rows = 7,
	className,
}: ITableSkeleton) {
	return (
		<div className={cn('rounded-lg border border-gray-200 ', className)}>
			<style>{shimmerAnimation}</style>

			<div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
				<div className="w-full sm:w-64">
					<Skeleton className="h-10 w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
				</div>
				<div className="flex gap-3">
					<Skeleton className="h-10 w-24 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
					<Skeleton className="h-10 w-32 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
				</div>
			</div>

			<div className="overflow-x-auto">
				<Table className="min-w-[800px]">
					<TableHeader className="">
						<TableRow>
							{[...Array(columns)].map((_, i) => (
								<TableHead key={i} className="px-4 py-3">
									<Skeleton className="h-5 w-3/4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{[...Array(rows)].map((_, rowIndex) => (
							<TableRow key={rowIndex} className="">
								{[...Array(columns)].map((_, colIndex) => (
									<TableCell
										key={colIndex}
										className="px-4 py-3"
									>
										<Skeleton
											className={cn(
												'h-5 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50',
												colIndex === 0
													? 'w-3/4'
													: 'w-full'
											)}
										/>
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<div className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:justify-between border-t border-gray-200">
				<Skeleton className="h-8 w-32 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
				<div className="flex items-center gap-2">
					<Skeleton className="h-8 w-8 rounded-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
					<Skeleton className="h-8 w-8 rounded-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
					<div className="flex gap-1">
						{[1, 2, 3].map((page) => (
							<Skeleton
								key={page}
								className="h-8 w-8 rounded-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
							/>
						))}
					</div>
					<Skeleton className="h-8 w-8 rounded-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
					<Skeleton className="h-8 w-8 rounded-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
				</div>
				<Skeleton className="h-8 w-40 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
			</div>
		</div>
	);
}

// Optional: Standalone row skeleton for flexible use
export function RowSkeleton({ columns = 7 }: { columns?: number }) {
	return (
		<TableRow>
			{[...Array(columns)].map((_, i) => (
				<TableCell key={i} className="px-4 py-3">
					<Skeleton className="h-5 w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
				</TableCell>
			))}
		</TableRow>
	);
}
