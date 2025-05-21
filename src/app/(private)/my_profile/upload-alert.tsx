'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface UploadAlertProps {
	message: string | null;
	variant: 'error' | 'success';
}

export const UploadAlert = ({ message, variant }: UploadAlertProps) => {
	if (!message) return null;

	return (
		<Alert
			variant={variant === 'error' ? 'destructive' : 'default'}
			className="mb-6"
		>
			{variant === 'error' ? (
				<FiAlertCircle className="h-4 w-4 mr-2" />
			) : (
				<FiCheckCircle className="h-4 w-4 mr-2" />
			)}
			<AlertDescription>{message}</AlertDescription>
		</Alert>
	);
};
