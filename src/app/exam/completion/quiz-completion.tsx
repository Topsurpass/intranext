'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function QuizCompletion() {
	return (
		<div className="flex items-center justify-center min-h-screen w-full px-4 py-8">
			<div className="w-full max-w-lg border shadow-xl rounded-3xl p-8 flex flex-col items-center text-center">
				<div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
					<CheckCircle2 className="w-12 h-12 text-green-600" />
				</div>

				<h1 className="text-2xl sm:text-3xl font-extrabold  mb-4">
					🎉 Quiz Completed!
				</h1>
				<p className="text-base sm:text-lg  mb-8">
					Thank you for completing the quiz. Your responses have been
					recorded, and your results will be available on your
					dashboard shortly.
				</p>

				<Link
					href="/dashboards/my_current_evaluation_quizzes"
					className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-200"
				>
					Return to Dashboard
				</Link>
			</div>
		</div>
	);
}
