export interface Concept {
	id: number;
	topic: string;
	category:
		| 'Foundation'
		| 'Advanced'
		| 'Tooling'
		| 'Best Practices'
		| 'Special Topics';
	difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
	status?: 'Completed' | 'In Progress' | 'Not Started';
	resources?: string;
}

export interface ApiResponse {
	data: Concept[];
	totalRecords: number;
	pageCount: number;
}

export const conceptData: ApiResponse = {
	data: [
		{
			id: 1,
			topic: 'HTML/CSS',
			category: 'Foundation',
			difficulty: 'Beginner',
		},
		{
			id: 2,
			topic: 'JavaScript in the Browser',
			category: 'Foundation',
			difficulty: 'Intermediate',
		},
		{
			id: 3,
			topic: 'The Trinity of Front-End Quality',
			category: 'Best Practices',
			difficulty: 'Advanced',
		},
		{
			id: 4,
			topic: 'Right-Engineering, Right-Documenting',
			category: 'Best Practices',
			difficulty: 'Advanced',
		},
		{
			id: 5,
			topic: 'Shell Scripting',
			category: 'Tooling',
			difficulty: 'Intermediate',
		},
		{
			id: 6,
			topic: 'DNS Fundamentals',
			category: 'Advanced',
			difficulty: 'Intermediate',
		},
		{
			id: 7,
			topic: 'Monitoring & Observability',
			category: 'Advanced',
			difficulty: 'Advanced',
		},
	],
	totalRecords: 7,
	pageCount: 5,
};
