import { SideNavItem } from '../types/sidenav-item';
import { PiGitBranchBold } from 'react-icons/pi';
import { IoHome } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
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
				title: 'Profile',
				path: '/my_profile',
				icon: <CgProfile />,
			},
		],
	},
];

export default SIDENAV_ITEMS;
