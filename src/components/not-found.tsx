import Link from 'next/link';
import { FiAlertTriangle } from 'react-icons/fi';

interface NotFoundProps {
	message?: string;
	children?: React.ReactNode;
}

export default function NotFound({
	message = "The resource you're looking for doesn't exist.",
	children,
}: NotFoundProps) {
	return (
		<div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="text-center max-w-md space-y-5">
				<div className="relative inline-block">
					<div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-20 dark:opacity-30 animate-pulse"></div>
					<div className="relative inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg">
						<FiAlertTriangle className="w-12 h-12 text-purple-600 dark:text-purple-400" />
					</div>
				</div>
				<p className="text-3xl font-bold text-red-500">{message}</p>
				<div className="flex flex-col space-y-3">
					{children || (
						<Link
							href="/projects"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black dark:bg-red-700 transition-colors"
						>
							Back to Projects
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
