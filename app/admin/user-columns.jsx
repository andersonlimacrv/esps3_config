'use client';
import { FaCheck } from 'react-icons/fa';
import { MdBlock, MdContentCopy } from 'react-icons/md';
import { FaTrashCan } from 'react-icons/fa6';
import Checked from '@/components/global/Checked';
import toast from 'react-hot-toast';
import { MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { deleteUserById, AllowUser } from '@/actions/User';

export const deleteUser = async (userId) => {
	const response = await deleteUserById(userId);
	if (response.status === 200) {
		toast.success('User deleted successfully.');
	} else {
		toast.error(`Error deleting user: ${response.statusText}.`);
	}
};

export const updateUser = async (userId) => {
	const response = await AllowUser(userId);
	if (response.status === 200) {
		toast.success('User updated successfully.');
	} else {
		toast.error(`Error updating user: ${response.statusText}.`);
	}
};

export const handleCopyUsername = (username) => {
	navigator.clipboard.writeText(username);
	toast.success('Username copied to clipboard.');
};

export const handleCopyUserId = (userId) => {
	navigator.clipboard.writeText(userId);
	toast.success(`User ID ${userId} copied to clipboard.`);
};

export const UserColumns = [
	{
		accessorKey: 'username',
		header: 'Username',
		cell: ({ getValue }) => {
			return <div className="text-center">{getValue()}</div>;
		},
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'role',
		header: 'Role',
	},
	{
		accessorKey: 'created_at',
		header: 'Created At',
		cell: ({ row }) => {
			let date = new Date(row.getValue('created_at'));
			let formatted = date.toLocaleString('pt-BR', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
			return <div className="px-2">{formatted}</div>;
		},
	},
	{
		accessorKey: 'updated_at',
		header: 'Last Updated',
		cell: ({ row }) => {
			let date = new Date(row.getValue('created_at'));
			let formatted = date.toLocaleString('pt-BR', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
			return <div className="px-2">{formatted}</div>;
		},
	},

	{
		accessorKey: 'is_active',
		header: 'Active',
		cell: ({ row }) => {
			return (
				<div className="text-center">
					<Checked status={row.getValue('is_active')} />
				</div>
			);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const user = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-8 w-8 p-0"
						>
							<span className="sr-only">
								Open menu
							</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="text-center"
					>
						<DropdownMenuLabel>
							Actions
						</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								handleCopyUserId(user.id)
							}
							className="cursor-pointer group"
						>
							<span className="flex justify-between w-full gap-x-4">
								Copy User ID
								<MdContentCopy className="h-4 w-4 ml-auto inline group-hover:text-muted" />
							</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() =>
								handleCopyUsername(
									user.username
								)
							}
							className="cursor-pointer group"
						>
							<span className="flex justify-between w-full gap-x-4">
								Copy Username
								<MdContentCopy className="h-4 w-4 ml-auto inline group-hover:text-muted" />
							</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />

						<DropdownMenuItem
							onClick={() => updateUser(user.id)}
							className="cursor-pointer group"
						>
							{user.is_active ? (
								<span className="flex justify-between w-full">
									Disable{' '}
									<MdBlock className="h-4 w-4 group-hover:text-red-500 inline" />
								</span>
							) : (
								<span className="flex justify-between w-full">
									Enable{' '}
									<FaCheck className="h-4 w-4 group-hover:text-green-500 inline" />
								</span>
							)}
						</DropdownMenuItem>

						<DropdownMenuItem
							className="cursor-pointer group"
							onClick={() => deleteUser(user.id)}
						>
							<span className="flex justify-between w-full">
								Delete{' '}
								<FaTrashCan className="ml-auto group-hover:text-red-500" />
							</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
