'use client';

import { useMemo, useState } from 'react';
import {
	ColumnDef,
	PaginationState,
	VisibilityState,
} from '@tanstack/react-table';
import DataTableSSR from '@/components/table/datatable-ssr';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';
import { useGetConcepts } from '@/api/concept/use-get-concepts';
import { Concept } from '@/data/concept-data';

export default function ConceptTable() {
	const [searchText, setSearchText] = useState('');
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		{}
	);
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isLoading, isError, error } = useGetConcepts();

	const concepts: Concept[] = useMemo(() => data || [], [data]);

	const filteredData = useMemo(() => {
		return concepts.filter((concept) =>
			(concept.title?.toLowerCase() ?? '').includes(
				searchText.toLowerCase()
			)
		);
	}, [concepts, searchText]);

	const paginatedData = useMemo(() => {
		const start = pageIndex * pageSize;
		return filteredData.slice(start, start + pageSize);
	}, [filteredData, pageIndex, pageSize]);

	const columns = useMemo<ColumnDef<Concept>[]>(
		() => [
			{
				accessorKey: 'title',
				header: () => (
					<span className="text-xl font-semibold">Concept Title</span>
				),
				cell: ({ row }) => (
					<Link
						href={`/concepts/${row.original.id}`}
						className="font-medium text-foreground hover:text-primary transition-colors hover:underline"
					>
						{row.original.title}
					</Link>
				),
			},
		],
		[]
	);

	if (isError)
		return (
			<p className="text-red-500 text-center">
				Error: {(error as Error).message}
			</p>
		);

	return (
		<Card className="rounded-lg border-0 shadow-none space-y-3 flex flex-col">
			<CardHeader className="px-0">
				<div className="flex flex-col space-y-1.5">
					<CardTitle className="text-2xl font-semibold leading-none tracking-tight">
						Technical Concepts Library
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						{concepts.length} essential development concepts to
						master
					</CardDescription>
				</div>
			</CardHeader>

			<DataTableSSR
				data={paginatedData}
				columns={columns}
				pageCount={Math.ceil(filteredData.length / pageSize)}
				totalRecords={filteredData.length}
				pagination={{ pageIndex, pageSize }}
				setPagination={setPagination}
				setSearchText={setSearchText}
				pageSizeOptions={[5, 10, 15, 25]}
				isLoading={isLoading}
				columnVisibility={columnVisibility}
				setColumnVisibility={setColumnVisibility}
				showFilter={false}
				numOfSkeletonRows={5}
			/>
		</Card>
	);
}
