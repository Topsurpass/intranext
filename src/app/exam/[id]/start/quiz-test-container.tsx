/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetExamById } from '@/api/exam/use-get-exam';
import useSubmitExam from '@/api/exam/use-submit-exam';
import QuizTestUI from '@/app/exam/[id]/start/quiz-test-ui';

export default function QuizTestContainer({ id }: { id: string }) {
	const { data: exam, isLoading } = useGetExamById(id);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [timeLeft, setTimeLeft] = useState(0);
	const [isTimeUp, setIsTimeUp] = useState(false);

	const { mutate: submitExam, isPending } = useSubmitExam();

	const {
		handleSubmit,
		setValue,
		watch,
		formState: { isSubmitting },
	} = useForm<Record<string, string>>();

	const watchedAnswers = watch();

	function parseDurationToSeconds(duration: string): number {
		const [hours, minutes, seconds] = duration.split(':').map(Number);
		return hours * 3600 + minutes * 60 + seconds;
	}

	useEffect(() => {
		if (exam?.duration) {
			const seconds = parseDurationToSeconds(exam.duration);
			setTimeLeft(seconds);
		}
	}, [exam?.duration]);

	useEffect(() => {
		if (timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					setIsTimeUp(true);
					handleSubmit(processForm)();
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, handleSubmit]);

	const processForm = async (data: Record<string, string>) => {
		if (!exam) return;

		const formattedAnswers = Object.entries(data).map(
			([question, selected_option]) => ({
				question,
				selected_option,
			})
		);

		submitExam({
			exam_id: exam.id,
			answers: formattedAnswers,
		});
	};

	if (isLoading || !exam) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p>Loading exam...</p>
			</div>
		);
	}

	return (
		<QuizTestUI
			exam={exam}
			currentQuestion={currentQuestion}
			setCurrentQuestion={setCurrentQuestion}
			timeLeft={timeLeft}
			isTimeUp={isTimeUp}
			handleSubmit={handleSubmit}
			processForm={processForm}
			setValue={setValue}
			watchedAnswers={watchedAnswers}
			isSubmitting={isSubmitting}
			isPending={isPending}
		/>
	);
}
