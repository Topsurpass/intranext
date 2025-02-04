'use client';

import { useMemo, useState, useEffect } from 'react';
import {
	ColumnDef,
	PaginationState,
	VisibilityState,
} from '@tanstack/react-table';
import DataTableSSR from '@/components/table/datatable-ssr';
import { Concept, conceptData } from '@/data/concept-data';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';

export default function ConceptTable() {
	const [searchText, setSearchText] = useState('');
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
		{}
	);
	const [filteredData, setFilteredData] = useState<Concept[]>(
		conceptData.data
	);
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	useEffect(() => {
		const filtered = conceptData.data.filter((concept) =>
			concept.topic.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredData(filtered);
		setPagination((prev) => ({ ...prev, pageIndex: 0 }));
	}, [searchText]);

	const paginatedData = useMemo(() => {
		const start = pageIndex * pageSize;
		return filteredData.slice(start, start + pageSize);
	}, [filteredData, pageIndex, pageSize]);

	const columns = useMemo<ColumnDef<Concept>[]>(
		() => [
			{
				accessorKey: 'topic',
				header: () => (
					<span className="text-xl font-semibold">Concept Topic</span>
				),
				cell: ({ row }) => (
					<span className="font-medium text-foreground hover:text-primary transition-colors">
						<Link
							href={`/concepts/${row.original.id}`}
							className="hover:underline "
						>
							{row.original.topic}
						</Link>
					</span>
				),
			},
		],
		[]
	);

	return (
		<Card className="rounded-lg border-0 shadow-none space-y-3 flex flex-col ">
			<CardHeader className="px-0">
				<div className="flex flex-col space-y-1.5">
					<CardTitle className="text-2xl font-semibold leading-none tracking-tight">
						Technical Concepts Library
					</CardTitle>
					<CardDescription className="text-muted-foreground">
						{conceptData.totalRecords} essential development
						concepts to master
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
				isLoading={false}
				columnVisibility={columnVisibility}
				setColumnVisibility={setColumnVisibility}
				showFilter={false}
			/>
		</Card>
	);
}
