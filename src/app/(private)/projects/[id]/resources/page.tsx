'use client';

import { use } from 'react';
import { useState } from 'react';
import { useGetConcepts } from '@/api/concept/use-get-concepts';
import ReactMarkdown from 'react-markdown';
import { ProjectResourceSkeleton } from '@/components/skeletons/project-skeleton';

type ConceptProps = {
	id: string;
	title: string;
	content: string;
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const { data: concepts, isLoading } = useGetConcepts(undefined, id);

	if (isLoading) return <ProjectResourceSkeleton />;
	if (!concepts || concepts.length === 0)
		return <p className="text-gray-500 p-4">No concepts found.</p>;

	const selectedConcept = concepts[selectedIndex];

	return (
		<div className="flex flex-col md:flex-row h-screen">
			<div className="w-full md:w-80 lg:w-96 border-r  shadow-sm md:shadow-none overflow-y-auto">
				<div className="sticky top-0 z-5 py-4 border-b">
					<h2 className="text-xl font-semibold ">Concepts</h2>
				</div>
				<nav className="p-2 space-y-1">
					{concepts.map((concept: ConceptProps, index: number) => (
						<button
							key={concept.id}
							onClick={() => setSelectedIndex(index)}
							className={`
                w-full text-left px-4 py-3 rounded-lg transition-all
                flex items-center
                ${
					index === selectedIndex
						? 'bg-red-50 text-red-500 font-semibold border-l-4 border-red-500'
						: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
				}
              `}
						>
							<span className="truncate">{concept.title}</span>
						</button>
					))}
				</nav>
			</div>

			<main className="flex-1 overflow-y-auto  md:rounded-l-lg shadow-sm">
				<div className="mx-auto p-4">
					<h1 className="text-2xl md:text-3xl font-bold mb-6 ">
						{selectedConcept.title}
					</h1>
					<article className="prose max-w-none dark:prose-invert prose-lg">
						<ReactMarkdown>{selectedConcept.content}</ReactMarkdown>
					</article>
				</div>
			</main>
		</div>
	);
}
