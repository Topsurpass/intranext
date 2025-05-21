'use client';

import { useEffect, useState } from 'react';
import { ProfileImageUpload } from './file-uploader';
import { useGetUserProfile } from '@/api/user/use-get-user-details';
import ProfileForm from './profile-form';
import { useForm, FormProvider } from 'react-hook-form';
import {
	UserProfileSchema,
	UserProfileInputs,
} from '@/validations/user-profile-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadAlert } from './upload-alert';
import { useMutateUserProfile } from '@/api/user/use-get-user-details';
import { Button } from '@/components/ui/button';
import ProfileSkeleton from '@/components/skeletons/profile-skeleton';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegSave } from 'react-icons/fa';
import { toast } from 'sonner';
import CardTopHeader from '@/components/card-top-header';

export default function Page() {
	const { data: userProfile, isLoading } = useGetUserProfile();
	const [isProfileDisabled, setIsProfileDisabled] = useState(true);
	const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

	const methods = useForm<
		UserProfileInputs & { profile_picture: File | null | string }
	>({
		resolver: zodResolver(UserProfileSchema),
		defaultValues: {
			email: '',
			first_name: '',
			last_name: '',
			profile_picture: null,
			profile: {
				phone: '',
				address: '',
			},
		},
	});
	const { handleSubmit, watch } = methods;

	const {
		mutate: updateUserProfile,
		isPending,
		error,
	} = useMutateUserProfile();

	useEffect(() => {
		if (userProfile) {
			methods.reset({
				email: userProfile.email || '',
				first_name: userProfile.first_name || '',
				last_name: userProfile.last_name || '',
				profile: {
					phone: userProfile.profile?.phone || '',
					address: userProfile.profile?.address || '',
				},
				profile_picture: userProfile.profile_picture || null,
			});
		}
	}, [userProfile, methods]);

	const profileImage = watch('profile_picture') as File | null;
	const previewImage =
		profileImage instanceof File
			? URL.createObjectURL(profileImage)
			: typeof profileImage === 'string' && profileImage !== ''
				? `https://res.cloudinary.com/${cloudinaryName}/${profileImage}`
				: null;

	useEffect(() => {
		let objectUrl: string | null = null;

		if (profileImage instanceof File) {
			objectUrl = URL.createObjectURL(profileImage);
		}

		return () => {
			if (objectUrl) {
				URL.revokeObjectURL(objectUrl);
			}
		};
	}, [profileImage]);

	async function onSubmit(
		data: UserProfileInputs & { profile_picture: File | string | null }
	) {
		const formData = new FormData();
		formData.append('email', data.email);
		formData.append('first_name', data.first_name);
		formData.append('last_name', data.last_name);
		formData.append('profile.phone', data.profile?.phone ?? '');
		formData.append('profile.address', data.profile?.address ?? '');

		if (data.profile_picture instanceof File) {
			formData.append('profile_picture', data.profile_picture);
		} else if (typeof data.profile_picture === 'string') {
			formData.append('profile_picture', data.profile_picture);
		}

		updateUserProfile(
			{ requestPayload: formData, requestMethod: 'PATCH' },
			{
				onSuccess: () => {
					toast.success('Successfull!', {
						description:
							'Your profile has been updated successfully.',
					});

					setIsProfileDisabled(true);
				},
				onError: (error: unknown) => {
					const err = error as {
						response?: { data?: { detail?: string } };
						message?: string;
					};
					toast.error(
						err?.response?.data?.detail ||
							err?.message ||
							'An error occurred while updating your profile.'
					);
				},
			}
		);
	}

	return (
		<section className="mx-auto">
			{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
			{/* <pre>{JSON.stringify(formState.errors, null, 2)}</pre> */}
			<CardTopHeader
				title="Profile Settings"
				description="Manage your profile information"
			/>
			<UploadAlert message={error?.message ?? null} variant="error" />

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
					{isLoading ? (
						<ProfileSkeleton />
					) : (
						<>
							<div className="flex items-center justify-between gap-2">
								<div className="flex items-center gap-5  flex-wrap">
									<ProfileImageUpload
										previewUrl={previewImage}
										disabled={isProfileDisabled}
									/>
									<div>
										<h2 className="text-lg font-semibold">
											Profile Picture
										</h2>
										<p className="text-xs text-gray-500">
											Supported formats: JPEG, PNG <br />{' '}
											Maximum file size: 2MB
										</p>
									</div>
								</div>
								<Button
									type="button"
									label={
										isProfileDisabled ? 'Edit' : 'Cancel'
									}
									variant={
										isProfileDisabled
											? 'primary'
											: 'destructive'
									}
									size="sm"
									onClick={() =>
										setIsProfileDisabled((prev) => !prev)
									}
									icon={
										isProfileDisabled
											? FiEdit
											: MdOutlineCancel
									}
								/>
							</div>
							<ProfileForm
								disabled={isProfileDisabled || isPending}
							/>
							<div className="flex justify-end">
								<Button
									type="submit"
									size="sm"
									variant={'primary'}
									isLoading={isPending}
									label="Update"
									disabled={isProfileDisabled}
									icon={FaRegSave}
								/>
							</div>
						</>
					)}
				</form>
			</FormProvider>
		</section>
	);
}
