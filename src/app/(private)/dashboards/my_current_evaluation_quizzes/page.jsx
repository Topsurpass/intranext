'use client';

import Link from 'next/link';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { FiClock, FiBarChart2, FiArrowUpRight } from 'react-icons/fi';
import { useGetCoursesScores } from '@/api/exam/use-get-all-course-scores';
import { cn } from '@/lib/utils';

export default function Page() {
	const { data: CoursesScoreData } = useGetCoursesScores();

	return (
		<Card className="rounded-none border-none p-0 shadow-sm">
			<CardHeader className="border-none border-0 px-0">
				<CardTitle className="text-2xl font-semibold tracking-tight">
					Evaluation Quizzes
				</CardTitle>
				<CardDescription className="">
					Comprehensive performance tracking through monthly
					assessments
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-0">
				{CoursesScoreData?.completed_courses?.map((data, idx) => (
					<div
						key={data?.course_id}
						className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:bg-gradient-to-br hover:from-card/50 hover:to-[rgba(255,255,255,0.15)] hover:shadow-md dark:hover:to-[rgba(0,0,0,0.2)]"
					>
						<div className="flex flex-col justify-between space-y-4">
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
										Course title: {data?.course_title}
									</span>
									<span className="text-sm text-muted-foreground">
										{data?.exams?.[0]?.submitted_at}
									</span>
								</div>
								<h3 className="text-xl font-semibold">
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
				))}
			</CardContent>
		</Card>
	);
}
