import { SideNavItem } from '../types/sidenav-item';
import { PiGitBranchBold } from 'react-icons/pi';
// import { GrCheckmark } from 'react-icons/gr';
import { IoHome } from 'react-icons/io5';
import { BsQuestionLg, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

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
				path: '/projects',
				icon: <PiGitBranchBold />,
			},
			// {
			// 	title: 'QA Reviews I can make',
			// 	path: '/corrections/to_review',
			// 	icon: <GrCheckmark />,
			// },
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
		],
	},
];

export default SIDENAV_ITEMS;
