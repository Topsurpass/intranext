export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <div>This is the quizzes section for quiz number {id}</div>;
}
