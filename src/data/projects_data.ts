export interface ProjectTopic {
	topicCode: string;
	topicHex: string;
	topicName: string;
	deadline: string;
	score: string;
}

export interface Project {
	title: string;
	topics: ProjectTopic[];
}

export interface ProjectCategory {
	projectHeading: string;
	projects: Project[];
}

export type CurrentProjectData = ProjectCategory[];

export const currentProjectData: CurrentProjectData = [
	{
		projectHeading: 'Interview Preparation',
		projects: [
			{
				title: 'Interview Preparation - Interview Preparation',
				topics: [
					{
						topicCode: '1213',
						topicHex: '0x00',
						topicName: "Pascal's Triangle",
						deadline: 'Sept 25 23...Sep 29 23',
						score: '100.0%',
					},
					{
						topicCode: '1214',
						topicHex: '0x01',
						topicName: 'Lockboxes',
						deadline: 'Oct 2 23...Oct 6 23',
						score: '100.0%',
					},
					{
						topicCode: '1215',
						topicHex: '0x02',
						topicName: 'Minimum Operations',
						deadline: 'Oct 9 23...Oct 13 23',
						score: '100.0%',
					},
				],
			},
		],
	},
	{
		projectHeading: 'Back-end',
		projects: [
			{
				title: 'Back-end - Modern Javascript',
				topics: [
					{
						topicCode: '1224',
						topicHex: '0x00',
						topicName: ' ES6 Basics',
						deadline: 'Sep 25 23...Sep 26 23',
						score: '198.3%',
					},
					{
						topicCode: '1225',
						topicHex: '0x01',
						topicName: 'ES6 Promises',
						deadline: 'Sep 26 23...Sep 28 23',
						score: '200.0%',
					},
					{
						topicCode: '1226',
						topicHex: '0x02',
						topicName: 'ES6 classes',
						deadline: 'Sep 28 23...Sep 29 23',
						score: '197.88%',
					},
				],
			},
			{
				title: 'Back-end - Python',
				topics: [
					{
						topicCode: '1229',
						topicHex: '0x00',
						topicName: 'Python - Variable Annotations',
						deadline: 'Oct 5 23...Oct 6 23',
						score: '100.0%',
					},
					{
						topicCode: '1230',
						topicHex: '0x01',
						topicName: 'Python - Async',
						deadline: 'Oct 9 23...Oct 10 23',
						score: '200.0%',
					},
					{
						topicCode: '1231',
						topicHex: '0x02',
						topicName: 'Python - Async Comprehension',
						deadline: 'Oct 10 23...Oct 11 23',
						score: '100.0%',
					},
					{
						topicCode: '1237',
						topicHex: '0x03',
						topicName: 'Unittests and Integration Tests',
						deadline: 'Oct 26 23...Oct 31 23',
						score: '152.46%',
					},
				],
			},
		],
	},
];

export const currentProjects = [
	{
		topicCode: '1213',
		topicName: "Pascal's Triangle",
		startDate: 'Mar 4, 2024 12:00 AM',
		deadline: 'Mar 11, 2024 12:00 AM (in 7 days)',
		score: '0.0%',
	},
	{
		topicCode: '1214',
		topicName: 'Lockboxes',
		startDate: 'Mar 4, 2024 12:00 AM',
		deadline: 'Mar 11, 2024 12:00 AM (in 7 days)',
		score: '0.0%',
	},
	{
		topicCode: '1215',
		topicName: 'Minimum Operations',
		startDate: 'Mar 4, 2024 12:00 AM',
		deadline: 'Mar 11, 2024 12:00 AM (in 7 days)',
		score: '0.0%',
	},
];
