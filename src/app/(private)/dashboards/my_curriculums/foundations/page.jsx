import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FiCalendar, FiInfo, FiBookOpen, FiClock } from 'react-icons/fi';

export default function Page() {
	return (
		<section className="space-y-8">
			<div className="space-y-4">
				<h3 className="text-xl font-semibold tracking-tight text-foreground">
					Software Engineering Foundations
				</h3>
				<div className="space-y-4 text-muted-foreground">
					<p className="leading-relaxed">
						The Foundations program focuses on mastering core
						engineering principles and coding proficiency,
						complemented by essential professional development
						training. This intensive curriculum prepares students
						for either specialization tracks or direct career
						preparation through Holberton's Career Sprint program.
					</p>
				</div>
			</div>

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="course-overview">
					<AccordionTrigger className="py-3 hover:no-underline rounded-lg hover:bg-muted/50 transition-colors">
						<div className="flex items-center gap-3">
							<FiInfo className="h-5 w-5 text-primary" />
							<span className="text-lg font-medium">
								Program Overview
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent className="pt-2 pb-4">
						<div className="space-y-3 pl-9">
							<div className="flex items-center gap-3">
								<FiBookOpen className="h-4 w-4 text-muted-foreground" />
								<span>
									ALX Software Engineering Introduction
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FiClock className="h-4 w-4 text-muted-foreground" />
								<span>Professional Skills Development</span>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<div className=" bg-card shadow-none">
				<div className="flex items-center gap-3 mb-4">
					<FiCalendar className="h-6 w-6 text-primary" />
					<h4 className="text-lg font-semibold">Program Timeline</h4>
				</div>

				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-sm text-muted-foreground">
								Start Date
							</p>
							<p className="font-medium">November 15, 2022</p>
						</div>
						<div>
							<p className="text-sm text-muted-foreground">
								Completion Date
							</p>
							<p className="font-medium">September 25, 2023</p>
						</div>
					</div>

					<div className="pt-4">
						<h5 className="text-sm font-medium mb-3">
							Scheduled Breaks
						</h5>
						<div className="space-y-2">
							<div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
								<span className="text-sm font-mono">
									Break #0
								</span>
								<span className="text-muted-foreground">
									February 25 - March 5, 2023
								</span>
							</div>
							<div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
								<span className="text-sm font-mono">
									Break #1
								</span>
								<span className="text-muted-foreground">
									June 3 - June 12, 2023
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
