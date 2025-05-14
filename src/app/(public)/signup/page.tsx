'use client';

import { Mail, User } from 'lucide-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { TextField, PasswordField } from '@/components/ui/form';
import { SignupInputs, SignupSchema } from '@/validations/signup-schema';
import useSignupUser from '@/api/authentication/use-signup-user';

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const { control, handleSubmit } = useForm<SignupInputs>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			email: '',
			password: '',
			first_name: '',
			last_name: '',
			username: '',
		},
	});

	const { mutate: signupUser, isPending, isError, error } = useSignupUser();

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const processForm: SubmitHandler<SignupInputs> = async (data) => {
		signupUser(data);
	};

	return (
		<div className="relative flex md:min-h-screen flex-col items-center justify-center overflow-hidden ">
			{/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}

			<form
				className="m-auto w-full p-4 sm:max-w-lg "
				onSubmit={handleSubmit(processForm)}
			>
				<Card className="">
					<CardHeader className="text-center">
						{' '}
						<CardTitle className="text-2xl md:text-3xl font-bold ">
							Create Learner Account
						</CardTitle>
						<CardDescription className="">
							Create your account in just 2 minutes
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="space-y-2">
							<TextField
								label="Firstname"
								name="first_name"
								control={control}
								placeholder="Enter your first name"
							/>
							<TextField
								label="Lastname"
								name="last_name"
								control={control}
								placeholder="Enter your last name"
							/>
							<TextField
								label="Username"
								name="username"
								control={control}
								icon={<User size={18} />}
								iconPosition="left"
								placeholder="Enter your username"
							/>
							<TextField
								label="Email"
								name="email"
								control={control}
								icon={<Mail size={18} />}
								iconPosition="left"
								placeholder="Enter your email address"
							/>
						</div>
						<div>
							<PasswordField
								label="Password"
								name="password"
								control={control}
								showPassword={showPassword}
								placeholder="Enter your password"
								onIconClick={() => handleShowPassword()}
								type={showPassword ? 'text' : 'password'}
								showLeftIcon={false}
							/>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-4">
						<Button
							className="w-full"
							type="submit"
							label="Create account"
							isLoading={isPending}
						/>
						<div className="mt-6 text-center text-sm">
							Already have an account?{' '}
							<Link
								href="/login"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Login
							</Link>
						</div>
					</CardFooter>
				</Card>
				{isError && (
					<div className="mt-2 flex items-center justify-center gap-2">
						<IoAlertCircleOutline size={20} color="red" />
						<span className="text-red-500">
							{error?.response?.data?.email?.[0] as string}
						</span>
					</div>
				)}
			</form>
		</div>
	);
}
