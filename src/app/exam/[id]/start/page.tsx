'use client';

import QuizTestContainer from './quiz-test-container';
import { use } from 'react';
import RouteGuard from '@/routes/route-guard';

export function QuizTestPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	return (
		<div className="min-h-screen flex justify-center items-center bg-background">
			<QuizTestContainer id={id} />
		</div>
	);
}

export default RouteGuard(QuizTestPage);
