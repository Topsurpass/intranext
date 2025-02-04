import Welcome from '@/app/(private)/(overview)/welcome';
import CurrentProjects from '@/app/(private)/(overview)/current_project';
import UpcomingEvent from './upcoming-events';
import Report from './reports';
import Scores from './score';

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-5 w-full  md:flex-row">
			<div className="w-full space-y-5">
				<Welcome />
				<UpcomingEvent />
				<CurrentProjects />
			</div>
			<div className="w-full space-y-5">
				<Report />
				<Scores />
			</div>
		</div>
	);
}
