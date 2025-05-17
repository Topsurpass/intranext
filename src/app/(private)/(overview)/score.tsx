/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useGetCoursesScores } from '@/api/exam/use-get-all-course-scores';
import { cn } from '@/lib/utils';

export default function Scores() {
	const { data: CoursesScoreData } = useGetCoursesScores();

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
						<Badge
							variant="outline"
							className={cn('gap-1 text-white  text-sm', {
								'bg-green-900':
									CoursesScoreData?.overall_average_score >=
									50,
								'bg-red-900':
									CoursesScoreData?.overall_average_score <
									50 || 0,
							})}
						>
							{`Average: ${CoursesScoreData?.overall_average_score || 0}%`}
						</Badge>
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex w-full flex-grow flex-col justify-center items-center min-h-24 gap-2">
				<div className="flex justify-between w-full text-sm">
					<p className="font-bold">Courses</p>
					<p className="font-bold">Scores</p>
				</div>
				<div className="w-full flex flex-col gap-5">
					{CoursesScoreData?.completed_courses?.map(
						(data: any, idx: number) => (
							<div
								className="object-entry flex  items-center justify-between border-t w-full"
								key={idx}
							>
								<div className="key">{data?.course_title}</div>
								<div className="value">
									{data?.exams?.[0]?.score}%
								</div>
							</div>
						)
					)}
				</div>
			</CardContent>
		</Card>
	);
}
