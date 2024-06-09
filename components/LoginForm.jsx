'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SmallLoader from '@/components/svgs/SmallLoader';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const res = await signIn('credentials', {
				redirect: false,
				username,
				password,
			});
			if (!res?.error) {
				toast.success('User logged in successfully');
				router.push('/dashboard');
			} else {
				toast.error(res.error);
			}
		} catch (error) {
			console.error('Error:', error);
			toast.error(
				'Oops! 👀 Something went wrong. Please try again later.'
			);
		}
		setIsLoading(false);
	};
	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="username">Username</Label>
				<Input
					id="username"
					type="text"
					placeholder="Enter your username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div className="grid gap-2">
				<div className="flex items-center">
					<Label htmlFor="password">Password</Label>
					<Link
						href="/forgot-password"
						className="ml-auto inline-block text-sm underline"
					>
						Forgot your password?
					</Link>
				</div>
				<Input
					id="password"
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<Button
				type="submit"
				variant="default"
				className="w-full mt-8"
				disabled={isLoading}
			>
				{isLoading ? (
					<div className="flex items-center justify-center">
						<SmallLoader />
					</div>
				) : (
					<span>Login</span>
				)}
			</Button>
		</form>
	);
}
