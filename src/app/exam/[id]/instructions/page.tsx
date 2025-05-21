import QuizInstructions from "./quiz-instructions";
import { use } from 'react';

export default function QuizInstruction({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	return (
		<div className="min-h-screen  px-4">
			<QuizInstructions id={id}/>
		</div>
	);
}
