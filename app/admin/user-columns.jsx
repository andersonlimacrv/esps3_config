'use client';
import Checked from '@/components/global/Checked';
import { MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
			const date = new Date(row.getValue('created_at'));
			const formatted = date.toLocaleString('pt-BR', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
			return <div className="px-2">{formatted}</div>;
		},
	},
	{
		accessorKey: 'is_active',
		header: 'Is Active',
		cell: ({ row }) => {
			return (
				<div className="text-center">
					<Checked status={row.getValue('is_active')} />
				</div>
			);
		},
	},
];
