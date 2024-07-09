import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import LogoArea from '@/components/layout/LogoArea';
import { sidebarData } from '@/constants';
import { usePathname } from 'next/navigation';

export default function SidebarMobile() {
	const pathname = usePathname();
	const isActive = (href) => {
		return pathname === href;
	};
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="shrink-0 md:hidden rounded-full"
					>
						<Menu className="h-6 w-6" />
						<span className="sr-only">
							Toggle navigation menu
						</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="flex flex-col">
					<nav className="grid gap-2 text-lg font-medium">
						<LogoArea isOpen={true} />
						{sidebarData.map((category) => (
							<div
								key={category._categoryId}
								className=""
							>
								<ul className="text-lg">
									<li className="py-1 dark:text-[#243949] text-[#24394955] text-center font-semibold uppercase tracking-widest">
										{category.category}
									</li>
									{category.items.map(
										(item, index) => (
											<li
												key={
													index
												}
												className="px-4 py-1  group select-none"
											>
												<Link
													href={
														item.href
													}
													className={`flex items-center gap-4 px-4 py-2 rounded-lg  ${
														isActive(
															item.href
														)
															? 'bg-accent'
															: 'hover:bg-primary-foreground'
													}`}
												>
													<div className="px-2">
														{
															item.icon
														}
													</div>
													<span
														className={`capitalize pl-0 sm:pl-2 text-lg font-medium transition-all duration-200 ${
															isActive(
																item.href
															)
																? 'text-muted'
																: 'group-hover:translate-x-2 group-hover:text-accent'
														}`}
													>
														{
															item.title
														}
													</span>
												</Link>
											</li>
										)
									)}
								</ul>
							</div>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</>
	);
}
