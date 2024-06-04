import Sidebar from '@/components/layout/Sidebar';
import MainRight from '@/components/layout/Main';
export default function DashboardLayout({ children }) {
	return (
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
	);
}
