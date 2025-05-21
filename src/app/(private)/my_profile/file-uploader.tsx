'use client';

import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';
import { useFormContext } from 'react-hook-form';

interface ProfileImageUploadProps {
	previewUrl: string | null;
	disabled?: boolean;
}

export const ProfileImageUpload = ({
	previewUrl,
	disabled = false,
}: ProfileImageUploadProps) => {
	const { setValue } = useFormContext();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue('profile_picture', file, {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	};

	return (
		<div className="relative group">
			<div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-gray-200">
				{previewUrl ? (
					<Image
						src={previewUrl}
						alt="Profile preview"
						width={128}
						height={128}
						className="object-cover w-full h-full"
					/>
				) : (
					<FiCamera className="h-8 w-8 text-gray-400" />
				)}
			</div>

			<label
				htmlFor="file-upload"
				className={`absolute inset-0 rounded-full flex items-center justify-center ${
					disabled
						? 'cursor-not-allowed opacity-50'
						: 'cursor-pointer group-hover:bg-black/10'
				}`}
			>
				<span
					className={`${
						disabled
							? 'opacity-0'
							: 'opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium'
					}`}
				>
					Change Photo
				</span>
				<input
					id="file-upload"
					type="file"
					accept="image/png, image/jpeg"
					name="profile_picture"
					onChange={handleFileChange}
					className="sr-only"
					disabled={disabled}
				/>
			</label>
		</div>
	);
};
