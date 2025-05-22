'use client';

import QuizCompletion from './quiz-completion';
import RouteGuard from '@/routes/route-guard';

export default function QuizCompletionPage() {
	return (
		<RouteGuard>
			<div className="min-h-screen px-4">
				<QuizCompletion />
			</div>
		</RouteGuard>
	);
}
