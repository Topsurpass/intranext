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
}

function SkeletonUpdated({ className = '' }: { className?: string }) {
	return <Skeleton className={cn('h-7 w-48 bg-royal/60', className)} />;
}

export function TableSkeleton({ columns = 7, rows = 14 }: ITableSkeleton) {
	return (
		<div className="rounded-md border border-royal">
			{/* search, filter simulation */}
			<div className="flex justify-between px-3 py-4">
				{/* <div className="justify-between px-3 py-4 hidden"> */}
				<div>
					<SkeletonUpdated className="h-7 w-48" />
				</div>
				<div>
					<div className="flex gap-2">
						<SkeletonUpdated className="h-7 w-32" />
						<SkeletonUpdated className="h-7 w-32" />
					</div>
				</div>
			</div>
			{/* table data display simulation */}
			<Table>
				<TableHeader>
					<TableRow className="border-b-royal">
						{[...Array(columns).keys()].map((item) => {
							return (
								<TableHead
									key={item}
									className="whitespace-nowrap px-3 py-3"
								>
									<SkeletonUpdated className="h-6 w-24" />
								</TableHead>
							);
						})}
					</TableRow>
				</TableHeader>
				<TableBody>
					{[...Array(rows).keys()].map((item) => {
						return (
							<TableRow key={item} className="border-b-royal">
								{[...Array(columns).keys()].map((i) => {
									return (
										<TableCell
											key={i}
											className="whitespace-nowrap px-3 py-3"
										>
											<SkeletonUpdated className="h-6 w-24" />
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			{/* pagination simulation */}
			<div className="flex items-center justify-between border-b-royal py-5 pl-3 pr-5">
				<div className="">
					<SkeletonUpdated className="h-8 w-36" />
				</div>
				<div className="">
					<SkeletonUpdated className="h-8 w-36" />
				</div>
				<div className="flex items-center gap-4">
					<div className="">
						<SkeletonUpdated className="h-8 w-36" />
					</div>
					<div className="flex gap-2">
						{[...Array(5).keys()].map((item) => {
							return (
								<SkeletonUpdated
									key={item}
									className="h-8 w-10"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
