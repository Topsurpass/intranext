'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useGetExamById } from '@/api/exam/use-get-exam';

export default function QuizInstructions({ id }: { id: string }) {
	const { data: exam } = useGetExamById(id);

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center p-0">
			<div>
				<div className="mb-10 text-center">
					<h1 className="text-4xl font-bold  mb-4">{exam?.title}</h1>
					<p className="text-lg">
						Please review the following guidelines carefully before
						starting your assessment
					</p>
				</div>
				<div className="space-y-8 mb-12">
					<div>
						<p>{exam?.description}</p>
					</div>

					<div className=" p-6 rounded-lg border">
						<h3 className="text-lg font-semibold  mb-3">
							Key Details
						</h3>
						<ul className="space-y-2">
							<li className="flex items-center gap-3">
								<CheckCircle2 className="w-4 h-4 flex-shrink-0" />
								<span>{`${exam?.duration} minutes`}</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle2 className="w-4 h-4 flex-shrink-0" />
								<span>
									{`${exam?.questions?.length} Questions`}
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-center border-t pt-8">
					<Link
						href={`${`/exam/${id}/start`}`}
						className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-100"
					>
						Start Exam
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
