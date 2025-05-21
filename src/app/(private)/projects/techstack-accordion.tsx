import Link from 'next/link';
import { FiFolder, FiFileText, FiCalendar } from 'react-icons/fi';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Empty from '@/components/empty';

interface Lesson {
	id: string;
	title: string;
	code: string;
	hex: string;
	deadline_start: string;
	deadline_end: string;
	score: string;
}

interface Course {
	id: string;
	title: string;
	description: string;
	lesson: Lesson[];
}

interface Techstack {
	id: string;
	title: string;
	course: Course[];
}

interface Props {
	data: Techstack[];
	className?: string;
}

export default function TechstackAccordion({ data, className }: Props) {
	const isEmpty = !data || data.length === 0;
	return (
		<div className={className}>
			<Accordion type="single" className="space-y-4">
				{isEmpty ? (
					<Empty
						title="No Projects"
						description="You are yet to take on any projects."
						Icon={LiaProjectDiagramSolid}
					/>
				) : (
					data?.map((stack, stackIdx) => (
						<AccordionItem
							key={`techstack-${stackIdx}`}
							value={`techstack-${stackIdx}`}
							className="rounded-lg border"
						>
							<AccordionTrigger className="hover:no-underline px-2 bg-muted/50 hover:bg-muted/70">
								<div className="flex items-center gap-2">
									<FiFolder className="h-5 w-5 text-primary" />
									<span className="text-lg font-semibold text-left">
										{stack.title}
										<span className="text-sm text-muted-foreground ml-2">
											(
											{stack?.course?.reduce(
												(acc, c) =>
													acc + c.lesson.length,
												0
											)}{' '}
											lessons)
										</span>
									</span>
								</div>
							</AccordionTrigger>

							<AccordionContent className="px-0 pt-4 pb-2">
								<div className="space-y-3">
									{stack?.course?.map((course, courseIdx) => (
										<div
											key={`course-${courseIdx}`}
											className="px-2"
										>
											<div className="flex items-center gap-3 mb-4 border-b pb-2">
												<FiFileText className="h-4 w-4 text-muted-foreground" />
												<h4 className="font-medium text-muted-foreground">
													{course.title}
												</h4>
											</div>

											<div className="space-y-2">
												{course?.lesson?.map(
													(lesson, lessonIdx) => (
														<div
															key={`lesson-${lessonIdx}`}
															className="group flex items-center rounded-lg p-1 transition-colors hover:bg-muted/30 border"
														>
															<div className="flex justify-between w-full p-2">
																<div>
																	<Link
																		href={`/projects/${lesson.id}`}
																		className="font-medium hover:underline"
																	>
																		{
																			lesson.title
																		}
																	</Link>
																	<div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mt-1">
																		<FiCalendar className="h-4 w-4" />
																		<span>
																			{`Deadline: ${
																				lesson.deadline_start
																			} - ${lesson.deadline_end}`}
																		</span>
																	</div>
																</div>
															</div>
														</div>
													)
												)}
											</div>
										</div>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					))
				)}
			</Accordion>
		</div>
	);
}
