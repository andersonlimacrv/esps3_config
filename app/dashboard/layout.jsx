import Sidebar from '@/components/layout/Sidebar';
import MainRight from '@/components/layout/Main';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }) {
	const session = await getServerSession();
	if (!session) {
		redirect('/');
		return null;
	}
	return (
		<>
			{!!session && (
				<div className="flex min-h-screen w-full">
					<div className="hidden border-r bg-muted/40 md:block">
						<div className="flex h-full max-h-screen flex-col gap-2">
							<Sidebar />
						</div>
					</div>
					<div className="flex flex-col w-full">
						<MainRight>{children}</MainRight>
					</div>
				</div>
			)}
		</>
	);
}
