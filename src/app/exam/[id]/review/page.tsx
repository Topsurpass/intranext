'use client';

import { use } from 'react';
import ExamReviewQuestions from './exams-questions';
import RouteGuard from '@/routes/route-guard';

export function ExamReview({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	return (
		<div className="min-h-screen  px-4">
			<ExamReviewQuestions id={id} />
		</div>
	);
}

export default RouteGuard(ExamReview);
