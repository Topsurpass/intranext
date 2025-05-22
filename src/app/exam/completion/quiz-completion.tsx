'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function QuizCompletion() {
	return (
		<div className="flex items-center min-h-screen justify-center w-full py-5">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="w-full max-w-md rounded-xl overflow-hidden border border-black dark:border-white"
			>
				<div className=" px-8 py-5 text-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: 'spring', stiffness: 150 }}
						className="inline-block mb-6"
					>
						<div className="w-20 h-20  bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
							<CheckCircle2 className=" w-10 h-10 md:w-16 md:h-16 animate-pulse" />
						</div>
					</motion.div>
					<h1 className="text-2xl  font-bold tracking-tight mb-4">
						Exam Successfully Submitted
					</h1>
					<p className="text-lg  font-medium">
						Your results are now being processed
					</p>
				</div>

				<div className="px-8 py-5 space-y-8">
					<div className="space-y-4 text-center">
						<h2 className="text-xl font-semibold ">Next Steps:</h2>
						<div className="grid gap-4  max-w-md mx-auto">
							<p className="flex items-center gap-2 justify-center">
								Detailed results available on your dashboard
							</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							variant="primary"
							className="px-8 py-4 "
						>
							<Link href="/dashboards/my_current_evaluation_quizzes">
								Check Result
							</Link>
						</Button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
