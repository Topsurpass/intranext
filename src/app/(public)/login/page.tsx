'use client';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
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

import Link from 'next/link';
import { TextField, PasswordField, Checkbox } from '@/components/ui/form';
import { LoginInputs, LoginSchema } from '@/validations/login-schema';
import useLoginUser from '@/api/authentication/use-login-user';

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const { control, handleSubmit } = useForm<LoginInputs>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
			persistUser: false,
		},
	});

	const { mutate: loginUser, isPending, isError, error } = useLoginUser();

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const processForm: SubmitHandler<LoginInputs> = async (data) => {
		loginUser(data);
		// JSON.stringify(data);
	};

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center p-2 md:p-0">
			<form
				className="w-full sm:max-w-sm"
				onSubmit={handleSubmit(processForm)}
			>
				<Card className="shadow-xl rounded-2xl border">
					<CardHeader className="flex flex-col space-y-2 items-center px-8 pt-5 pb-6">
						<div className="mb-6"></div>
						<CardTitle className="text-xl  font-bold text-gray-900 dark:text-white">
							Welcome Back
						</CardTitle>
						<CardDescription className="text-sm text-gray-600 dark:text-white">
							Continue your learning journey
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6 px-8 py-4">
						<div className="space-y-4">
							<TextField
								label="Email"
								name="email"
								control={control}
								icon={
									<Mail size={18} className="text-gray-500" />
								}
								iconPosition="left"
								placeholder="name@example.com"
								className="rounded-lg focus:ring-2 focus:ring-blue-500"
							/>

							<PasswordField
								label="Password"
								name="password"
								control={control}
								showPassword={showPassword}
								placeholder="••••••••"
								onIconClick={() => handleShowPassword()}
								type={showPassword ? 'text' : 'password'}
								showLeftIcon={false}
							/>
						</div>

						<div className="flex items-center justify-between">
							<Checkbox
								label="Remember me"
								control={control}
								name="persistUser"
								className="text-blue-600 focus:ring-blue-500"
							/>
							<Button
								type="button"
								onClick={() => router.push('/forgot-password')}
								variant="link"
								className="text-gray-600 hover:text-blue-600 text-sm font-medium dark:text-white"
							>
								Forgot Password?
							</Button>
						</div>
					</CardContent>

					<CardFooter className="px-8 pb-10 pt-6">
						<div className="w-full space-y-4">
							<Button
								className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.01]"
								type="submit"
								label="Sign In"
								isLoading={isPending}
							/>

							<div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
								New to our platform?{' '}
								<Link
									href="/signup"
									className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
								>
									Create account
								</Link>
							</div>
						</div>
					</CardFooter>
				</Card>

				{isError && (
					<div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center gap-2 animate-fade-in">
						<IoAlertCircleOutline
							size={20}
							className="text-red-600"
						/>
						<span className="text-red-600 text-sm">
							{error?.response?.data?.detail as string}
						</span>
					</div>
				)}
			</form>
		</div>
	);
}
