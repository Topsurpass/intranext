import { ComponentType } from 'react';

type Props = {
	title: string;
	description: string;
	Icon: ComponentType<{ className?: string }>;
};

export default function Empty({ title, description, Icon }: Props) {
	return (
		<div className="col-span-full flex w-full flex-col items-center justify-center p-8 text-center">
			<Icon className="mb-4 h-10 w-10 text-muted-foreground" />
			<h2 className="text-xl font-semibold text-muted-foreground">
				{title}
			</h2>
			<p className="mt-2 text-sm text-muted-foreground max-w-md">
				{description}
			</p>
		</div>
	);
}
