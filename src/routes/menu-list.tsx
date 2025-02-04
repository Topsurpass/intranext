import { SideNavItem } from '../types/sidenav-item';
import { PiGitBranchBold } from 'react-icons/pi';
import { GrCheckmark } from 'react-icons/gr';
import { IoHome } from 'react-icons/io5';
import {
	BsQuestionLg,
	BsFilm,
	BsFillFileEarmarkTextFill,
} from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import { BiSolidServer, BiSolidBook } from 'react-icons/bi';
import { LiaGreaterThanEqualSolid } from 'react-icons/lia';
import { GiSpanner } from 'react-icons/gi';
import { MdGroups } from 'react-icons/md';

const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: '',
		menuList: [
			{
				title: 'Home',
				path: '/',
				icon: <IoHome size={20} />,
			},
			{
				title: 'Projects',
				path: '/projects/current',
				icon: <PiGitBranchBold />,
			},
			{
				title: 'QA Reviews I can make',
				path: '/corrections/to_review',
				icon: <GrCheckmark />,
			},
			{
				title: 'Evaluation Quizzes',
				path: '/dashboards/my_current_evaluation_quizzes',
				icon: <BsQuestionLg />,
			},
			{
				title: 'Curriculums',
				path: '/dashboards/my_curriculums',
				icon: <FaGraduationCap />,
			},
			{
				title: 'Concepts',
				path: '/concepts',
				icon: <BsFillFileEarmarkTextFill />,
			},
			{
				title: 'Conference rooms',
				path: '/dashboards/video_rooms',
				icon: <SiWechat />,
			},
			{
				title: 'Servers',
				path: '/servers',
				icon: <BiSolidServer />,
			},
			{
				title: 'Sandboxes',
				path: '/user_containers/current',
				icon: <LiaGreaterThanEqualSolid />,
			},
			{
				title: 'Tools',
				path: '/my_tools',
				icon: <GiSpanner />,
			},
			{
				title: 'Video on Demands',
				path: '/dashboards/videos',
				icon: <BsFilm />,
			},
			{
				title: 'Peers',
				path: '/peers',
				icon: <MdGroups />,
			},
			{
				title: 'Captains log',
				path: '/my_captain_log',
				icon: <BiSolidBook />,
			},
		],
	},
];

export default SIDENAV_ITEMS;
