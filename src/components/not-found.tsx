import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

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
			<div className="text-center max-w-md">
				<div className="flex justify-center">
					<FaSearch className="h-12 w-12 text-gray-400 mb-6" />
				</div>
				<h1 className="text-3xl font-bold  mb-4">
					404 Not Found
				</h1>
				<p className="text-gray-600 text-lg mb-8">{message}</p>
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
