'use client';

import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type CardProp = {
	title: string;
	description: string;
	classNameHeader?: string;
	classNameTitle?: string;
	classNameDescription?: string;
};

export default function CardTopHeader({
	title,
	description,
	classNameHeader,
	classNameTitle,
	classNameDescription,
}: CardProp) {
	return (
		<CardHeader
			className={cn('border-none border-0 px-0', classNameHeader)}
		>
			<CardTitle
				className={cn(
					'text-2xl font-semibold tracking-tight',
					classNameTitle
				)}
			>
				{title}
			</CardTitle>
			<CardDescription className={cn('', classNameDescription)}>
				{description}
			</CardDescription>
		</CardHeader>
	);
}
