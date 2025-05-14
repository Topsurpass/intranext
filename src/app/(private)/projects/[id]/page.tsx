'use client';

import { useGetLessonById } from '@/api/lesson/use-get-lesson-by-id';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { FaLevelUpAlt } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { GiTimeBomb } from 'react-icons/gi';
import ProjectSkeleton from '@/components/skeletons/project-skeleton';
import NotFound from '@/components/not-found';

export default function Page() {
	const params = useParams<{ id: string }>();
	const id = params.id;

	const { data: lessonData, isLoading, isError } = useGetLessonById(id);

	if (isLoading) return <ProjectSkeleton />;

	if (isError) return <NotFound />;

	if (!lessonData) return <p>Lesson not found</p>;

	return (
		<section className="space-y-4">
			<h1 className="text-2xl font-semibold">{lessonData.title}</h1>

			<div className="border text-sm rounded">
				<div className="p-2 border-b flex items-center gap-2">
					<FaLevelUpAlt />
					{lessonData.level}
				</div>
				<div className="p-2 flex items-center gap-2 border-b">
					<IoSettings />
					Weight: {lessonData.weight}
				</div>
				<div className="p-2 flex items-center gap-2">
					<GiTimeBomb />
					{`From ${lessonData.deadline_start} to ${lessonData.deadline_end}`}
				</div>
			</div>

			<div className="prose max-w-none dark:prose-invert border p-2 rounded">
				<ReactMarkdown>{lessonData.description}</ReactMarkdown>
			</div>

			<div className="space-y-4">
				<h1 className="text-2xl font-semibold">Tasks</h1>
				{lessonData.tasks?.length > 0 ? (
					lessonData.tasks.map(
						(
							val: { title: string; instructions: string },
							idx: number
						) => (
							<div className="border rounded" key={idx}>
								<div className="border-b p-2 bg-slate-50  text-black">
									<p>{`${idx}. ${val.title}`}</p>
								</div>
								<div className="min-h-44 p-2">
									<ReactMarkdown>
										{val.instructions}
									</ReactMarkdown>
								</div>
							</div>
						)
					)
				) : (
					<div className="border rounded min-h-44 p-2 flex justify-center items-center">
						<p>No tasks available</p>
					</div>
				)}
			</div>
		</section>
	);
}
