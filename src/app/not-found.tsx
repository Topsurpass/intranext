'use client';

import { useRouter } from 'next/navigation';
import { BiError, BiArrowBack } from 'react-icons/bi';

export default function NotFoundPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
			<div className="max-w-md w-full space-y-6 text-center">
				{/* Error Symbol Container */}
				<div className="animate-pulse">
					<div className="mx-auto h-24 w-24 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
						<BiError className="text-4xl text-rose-600 dark:text-rose-400" />
					</div>
				</div>

				{/* Error Content */}
				<div className="space-y-3">
					<h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
						404
					</h1>
					<p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
						Page Not Found
					</p>
					<p className="text-gray-500 dark:text-gray-400">
						The requested resource could not be located. Please
						verify the URL or navigate back to our platform.
					</p>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						onClick={() => router.back()}
						className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg
                     transition-all duration-200 ease-in-out transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
                     inline-flex items-center justify-center gap-2"
					>
						<BiArrowBack className="text-xl" />
						<span>Return Back</span>
					</button>

					<button
						onClick={() => router.push('/')}
						className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 
                     dark:text-gray-300 rounded-lg transition-all duration-200 ease-in-out 
                     transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800
                     focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
					>
						Go to Homepage
					</button>
				</div>

				{/* Additional Help */}
				<p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
					Need assistance? Contact our{' '}
					<a
						href="/support"
						className="text-rose-600 dark:text-rose-400 hover:underline"
					>
						support team
					</a>
				</p>
			</div>
		</div>
	);
}
