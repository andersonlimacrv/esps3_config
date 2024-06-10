'use client';
import { useSession } from 'next-auth/react';
import { decodePayload } from '@/lib/token';
import React, { useState, useEffect } from 'react';
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
import { fetchUser } from '@/components/actions/fetchUser';
import { BACKEND_URL } from '@/constants';

export default function AvatarUser() {
	const { data: session } = useSession();
	const access_token = session?.user?.access_token;
	const refresh_token = session?.user?.refresh_token;

	const [username, setUsername] = useState('');
	const [userId, setUserId] = useState('');
	const [profile, setProfile] = useState({});

	useEffect(() => {
		if (access_token && refresh_token) {
			const username = decodePayload(access_token);
			setUsername(username);
			const userId = decodePayload(refresh_token);
			setUserId(userId);
		}
	}, [access_token, refresh_token]);

	const fetchUserData = async () => {
		if (userId) {
			const res = await fetchUser(
				`${BACKEND_URL}/users/${userId}`,
				{
					method: 'GET',
				}
			);
			if (res) {
				const data = await res.json();
				console.log(data);
				setProfile(data);
			}
		}
	};

	useEffect(() => {
		fetchUserData();
	}, [userId]);

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
					<DropdownMenuLabel>
						<div className="text-accent px-2">
							{username && username}
						</div>
					</DropdownMenuLabel>
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
