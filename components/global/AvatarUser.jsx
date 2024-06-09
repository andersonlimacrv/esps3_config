import React from 'react';
import { signOut } from 'next-auth/react';
import { FaUser } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AvatarUser() {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="default"
						size="icon"
						className="rounded-full"
					>
						<FaUser className="h-5 w-5" />
						<span className="sr-only">
							Toggle user menu
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					className="text-center"
				>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<p className="cursor-pointer w-full">
							Settings
						</p>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<p className="cursor-pointer w-full">
							Support{' '}
						</p>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<p
							className="cursor-pointer w-full"
							onClick={() => signOut()}
						>
							Logout
						</p>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
