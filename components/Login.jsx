import Link from 'next/link';
import Image from 'next/image';
import LoginForm from './LoginForm';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function LoginPage() {
	const sesion = await getServerSession();
	if (sesion) {
		redirect('/dashboard');
	}
	return (
		<section className="flex items-center h-full w-full justify-center max-h-screen">
			<div className="flex w-full h-full items-center justify-center my-auto">
				<div className="mx-auto grid w-full max-w-md gap-6 lg:text-lg">
					<div className="grid gap-2 text-center drop-shadow-lg">
						<h1 className="py-4 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-700/90 via-[#F7F9FB] to-black drop-shadow-1xl">
							Login
						</h1>
						<p className="text-balance text-muted-foreground">
							Enter your username and password below
							to login to your account
						</p>
					</div>
					<LoginForm />
					<div className="mt-4 text-center px-6">
						Don&apos;t have an account?
						<Link
							href="/signup"
							className="hover:underline lg:text-lg text-accent"
						>
							<p>Sign up</p>
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden bg-transparent lg:flex max-h-[900px] 2xl:max-h-[1378px] 2xl:mr-32">
				<Image
					src="/hardware.jpg"
					alt="Image"
					width={768}
					height={1378}
					priority
					className="h-full w-full max-h-[1378px] max-w-[768px] object-cover dark:brightness-[0.5] dark:grayscale rounded-lg"
				/>
			</div>
		</section>
	);
}
