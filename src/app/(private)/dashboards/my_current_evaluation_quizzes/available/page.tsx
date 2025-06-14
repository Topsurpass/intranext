'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FiClock, FiArrowUpRight } from 'react-icons/fi';
import { useGetAvailableExams } from '@/api/exam/use-get-available-exams';
import Empty from '@/components/empty';
import { EvaluationSkeleton } from '@/components/skeletons/evaluation-skeleton';
import { PiExam } from 'react-icons/pi';

type ExamProp = {
	exam_id: string;
	exam_title: string;
	description: string;
	duration: number;
	course_id: string;
	course_title: string;
	course_description: string;
};

export default function Page() {
	const { data: AvailableExamsData, isLoading } = useGetAvailableExams();

	const isEmpty = !AvailableExamsData || AvailableExamsData.length === 0;

	return (
		<Card className="rounded-none border-none p-0 shadow-sm">
			<CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-0">
				{isLoading ? (
					<EvaluationSkeleton length={3} />
				) : isEmpty ? (
					<Empty
						title="No Available Exams"
						description="You currently have no exams assigned or available to take. Please check back later."
						Icon={PiExam}
					/>
				) : (
					AvailableExamsData?.map((data: ExamProp) => (
						<div
							key={data?.course_id}
							className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:bg-gradient-to-br hover:from-card/50 hover:to-[rgba(255,255,255,0.15)] hover:shadow-md dark:hover:to-[rgba(0,0,0,0.2)]"
						>
							<div className="flex flex-col justify-between space-y-4">
								<div className="space-y-2">
									<div className="flex flex-col md:flex-row md:items-center justify-between">
										<span className="rounded-full  py-1 text-lg font-medium text-primary">
											{data?.course_title}
										</span>
									</div>
									<h3 className="font-semibold">
										{data?.exam_title}
									</h3>
								</div>

								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<FiClock className="h-4 w-4 text-muted-foreground" />
											<span className="text-sm">
												{`${data?.duration / 60} minutes`}
											</span>
										</div>
									</div>

									<div className="relative h-2 rounded-full bg-muted">
										<div
											className="absolute left-0 h-full rounded-full bg-primary transition-all duration-500"
											style={{
												width: `${(0 / 100) * 100}`,
											}}
										/>
									</div>
								</div>

								<Link
									href={`/exam/${data?.exam_id}/instructions`}
									className="flex items-center justify-between rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
								>
									<span className="text-sm font-medium">
										Start Exam
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
