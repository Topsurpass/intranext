import { use } from 'react';
import ExamReviewQuestions from './exams-questions';
import RouteGuard from '@/routes/route-guard';


export default  function ExamReview({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);

	return (
		<RouteGuard>
<div className="min-h-screen  px-4">

			<ExamReviewQuestions id={id}/>
		</div>

		</RouteGuard>
		
	);
}

