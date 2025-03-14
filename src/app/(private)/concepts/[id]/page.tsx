'use client';

import { use } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);

	return <div>This is the concept page for concept with id {id}</div>;
}
