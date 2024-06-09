import LogoArea from '@/components/layout/LogoArea';
import RegisterForm from './form';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function SignUp() {
	return (
		<>
			<section className="bg-background">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<LogoArea isOpen={true} />
					<Card className="py-8 px-16 2xl:py-16 2xl:px-32 text-lg 2xl:text-[20px]">
						<CardHeader className="py-4 2xl:py-8">
							<CardTitle className="text-xl 2xl:text-2xl">
								Sign up
							</CardTitle>
							<CardDescription className="text-[15px] 2xl:text-[18px] flex flex-col">
								<span>
									Enter your email to create
									your account.
								</span>
								<span>
									Remember to keep track of
									your username and
									password.
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RegisterForm />
						</CardContent>
					</Card>
				</div>
			</section>
		</>
	);
}
