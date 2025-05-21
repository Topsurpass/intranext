export const uploadProfileImage = async (
	file: File,
	cloudinaryName: string
) => {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', 'profile_pic_preset');

	const cloudinaryResponse = await fetch(
		`https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`,
		{ method: 'POST', body: formData }
	);

	if (!cloudinaryResponse.ok) throw new Error('Failed to upload image');

	const cloudinaryData = await cloudinaryResponse.json();

	const apiResponse = await fetch('/api/profile', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ image: cloudinaryData.secure_url }),
	});

	if (!apiResponse.ok) {
		const errorData = await apiResponse.json();
		throw new Error(errorData.message);
	}

	return cloudinaryData.secure_url;
};
