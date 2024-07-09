'use client';

import React, { useState } from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { FaLowVision } from 'react-icons/fa';
import { DataTablePagination } from './table-pagination';

import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DataTable({
	title,
	columns,
	data,
	filterColumn,
	showColumns,
}) {
	const [sorting, setSorting] = useState([]);
	const [columnFilters, setColumnFilters] = useState([]);
	const [columnVisibility, setColumnVisibility] = useState({});
	const [rowSelection, setRowSelection] = useState({});
	const table = useReactTable({
		data,
		columns,
		state: { sorting, columnFilters, columnVisibility, rowSelection },
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<div className="flex flex-col w-full">
			{/* Header */}
			<div className="flex flex-col lg:flex-row gap-y-2 items-center justify-center gap-x-16  px-8 py-4 lg:px-12 2xl:px-32">
				{title && (
					<h1 className="text-3xl font-bold drop-shadow-md">
						{title}
					</h1>
				)}
				{filterColumn && (
					<div className="flex items-center space-x-2 relative">
						{/* Filters */}
						<Input
							placeholder={`Filter by ${filterColumn} ...`}
							value={
								table
									.getColumn(filterColumn)
									?.getFilterValue() ?? ''
							}
							onChange={(event) =>
								table
									.getColumn(filterColumn)
									?.setFilterValue(
										event.target.value
									)
							}
							className="max-w-md min-w-[220px]"
						/>
						<span className="absolute inset-y-0 right-2 flex items-center">
							<PiMagnifyingGlassDuotone className=" w-6 h-6 text-accent" />
						</span>
					</div>
				)}
				{showColumns === true && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="lg:ml-auto min-w-[220px]"
							>
								Columns
								<FaLowVision className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{table
								.getAllColumns()
								.filter((column) =>
									column.getCanHide()
								)
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={
												column.id
											}
											className="capitalize cursor-pointer"
											checked={column.getIsVisible()}
											onCheckedChange={(
												value
											) =>
												column.toggleVisibility(
													!!value
												)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</div>
			{/* Table */}
			<div className="w-full">
				<Table>
					<TableHeader>
						{table
							.getHeaderGroups()
							.map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map(
										(header) => {
											return (
												<TableHead
													key={
														header.id
													}
												>
													{header.isPlaceholder
														? null
														: flexRender(
																header
																	.column
																	.columnDef
																	.header,
																header.getContext()
														  )}
												</TableHead>
											);
										}
									)}
								</TableRow>
							))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table
								.getRowModel()
								.rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={
											row.getIsSelected() &&
											'selected'
										}
									>
										{row
											.getVisibleCells()
											.map(
												(
													cell
												) => (
													<TableCell
														key={
															cell.id
														}
													>
														{flexRender(
															cell
																.column
																.columnDef
																.cell,
															cell.getContext()
														)}
													</TableCell>
												)
											)}
									</TableRow>
								))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{/* Selected Rows */}

			{/* Pagination */}
			<div className="p-4">
				<DataTablePagination table={table} />
			</div>
		</div>
	);
}
