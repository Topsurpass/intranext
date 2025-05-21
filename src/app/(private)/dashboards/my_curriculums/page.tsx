import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FiInfo, FiCalendar, FiCode, FiBookmark } from 'react-icons/fi';

export default function Page() {
	return (
		<section className="space-y-6">
			<div className="space-y-2">
				<h3 className="text-xl font-semibold tracking-tight">
					Specialization Tracks
				</h3>
				<p className="text-muted-foreground text-sm">
					Focused learning paths for backend development expertise
				</p>
			</div>

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="specialization-overview">
					<AccordionTrigger className="py-3 hover:no-underline hover:bg-muted/50 transition-colors">
						<div className="flex items-center gap-3">
							<FiInfo className="h-5 w-5 text-primary" />
							<span className="text-lg font-medium">
								Program Details
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent className="pt-2 pb-4">
						<div className="space-y-3 pl-9">
							<div className="flex items-center gap-3">
								<FiCode className="h-4 w-4 text-muted-foreground" />
								<span>Backend JavaScript Specialization</span>
							</div>
							<div className="flex items-center gap-3">
								<FiCode className="h-4 w-4 text-muted-foreground" />
								<span>Backend Python Specialization</span>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<div className="rounded-xl bg-card ">
				<div className="flex items-center gap-3 mb-4">
					<FiCalendar className="h-6 w-6 text-primary" />
					<h4 className="text-lg font-semibold">Program Timeline</h4>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-sm text-muted-foreground mb-1">
							Commencement Date
						</p>
						<p className="font-medium">September 25, 2023</p>
					</div>
					<div>
						<p className="text-sm text-muted-foreground mb-1">
							Completion Date
						</p>
						<p className="font-medium">January 29, 2024</p>
					</div>
				</div>

				<div className="mt-4 pt-4 border-t">
					<div className="flex items-center gap-3 text-muted-foreground">
						<FiBookmark className="h-4 w-4" />
						<span className="text-sm">
							Total Duration: 4 months
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
