import { ReactNode, useEffect, useState } from 'react';

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	OnChangeFn,
	PaginationState,
	useReactTable,
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '.';
import { TableSkeleton } from '@/components/ui/skeleton/table-skeleton';
import DataTablePagination from '@/components/table/datatable-pagination';
import DatatableSearchInputSSR from '@/components/table/datatable-search-input';
import DatatableStatusFilterSsr from '@/components/table/datatable-status-filter-ssr';
import DatatableViewOptions from '@/components/table/datatable-view-options';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	pagination: PaginationState;
	pageCount: number;
	totalRecords: number;
	pageSizeOptions: number[];
	isLoading?: boolean;
	isSearchable?: boolean;
	showFooter?: boolean;
	setPagination: OnChangeFn<PaginationState>;
	setSearchText?: React.Dispatch<React.SetStateAction<string>>;
	columnVisibility?: Record<string, boolean>;
	setColumnVisibility?: React.Dispatch<
		React.SetStateAction<Record<string, boolean>>
	>;
	status?: string;
	showFilter?: boolean;
	setStatus?: React.Dispatch<React.SetStateAction<string | undefined>>;
	numOfSkeletonColumns?: number;
	numOfSkeletonRows?: number;
	filterStatusData?: { value: string; label: string }[];
	emptyTableData?: ReactNode | string;
}

export default function DataTableSSR<TData, TValue>({
	columns,
	data,
	pagination,
	setPagination,
	setSearchText,
	pageCount,
	totalRecords,
	pageSizeOptions,
	isLoading = false,
	isSearchable = true,
	showFooter = false,
	columnVisibility,
	setColumnVisibility,
	setStatus = undefined,
	status = '',
	filterStatusData,
	showFilter = true,
	numOfSkeletonColumns = 7,
	numOfSkeletonRows = 14,
	emptyTableData = 'No Resuslt',
}: DataTableProps<TData, TValue>) {
	const [globalFilter, setGlobalFilter] = useState('');

	const table = useReactTable({
		data,
		columns,
		state: {
			// sorting,
			// rowSelection,
			// columnFilters,
			columnVisibility,
			globalFilter,
			pagination,
		},
		pageCount,
		onPaginationChange: setPagination,
		onGlobalFilterChange: setGlobalFilter,
		enableRowSelection: true,
		manualPagination: true,
		manualFiltering: true,
		// onRowSelectionChange: setRowSelection,
		// onSortingChange: setSorting,
		// onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		autoResetPageIndex: false,
		// getFacetedRowModel: getFacetedRowModel(),
		// getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	useEffect(() => {
		table.resetPageIndex(true);
	}, [table, pagination.pageSize, globalFilter, status]);

	useEffect(() => {
		if (setSearchText) {
			setSearchText(globalFilter);
		}
	}, [globalFilter, setSearchText]);

	//   const refresh = () => {
	//     queryClient.invalidateQueries({ queryKey: [refreshKey] });
	//   };

	return isLoading ? (
		<TableSkeleton
			columns={numOfSkeletonColumns}
			rows={numOfSkeletonRows}
		/>
	) : (
		<div className="min-w-full space-y-5 overflow-x-auto border rounded-md h-auto">
			<div className="py-3">
				{/* other goes here */}
				<div className="mb-4 flex items-center justify-end gap-3 px-5">
					{isSearchable && (
						<div className="md:w-1/5">
							<DatatableSearchInputSSR
								placeholder="Search..."
								value={globalFilter?.trim() ?? ''}
								onChange={(value) =>
									setGlobalFilter(String(value))
								}
								debounce={1000}
							/>
						</div>
					)}
					{showFilter && (
						<DatatableStatusFilterSsr
							status={status}
							setStatus={setStatus}
							filterStatusData={filterStatusData}
						/>
					)}
					<DatatableViewOptions table={table} />
				</div>

				<Table className="min-w-full table-auto">
					<TableHeader className="bg-muted/50 [&_tr]:hover:bg-transparent">
						{table?.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className="">
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
										className="font-medium text-black dark:text-white"
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table?.getRowModel().rows?.length ? (
							table?.getRowModel()?.rows?.map((row) => (
								<TableRow
									key={row.id}
									className="border-t transition-colors hover:bg-muted/50"
									data-state={
										row.getIsSelected() && 'selected'
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell
											className="cursor-pointer"
											key={cell.id}
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns?.length}
									className="h-48 text-center text-muted-foreground"
								>
									{/* No results */}

									{emptyTableData}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
					{showFooter && data?.length > 10 && (
						<TableFooter>
							{table?.getFooterGroups()?.map((footerGroup) => (
								<TableRow key={footerGroup.id} className="">
									{footerGroup.headers.map((header) => (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
													)}
										</TableHead>
									))}
								</TableRow>
							))}
						</TableFooter>
					)}
				</Table>
				<div className="p-5 border-t">
					<DataTablePagination
						totalRecords={totalRecords}
						table={table}
						pageSizeOptions={pageSizeOptions}
					/>
				</div>
			</div>
		</div>
	);
}
