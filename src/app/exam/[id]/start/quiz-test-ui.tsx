import { Button } from '@/components/ui/button';
import { Clock, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type ExamType = {
	id: string;
	title?: string;
	questions: {
		id: string;
		text: string;
		options: {
			id: string;
			text: string;
		}[];
	}[];
};

type Props = {
	exam: ExamType;
	currentQuestion: number;
	setCurrentQuestion: (index: number) => void;
	timeLeft: number;
	isTimeUp: boolean;
	handleSubmit: (
		callback: (data: Record<string, string>) => void
	) => (e?: React.BaseSyntheticEvent) => Promise<void>;
	processForm: (data: Record<string, string>) => void;
	setValue: (name: string, value: string) => void;
	watchedAnswers: Record<string, string>;
	isSubmitting: boolean;
	isPending: boolean;
};

type OptionProp = {
	id: string;
	text: string;
};

const formatTime = (seconds: number) => {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function QuizTestUI({
	exam,
	currentQuestion,
	setCurrentQuestion,
	timeLeft,
	isTimeUp,
	handleSubmit,
	processForm,
	setValue,
	watchedAnswers,
	isSubmitting,
	isPending,
}: Props) {
	const current = exam.questions[currentQuestion];
	const selected = watchedAnswers[current.id];
	const progress = ((currentQuestion + 1) / exam.questions.length) * 100;

	return (
		<form onSubmit={handleSubmit(processForm)}>
			<div className="flex items-center justify-center min-h-screen w-full px-4 py-6">
				<div className="w-full md:w-[800px] border rounded-2xl shadow-lg flex flex-col">
					<div className="p-6 border-b border-gray-200">
						<div className="flex justify-between items-center mb-2">
							<div className="flex items-center gap-2 text-sm font-medium">
								<Clock className="w-5 h-5" />
								<span>{formatTime(timeLeft)}</span>
							</div>
						</div>
						<Progress value={progress} className="h-2" />
					</div>

					<div className="p-6">
						<div className="flex items-center gap-2 mb-4 text-sm font-medium">
							<span>Question {currentQuestion + 1}</span>
							<span className="text-gray-400">
								/ {exam.questions.length}
							</span>
						</div>

						<h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
							{current.text}
						</h2>

						<RadioGroup
							className="space-y-3"
							value={selected || ''}
							onValueChange={(val) => setValue(current.id, val)}
						>
							{current.options.map(
								(option: OptionProp, index: number) => (
									<div
										key={option.id}
										className={`flex items-center space-x-4 p-4 rounded-xl border transition-all ${
											selected === option.id
												? 'border-blue-500 bg-blue-100 dark:bg-blue-500'
												: 'border-gray-200 hover:border-blue-500 dark:hover:bg-white dark:hover:text-black'
										}`}
									>
										<RadioGroupItem
											value={option.id}
											id={`option-${index}`}
										/>
										<Label
											htmlFor={`option-${index}`}
											className="flex-1 text-base font-medium cursor-pointer"
										>
											{option.text}
										</Label>
										{selected === option.id && (
											<CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-white" />
										)}
									</div>
								)
							)}
						</RadioGroup>
					</div>

					<div className="p-6 border-t border-gray-200">
						<div className="flex justify-between items-center flex-wrap gap-4">
							<Button
								variant="outline"
								type="button"
								onClick={() =>
									setCurrentQuestion(
										Math.max(0, currentQuestion - 1)
									)
								}
								disabled={currentQuestion === 0}
								className="gap-2"
							>
								<ChevronLeft className="w-4 h-4" />
								Previous
							</Button>

							<div className="flex items-center gap-2 text-sm text-gray-500">
								{selected ? 'Answered' : 'Unanswered'}
							</div>
							{currentQuestion < exam.questions.length - 1 && (
								<Button
									type="button"
									onClick={() =>
										setCurrentQuestion(currentQuestion + 1)
									}
									disabled={isTimeUp}
									className="gap-2"
								>
									Next <ChevronRight className="w-4 h-4" />
								</Button>
							)}
							{currentQuestion + 1 === exam.questions.length && (
								<Button
									type="submit"
									disabled={isSubmitting || isTimeUp}
									className="gap-2"
									isLoading={isPending}
									loadingText="Sumitting..."
								>
									Submit Exam
									<ChevronRight className="w-4 h-4" />
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
