'use client';

import QuizInstructions from './quiz-instructions';
import { use } from 'react';
import RouteGuard from '@/routes/route-guard';

export default function QuizInstruction({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);

	return (
		<RouteGuard>
			<div className="min-h-screen  px-4">
				<QuizInstructions id={id} />
			</div>
		</RouteGuard>
	);
}
