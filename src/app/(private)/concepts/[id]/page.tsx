'use client';

import { use } from 'react';
import { useGetConcepts } from '@/api/concept/use-get-concepts';
import ReactMarkdown from 'react-markdown';
import ProjectSkeleton from '@/components/skeletons/project-skeleton';
import NotFound from '@/components/not-found';
import Link from 'next/link';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	const { data: concept, isLoading, isError, error } = useGetConcepts(id);

	if (isLoading) return <ProjectSkeleton />;
	if (isError)
		return (
			<NotFound message={error ? (error as Error).message : 'Error loading concept'}>
				<Link
					href="/concepts"
					className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black dark:bg-red-700 transition-colors"
				>
					Back to Concepts
				</Link>
			</NotFound>
		);

	return (
		<section className="space-y-4">
			<div className="prose max-w-none dark:prose-invert ">
				<ReactMarkdown>{concept.content}</ReactMarkdown>
			</div>
		</section>
	);
}
