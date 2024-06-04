import React from 'react';
import { PiCodeDuotone } from 'react-icons/pi';
import Link from 'next/link';

export default function LogoArea({ isOpen }) {
	return (
		<div className="flex h-16 items-center border-b px-4 lg:h-[60px] lg:px-6">
			<Link
				href="/"
				className="flex items-center gap-2 font-semibold"
			>
				<PiCodeDuotone className="h-8 w-8" />
				<span
					className={`text-2xl tracking-wide whitespace-nowrap transition-opacity duration-300 ${
						isOpen ? 'opacity-100' : 'opacity-0 hidden'
					}`}
				>
					All code.
				</span>
			</Link>
		</div>
	);
}
