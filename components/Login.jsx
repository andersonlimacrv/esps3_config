import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginPage() {
	return (
		<div className="flex item-center gap-x-12 2xl:gap-x-36 h-full w-full justify-center">
			<div className="flex w-full h-full items-center justify-center my-auto">
				<div className="mx-auto grid w-full max-w-md gap-6 lg:text-lg">
					<div className="grid gap-2 text-center drop-shadow-lg">
						<h1 className="py-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-700/90 via-[#F7F9FB] to-black drop-shadow-1xl">
							Login
						</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below to login to
							your account
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">
									Password
								</Label>
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
								required
							/>
						</div>
						<Button
							variant="default"
							className="w-full"
						>
							<Link
								href="/dashboard"
								className="w-full"
							>
								Login
							</Link>
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{' '}
						<Link
							href="#"
							className="underline lg:text-lg"
						>
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden bg-transparent lg:flex w-full h-full">
				<Image
					src="/hardware.jpg"
					alt="Image"
					width={768}
					height={1378}
					className="h-full w-full max-h-[1378px] max-w-[768px] object-cover dark:brightness-[0.5] dark:grayscale rounded-lg"
				/>
			</div>
		</div>
	);
}
