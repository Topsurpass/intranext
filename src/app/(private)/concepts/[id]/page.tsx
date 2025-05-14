'use client';

import { use } from 'react';
import { useGetConcepts } from '@/api/concept/use-get-concepts';
import ReactMarkdown from 'react-markdown';
import ProjectSkeleton from '@/components/skeletons/project-skeleton';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	const { data: concept, isLoading, isError, error } = useGetConcepts(id);

	if (isLoading) return <ProjectSkeleton />;
	if (isError)
		return (
			<p className="text-red-500">Error: {(error as Error).message}</p>
		);

	if (!concept) return <p>Concept not found</p>;
	return (
		<section className="space-y-4">
			<div className="prose max-w-none dark:prose-invert ">
				<ReactMarkdown>{concept.content}</ReactMarkdown>
			</div>
		</section>
	);
}
