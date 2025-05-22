import { use } from 'react';
import ExamReviewQuestions from './exams-questions';

export default function ExamReview({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);

	return (
		<div className="min-h-screen  px-4">

			<ExamReviewQuestions id={id}/>
		</div>
	);
}
