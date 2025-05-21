/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGetCoursesScores } from '@/api/exam/use-get-all-course-scores';
import { cn } from '@/lib/utils';
import Empty from '@/components/empty';
import CardTopHeader from '@/components/card-top-header';
import { MdCreditScore } from 'react-icons/md';

export default function Scores() {
	const { data: CoursesScoreData } = useGetCoursesScores();
	const isEmpty =
		!CoursesScoreData || CoursesScoreData?.completed_courses?.length === 0;
	console.log(CoursesScoreData);

	return (
		<Card className="bg-gradient-to-br from-primary/5 to-background space-y-5">
			<div className="flex justify-between items-center flex-wrap border-b border-black dark:border-white">
				<CardTopHeader
					title="Course Scores"
					description="See all your exam scores categorized by course"
					classNameHeader="border-none border-0 px-5"
					classNameTitle="text-lg flex items-center"
					classNameDescription=""
				/>
				<div className="px-5 pb-5">
					<Badge
						variant="outline"
						className={cn('mt-1 w-fit text-xs text-white', {
							'bg-green-900':
								CoursesScoreData?.overall_average_score >= 50,
							'bg-red-900':
								CoursesScoreData?.overall_average_score < 50 ||
								0,
						})}
					>
						{`Overall Avg: ${CoursesScoreData?.overall_average_score || 0}%`}
					</Badge>
				</div>
			</div>

			<CardContent className="flex flex-col gap-4 ">
				{isEmpty ? (
					<Empty
						title="No score recorded"
						description="Your scores will appear once you start taking course examinations."
						Icon={MdCreditScore}
					/>
				) : (
					CoursesScoreData?.completed_courses?.map(
						(course: any, idx: number) => (
							<div key={idx} className="">
								<div className="mb-2 flex justify-between gap-1">
									<p className="font-semibold text-foreground">
										{course.course_title}
									</p>
									<Badge
										variant="outline"
										className={cn('mt-1 w-fit text-xs', {
											'bg-green-900 text-white':
												course.average_score >= 50,
											'bg-red-900 text-white':
												course.average_score < 50,
										})}
									>
										Avg Score: {course.average_score}%
									</Badge>
								</div>

								<div className="mt-3 flex flex-col gap-2">
									{course.exams?.length > 0 ? (
										course.exams.map(
											(exam: any, i: number) => (
												<div
													key={i}
													className="flex items-center justify-between "
												>
													<div className="text-sm text-foreground">
														{exam.exam_title}
													</div>
													<div
														className={cn(
															'text-sm font-medium',
															{
																'text-emerald-600 dark:text-emerald-400':
																	exam.score >=
																	50,
																'text-red-600 dark:text-red-600':
																	exam.score <
																	50,
															}
														)}
													>
														{exam.score}%
													</div>
												</div>
											)
										)
									) : (
										<p className="text-sm italic text-muted-foreground">
											No exams recorded for this course.
										</p>
									)}
								</div>
							</div>
						)
					)
				)}
			</CardContent>
		</Card>
	);
}
