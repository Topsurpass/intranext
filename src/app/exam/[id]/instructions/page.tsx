'use client';

import QuizInstructions from './quiz-instructions';
import { use } from 'react';
import RouteGuard from '@/routes/route-guard';

export function QuizInstruction({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);

	return (
		<div className="min-h-screen  px-4">
			<QuizInstructions id={id} />
		</div>
	);
}

export default RouteGuard(QuizInstruction);
