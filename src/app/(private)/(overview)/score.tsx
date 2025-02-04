'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiCheckCircle } from 'react-icons/fi';

export default function Scores() {
	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background">
			<CardHeader className="">
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
					<div className="space-y-1">
						<CardTitle className="flex items-center gap-2">
							Specialization Scores
							<Badge
								variant="outline"
								className="gap-1 bg-green-900 text-white"
							>
								<FiCheckCircle className="h-3 w-3" /> Validated
							</Badge>
						</CardTitle>
						<CardDescription>
							Monthly performance metrics
						</CardDescription>
					</div>
					<div className="flex gap-3">
						<p>151.64%</p>
						<p className="text-red-500 font-normal">
							Score details
						</p>
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex w-full flex-grow flex-col justify-center items-center min-h-24 gap-2">
				<div className="flex justify-end w-full text-sm">
					<p>Average</p>
				</div>
				<div className="w-full flex flex-col gap-5">
					<div className="object-entry flex  items-center justify-between border-t w-full ">
						<div className="key">Month #0</div>
						<div className="value">{`150.09`}%</div>
					</div>
					<div className="object-entry flex  items-center justify-between border-t w-full ">
						<div className="key">Month #1</div>
						<div className="value">{`110.60`}%</div>
					</div>
					<div className="object-entry flex  items-center justify-between border-t w-full ">
						<div className="key">Month #2</div>
						<div className="value">{`150.09`}%</div>
					</div>
					<div className="object-entry flex  items-center justify-between border-t w-full ">
						<div className="key">Month #3</div>
						<div className="value">{`110.60`}%</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}