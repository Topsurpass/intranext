/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useGetExamReviewById } from '@/api/exam/use-get-exam-review';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ExamReviewSkeleton } from '@/components/skeletons/exam-review-skeleton';
import Empty from '@/components/empty';
import { TbInfoTriangle } from 'react-icons/tb';

export default function ExamReviewQuestions({ id }: { id: string }) {
	const { data, isLoading } = useGetExamReviewById(id);

	if (isLoading) {
		return <ExamReviewSkeleton />;
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center h-screen ">
				<Empty
					title="No exam to review"
					description="Only exams that are valid and taken are shown."
					Icon={TbInfoTriangle}
				/>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
			<div className="space-y-2">
				<div className="flex justify-between items-start flex-wrap gap-2">
					<h1 className="text-2xl md:text-3xl font-bold text-primary">
						{data.exam_title}
					</h1>
					<Badge
						variant="outline"
						className="p-2 border dark:border-white"
					>
						Score: {data.score}%
					</Badge>
				</div>
				<div className="flex items-center gap-2 text-muted-foreground text-sm">
					<span>Submitted at:</span>
					<time dateTime={data.submitted_at}>
						{new Date(data.submitted_at).toLocaleDateString(
							'en-US',
							{
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								hour: '2-digit',
								minute: '2-digit',
							}
						)}
					</time>
				</div>
				<Progress value={data.score} className="h-2" />
			</div>

			<div className="space-y-6">
				{data.questions.map((question: any, index: number) => {
					const selectedOption = question.options.find(
						(opt: any) => opt.id === question.selected_option_id
					);

					return (
						<Card key={question.id} className="shadow-sm">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center gap-2">
									<span className="">
										Question {index + 1}
									</span>
									{selectedOption?.is_correct ? (
										<CheckCircle2 className="h-5 w-5 text-green-600" />
									) : (
										<XCircle className="h-5 w-5 text-red-600" />
									)}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="font-medium ">{question.text}</p>
								<div className="grid gap-3">
									{question.options.map((option: any) => {
										const isSelected =
											option.id ===
											question.selected_option_id;
										const isCorrect = option.is_correct;

										return (
											<div
												key={option.id}
												className={cn(
													'flex items-center justify-between p-3 rounded-md border transition-colors',
													isSelected && 'border-2',
													isSelected &&
														isCorrect &&
														'border-green-500 bg-green-50',
													isSelected &&
														!isCorrect &&
														'border-red-500 bg-red-50',
													!isSelected &&
														isCorrect &&
														'border-green-300 bg-green-50',
													!isSelected &&
														!isCorrect &&
														'border-gray-200 bg-white'
												)}
											>
												<div className="flex items-center gap-3">
													<span className="text-sm font-medium text-gray-700">
														{option.text}
													</span>
													{!isSelected &&
														isCorrect && (
															<span className="text-xs text-white bg-emerald-600 px-2 py-1 rounded">
																Correct Answer
															</span>
														)}
												</div>
												<div className="flex items-center gap-2">
													{isSelected && (
														<span
															className={cn(
																'text-xs bg-red-700 text-white  px-2 py-1 rounded',
																{
																	' text-white bg-emerald-600':
																		isSelected &&
																		isCorrect,
																}
															)}
														>
															You chose
														</span>
													)}
													{isCorrect ? (
														<CheckCircle2 className="h-5 w-5 text-green-600" />
													) : isSelected ? (
														<XCircle className="h-5 w-5 text-red-600" />
													) : (
														<AlertCircle className="h-5 w-5 text-gray-400" />
													)}
												</div>
											</div>
										);
									})}
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
