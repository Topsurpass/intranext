'use client';

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div className="">
			This is the concept page for concept with id {id}
		</div>
	);
}
