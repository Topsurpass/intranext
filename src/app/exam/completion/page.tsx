'use client';

import QuizCompletion from './quiz-completion';
import RouteGuard from '@/routes/route-guard';

export function QuizCompletionPage() {
	return (
		<div className="min-h-screen px-4">
			<QuizCompletion />
		</div>
	);
}

export default RouteGuard(QuizCompletionPage);
