import { ListFilter } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface IProps {
	status: string | undefined;
	setStatus?: React.Dispatch<React.SetStateAction<string | undefined>>;
	filterStatusData?: { value: string; label: string }[];
}

export default function DatatableStatusFilterSsr({
	status,
	setStatus,
	filterStatusData = [],
}: IProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<ListFilter className="mr-2 h-4 w-4" />
					<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
						Filter
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w" align="end">
				<DropdownMenuLabel className="text-sm">
					Filter by
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={status}
					onValueChange={setStatus}
				>
					{filterStatusData?.map((item) => {
						return (
							<DropdownMenuRadioItem
								key={item.value}
								value={item.value}
							>
								{item.label}
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
