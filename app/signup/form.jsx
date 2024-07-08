'use client';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SmallLoader from '@/components/svgs/SmallLoader';

export default function RegisterForm() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const userData = {
			username,
			email,
			password,
		};

		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/users`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				}
			);

			const json = await res.json();

			if (res.ok) {
				toast.success('User created successfully');
				router.push('/');
			} else {
				toast.error(`${json.detail}`);
			}
		} catch (error) {
			toast.error(
				'Oops! 👀 Something went wrong. Please try again later.'
			);
			console.error('Error:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="user@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
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
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className="flex flex-col w-full pt-8">
				<div className="w-full">
					<Button
						type="submit"
						variant="default"
						className="w-full flex flex-1"
					>
						{isLoading ? (
							<div className="flex items-center justify-center">
								<SmallLoader />
							</div>
						) : (
							<span>Sign Up!</span>
						)}
					</Button>
				</div>
				<div className="flex flex-col gap-2">
					<p className="mt-4 text-center text-sm lg:text-lg text-muted-foreground font-semibold">
						Already have an account?{' '}
						<Link
							href="/"
							passHref
							className="hover:underline text-accent"
						>
							<span className="flex w-full items-center justify-center">
								Go to Login
							</span>
						</Link>
					</p>
				</div>
			</div>
		</form>
	);
}
