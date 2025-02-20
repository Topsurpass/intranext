'use client';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';
import Image from 'next/image';

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
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden ">
			{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

			<form
				className="m-auto w-full p-4 sm:max-w-lg"
				onSubmit={handleSubmit(processForm)}
			>
				<Card>
					<CardHeader className="">
						{' '}
						<Image src={logo} alt="ALX" className=" " />
						<CardTitle className="text-center text-lg md:text-2xl font-medium">
							Login to your account
						</CardTitle>
						<CardDescription className="text-center text-md md:text-lg">
							Provide your credentials to access your portal
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4 py-5">
						<div>
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
						<div className="flex w-full items-center justify-between">
							<Checkbox
								label="Remember me"
								control={control}
								name="persistUser"
								className="text-blue-500"
							/>
							<Button
								type="button"
								onClick={() => router.push('/forgot-password')}
								variant="link"
								// className="text-gray-700"
							>
								Forget Password?
							</Button>
						</div>
						<Button
							className="w-full"
							type="submit"
							label="Sign In"
							isLoading={isPending}
						/>
						<div className="mt-6 text-center text-sm text-gray-600">
							Don&apos;t have an account?{' '}
							<Link
								href="/signup"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Signup
							</Link>
						</div>
					</CardFooter>
				</Card>
				{isError && (
					<div className="mt-2 flex items-center justify-center gap-2">
						<IoAlertCircleOutline size={20} color="red" />
						<span className="text-red-500">
							{error?.response?.data?.detail as string}
						</span>
					</div>
				)}
			</form>
		</div>
	);
}
