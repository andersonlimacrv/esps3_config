'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarData } from '@/constants';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import LogoArea from '@/components/layout/LogoArea';

function Sidebar() {
	const pathname = usePathname();
	const isActive = (href) => {
		return pathname === href;
	};
	const [isOpen, setOpen] = useState(true);
	return (
		<>
			<LogoArea isOpen={isOpen} />
			<div
				className={`flex-1 relative w-[220px] 2xl:[240px] transition-translate duration-300 ${
					isOpen ? 'w-[220px] 2xl:[240px]' : 'w-[82px]'
				}`}
			>
				<div className="absolute -right-[18px]">
					<Button
						variant="default"
						className="ml-auto rounded-full h-10 w-10 p-2"
						onClick={() => setOpen(!isOpen)}
					>
						<FaAngleDoubleLeft
							className={`h-6 w-6 transition-transform duration-300 ${
								isOpen
									? 'rotate-0'
									: 'rotate-180'
							}`}
						/>
					</Button>
				</div>

				<nav
					className={`grid items-start p-2 text-sm font-medium ${
						isOpen ? 'lg:px-4' : 'px-1'
					}`}
				>
					<ul className="text-lg">
						{sidebarData.map((category) => (
							<div
								key={category._categoryId}
								className={`border-b border-b-border ${
									isOpen ? 'my-1' : 'mt-8'
								}`}
							>
								<li
									className={`py-1 dark:text-[#243949] text-[#24394955] text-center font-semibold uppercase tracking-widest ${
										isOpen
											? ''
											: 'hidden'
									}`}
								>
									{category.category}
								</li>

								{category.items.map(
									(item, index) => (
										<li
											key={index}
											className="py-1 font-normal text-[16px] w-full flex items-center gap-x-1.5 group select-none "
										>
											<div
												className={`px-1 rounded-xl h-10 bg-transparent relative overflow-hidden ${
													isOpen
														? ''
														: 'px-[4px]'
												}`}
											>
												<div
													className={`absolute top-0 left-0 w-full h-[110%] translate-y-0 group-hover:translate-y-0 bg-accent transition-all duration-300 ${
														isActive(
															item.href
														)
															? 'translate-y-0'
															: 'translate-y-full'
													}`}
												/>
											</div>
											<Link
												href={
													item.href
												}
												className={`flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-primary-foreground ${
													isOpen
														? 'w-[11rem]'
														: 'w-full'
												}`}
											>
												<div>
													{
														item.icon
													}
												</div>
												<span
													className={`capitalize pl-0 sm:pl-2 text-sm lg:text-[16px] font-medium transition-all duration-200 ${
														isOpen
															? 'inline-block translate-x-0 group-hover:translate-x-1'
															: 'hidden'
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
							</div>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Sidebar;
