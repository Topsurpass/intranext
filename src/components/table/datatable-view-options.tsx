// datatable-view-options.tsx
import { PopoverClose } from '@radix-ui/react-popover';
import { Table } from '@tanstack/react-table';
import { Settings2, XCircle } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface IProps<TData> {
	table: Table<TData>;
}

export default function DatatableViewOptions<TData>({ table }: IProps<TData>) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				{/* Use div wrapper instead of direct Button */}
				<div className="flex">
					<Button
						variant="outline"
						type="button"
						aria-label="Column visibility options"
					>
						<Settings2 className="mr-2 h-4 w-4" />
						<span>Column</span>
					</Button>
				</div>
			</PopoverTrigger>
			<PopoverContent align="end" className="w-[200px] p-2">
				<div className="mb-3 flex items-center justify-between">
					<h2 className="text-sm font-medium">Table Columns</h2>
					<PopoverClose asChild>
						{/* Use basic button element instead of Button component */}
						<button
							type="button"
							className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
							aria-label="Close column visibility menu"
						>
							<XCircle className="h-4 w-4" />
						</button>
					</PopoverClose>
				</div>
				{table
					.getAllColumns()
					.filter((column) => column.getCanHide())
					.map((column) => (
						<div
							key={column.id}
							className="flex items-center space-x-2 px-1 py-1"
						>
							<input
								type="checkbox"
								checked={column.getIsVisible()}
								onChange={column.getToggleVisibilityHandler()}
								className="h-4 w-4 rounded border-primary/70 text-primary focus:ring-primary dark:bg-black dark:text-black"
								id={`visibility-${column.id}`}
							/>
							<label
								htmlFor={`visibility-${column.id}`}
								className="text-sm font-medium leading-none"
							>
								{column.id}
							</label>
						</div>
					))}
			</PopoverContent>
		</Popover>
	);
}
