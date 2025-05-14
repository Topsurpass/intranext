// components/ui/toast.tsx
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const toastVariants = cva(
	'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:transition-none data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
	{
		variants: {
			variant: {
				default: 'border bg-background text-foreground',
				destructive:
					'destructive group border-destructive bg-destructive text-destructive-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

type ToastProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof toastVariants> & {
		title?: string;
		description?: string;
		action?: React.ReactNode;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	};

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
	(
		{
			className,
			variant,
			title,
			description,
			action,
			onOpenChange,
			...props
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={cn(toastVariants({ variant }), className)}
				{...props}
			>
				<div className="flex-1">
					{title && (
						<div className="font-medium [&+div]:mt-1">{title}</div>
					)}
					{description && (
						<div className="text-sm opacity-90">{description}</div>
					)}
				</div>

				{action && (
					<button
						onClick={() => onOpenChange?.(false)}
						className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
					>
						<X className="h-4 w-4" />
					</button>
				)}
				{action}
			</div>
		);
	}
);
Toast.displayName = 'Toast';

type ToastActionElement = React.ReactElement<typeof ToastAction>;

const ToastAction = ({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		className={cn(
			'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
			className
		)}
		{...props}
	/>
);

export type { ToastProps, ToastActionElement };
export { Toast, ToastAction };
