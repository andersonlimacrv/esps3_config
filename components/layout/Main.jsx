'use client';
import React from 'react';
import AvatarUser from '@/components/global/AvatarUser';
import { ModeToggle } from '@/components/ui/mode-toggle';
import SidebarMobile from '@/components/layout/SidebarMobile';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname, useRouter } from 'next/navigation';

export default function MainRight({ children }) {
	const pathname = usePathname();
	const router = useRouter();

	// Divide o caminho em partes e remove as partes vazias
	const pathParts = pathname.split('/').filter((part) => part);

	return (
		<>
			<header className="flex h-16 items-center gap-2 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
				<SidebarMobile />
				<div className="w-full flex-1">links...</div>
				<ModeToggle />
				<AvatarUser />
			</header>
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div className="flex items-center px-4">
					<h1 className="text-lg font-semibold md:text-2xl tracking-widest drop-shadow-1xl">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink
										href="/"
										onClick={(e) => {
											e.preventDefault();
											router.push(
												'/'
											);
										}}
									>
										Home
									</BreadcrumbLink>
								</BreadcrumbItem>
								{pathParts.map(
									(part, index) => {
										const href =
											'/' +
											pathParts
												.slice(
													0,
													index +
														1
												)
												.join(
													'/'
												);
										return (
											<React.Fragment
												key={
													href
												}
											>
												<BreadcrumbSeparator />
												{index ===
												pathParts.length -
													1 ? (
													<BreadcrumbItem>
														<BreadcrumbPage>
															{part
																.charAt(
																	0
																)
																.toUpperCase() +
																part.slice(
																	1
																)}
														</BreadcrumbPage>
													</BreadcrumbItem>
												) : (
													<BreadcrumbItem>
														<BreadcrumbLink
															href={
																href
															}
															onClick={(
																e
															) => {
																e.preventDefault();
																router.push(
																	href
																);
															}}
														>
															{part
																.charAt(
																	0
																)
																.toUpperCase() +
																part.slice(
																	1
																)}
														</BreadcrumbLink>
													</BreadcrumbItem>
												)}
											</React.Fragment>
										);
									}
								)}
							</BreadcrumbList>
						</Breadcrumb>
					</h1>
				</div>
				<div
					className="flex flex-1 rounded-lg border border-dashed shadow-sm p-2"
					x-chunk="dashboard-02-chunk-1"
				>
					{children}
				</div>
			</main>
		</>
	);
}
