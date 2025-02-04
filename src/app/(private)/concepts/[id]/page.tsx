export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div className="">
			This is the concept page for concept with id {id}
		</div>
	);
}
