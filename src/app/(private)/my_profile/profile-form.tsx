'use client';

import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TextField, TextArea } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';


export default function ProfileForm({disabled = false}: {disabled?: boolean}) {
	const { control } = useFormContext();

	return (
		<Card className="border-0 p-0 m-0 gap-5 space-y-5 w-full shadow-none">
			<CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2 p-0 shadow-none border-0">
				<div>
					<TextField
						label="Firstname"
						name="first_name"
						control={control}
						placeholder="Enter your first name"
						disabled={disabled}
					/>
				</div>
				<div>
					<TextField
						label="Lastname"
						name="last_name"
						control={control}
						placeholder="Enter your last name"
						disabled={disabled}
					/>
				</div>
				<div>
					<TextField
						label="Email"
						name="email"
						control={control}
						icon={<Mail size={18} />}
						iconPosition="left"
						disabled={disabled}
					/>
				</div>
				<div>
					<TextField
						label="Phone Number"
						name="profile.phone"
						control={control}
						icon={<Phone size={18} />}
						iconPosition="left"
						disabled={disabled}
					/>
				</div>
				<div>
					<TextArea
						label="Address"
						name="profile.address"
						control={control}
						rows={3}
						disabled={disabled}
					/>
				</div>
			</CardContent>
		</Card>
	);
}
