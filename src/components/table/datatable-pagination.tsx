import { Table } from '@tanstack/react-table';
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react';
import paginationRange from '@/lib/pagination-range';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface DataTablePaginationProps<TData> {
	table: Table<TData>;
	totalRecords: number;
	pageSizeOptions?: number[];
}

export default function DataTablePagination<TData>({
	table,
	totalRecords,
	pageSizeOptions,
}: DataTablePaginationProps<TData>) {
	const pageRange = paginationRange({
		totalPage: table.getPageCount(),
		page: table.getState().pagination.pageIndex + 1,
		siblings: 1,
	});
	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			<div>
				<div className="flex w-[100px] text-sm font-medium">
					Page {table.getState().pagination.pageIndex + 1} of{' '}
					{table.getPageCount()}
				</div>
				<div className="flex text-sm">
					Total records: {totalRecords}
				</div>
			</div>
			<div className="flex items-center space-x-2 2xl:col-span-2">
				<Button
					variant="outline"
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
					className="rounded-full dark:bg-white dark:text-black"
					size="icon"
				>
					<span className="sr-only">Go to first page</span>
					<ChevronsLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					className="rounded-full dark:bg-white dark:text-black"
					size="icon"
				>
					<span className="sr-only">Go to previous page</span>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				{pageRange.map((item: number | string) => {
					return (
						<Button
							key={item}
							variant={
								table.getState().pagination.pageIndex + 1 ===
								item
									? 'royal'
									: 'outline'
							}
							onClick={() =>
								typeof item === 'number' &&
								table.setPageIndex(item - 1)
							}
							disabled={item === '...'}
							className={cn(
								'rounded-full',
								table.getState().pagination.pageIndex + 1 ===
									item &&
									'bg-black dark:bg-white text-white dark:text-black'
							)}
							size="icon"
						>
							{item}
						</Button>
					);
				})}
				<Button
					variant="outline"
					// className="h-8 w-8 p-0"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
					className="rounded-full dark:bg-white dark:text-black"
					size="icon"
				>
					<span className="sr-only">Go to next page</span>
					<ChevronRight className="h-5 w-5 rounded-full" />
				</Button>
				<Button
					variant="outline"
					// className="hidden h-8 w-8 p-0 lg:flex"
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
					size="icon"
					className="rounded-full dark:bg-white dark:text-black"
				>
					<span className="sr-only">Go to last page</span>
					<ChevronsRight className="h-4 w-4" />
				</Button>
			</div>
			<div className="flex items-center space-x-2">
				<Select
					value={`${table.getState().pagination.pageSize}`}
					onValueChange={(value) => {
						table.setPageSize(Number(value));
					}}
				>
					<SelectTrigger className="h-8 w-[70px]">
						<SelectValue
							placeholder={table.getState().pagination.pageSize}
						/>
					</SelectTrigger>
					<SelectContent side="top">
						{pageSizeOptions?.map((pageSize) => (
							<SelectItem
								key={pageSize}
								value={`${pageSize}`}
								className="cursor-pointer"
							>
								{pageSize}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p className="text-sm font-medium">Data per page</p>
			</div>
		</div>
	);
}
