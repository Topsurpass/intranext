'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FiClock, FiBarChart2, FiArrowUpRight, FiInbox } from 'react-icons/fi';
import { useGetCoursesScores } from '@/api/exam/use-get-all-course-scores';
import { cn } from '@/lib/utils';
import Empty from '@/components/empty';

export default function Page() {
	const { data: CoursesScoreData } = useGetCoursesScores();

	const isEmpty =
		!CoursesScoreData?.completed_courses ||
		CoursesScoreData?.completed_courses.length === 0;

	return (
		<Card className="rounded-none border-none p-0 shadow-sm">
			<CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-0">
				{isEmpty ? (
					<Empty
						title="No Completed Exams"
						description="You currently have no completed exams."
						Icon={FiInbox}
					/>
				) : (
					CoursesScoreData?.completed_courses?.map((data, idx) => (
						<div
							key={data?.course_id}
							className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:bg-gradient-to-br hover:from-card/50 hover:to-[rgba(255,255,255,0.15)] hover:shadow-md dark:hover:to-[rgba(0,0,0,0.2)]"
						>
							<div className="flex flex-col justify-between space-y-4">
								<div className="space-y-2">
									<div className="flex flex-col md:flex-row md:items-center justify-between">
										<span className="rounded-full py-1 text-lg font-medium text-primary">
											{data?.course_title}
										</span>
										<span className='text-xs'>
											{new Date(
												data?.exams?.[0]?.submitted_at
											).toLocaleString(undefined, {
												dateStyle: 'medium',
												timeStyle: 'short',
											})}
										</span>
									</div>
									<h3 className="font-semibold">
										{data?.exams?.[0]?.exam_title}
									</h3>
								</div>

								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<FiClock className="h-4 w-4 text-muted-foreground" />
											<span className="text-sm">
												{`${data?.exams?.[0]?.duration / 60} minutes`}
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<FiBarChart2 className="h-4 w-4 text-muted-foreground" />
											<span
												className={cn(
													'text-sm font-medium',
													{
														'text-emerald-600 dark:text-emerald-400':
															data?.exams?.[0]
																?.score >= 50,
														'text-red-600 dark:text-red-600':
															data?.exams?.[0]
																?.score < 50,
													}
												)}
											>
												{data?.exams?.[0]?.score}%
											</span>
										</div>
									</div>

									<div className="relative h-2 rounded-full bg-muted">
										<div
											className="absolute left-0 h-full rounded-full bg-primary transition-all duration-500"
											style={{
												width: `${(data?.exams?.[0]?.score / 100) * 100}%`,
											}}
										/>
									</div>
								</div>

								<Link
									href={`/exam/${data?.exams?.[0]?.exam_id}/instructions`}
									className="flex items-center justify-between rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
								>
									<span className="text-sm font-medium">
										View Exam Questions
									</span>
									<FiArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
								</Link>
							</div>
						</div>
					))
				)}
			</CardContent>
		</Card>
	);
}
