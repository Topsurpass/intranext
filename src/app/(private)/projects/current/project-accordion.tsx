import Link from 'next/link';
import {
	FiFolder,
	FiFileText,
	FiCalendar,
} from 'react-icons/fi';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ProjectCategory } from '@/data/projects_data';

interface ProjectAccordionProps {
	data: ProjectCategory[];
	className?: string;
}

function formatDeadline(deadline: string) {
	const [start, end] = deadline.split('...');
	const formatDate = (dateStr: string) => {
		const [month, day, year] = dateStr.split(' ');
		return `${month.slice(0, 3)} ${day}, '${year}`;
	};
	return `${formatDate(start)} – ${formatDate(end)}`;
}

function getScoreColor(score: string) {
	const numericScore = parseFloat(score);
	if (numericScore >= 200) return 'bg-emerald-100 text-emerald-800';
	if (numericScore >= 150) return 'bg-amber-100 text-amber-800';
	if (numericScore >= 100) return 'bg-blue-100 text-blue-800';
	return 'bg-red-100 text-red-800';
}

export default function ProjectAccordion({
	data,
	className,
}: ProjectAccordionProps) {
	return (
		<div className={className}>
			<Accordion type="multiple" className="space-y-4">
				{data.map((category, categoryIdx) => (
					<AccordionItem
						key={`category-${categoryIdx}`}
						value={category.projectHeading}
						className="rounded-lg border"
					>
						<AccordionTrigger className="hover:no-underline px-2 bg-muted/50 hover:bg-muted/70">
							<div className="flex items-center gap-2">
								<FiFolder className="h-5 w-5 text-primary" />
								<span className="text-lg font-semibold text-left">
									{category.projectHeading}
									<span className="text-sm text-muted-foreground ml-2">
										(
										{category.projects.reduce(
											(acc, project) =>
												acc + project.topics.length,
											0
										)}{' '}
										tasks)
									</span>
								</span>
							</div>
						</AccordionTrigger>

						<AccordionContent className="px-0 pt-4 pb-2">
							<div className="space-y-3">
								{category.projects.map(
									(project, projectIdx) => (
										<div
											key={`project-${projectIdx}`}
											className="px-2"
										>
											<div className="flex items-center gap-3 mb-4 border-b pb-2">
												<FiFileText className="h-4 w-4 text-muted-foreground" />
												<h4 className="font-medium text-muted-foreground">
													{project.title}
												</h4>
											</div>

											<div className="space-y-2">
												{project.topics.map(
													(topic, topicIdx) => (
														<div
															key={`topic-${topicIdx}`}
															className="group flex items-center  rounded-lg p-1 transition-colors hover:bg-muted/30 border"
														>
															<div className="flex items-center gap-4 w-full">
																<span className="font-mono text-sm p-1 rounded bg-muted">
																	{
																		topic.topicHex
																	}
																</span>
																<div>
																	<Link
																		href={`/projects/${topic.topicCode}`}
																		className="font-medium hover:underline"
																	>
																		{
																			topic.topicName
																		}
																	</Link>
																	<div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mt-1">
																		<FiCalendar className="h-4 w-4" />
																		<span>
																			{formatDeadline(
																				topic.deadline
																			)}
																		</span>
																	</div>
																</div>
															</div>

															<div className="flex items-center gap-4 justify-end">
																<span
																	className={cn(
																		'px-2 py-1 rounded-full text-xs md:text-sm font-medium',
																		getScoreColor(
																			topic.score
																		)
																	)}
																>
																	{
																		topic.score
																	}
																</span>
															</div>
														</div>
													)
												)}
											</div>
										</div>
									)
								)}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
