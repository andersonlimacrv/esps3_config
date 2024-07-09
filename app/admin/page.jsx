'use client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DataTable from '@/components/admin/data-table';
import { UserColumns } from './user-columns';
import { Card } from '@/components/ui/card';
import { fetchAllUsers } from '@/actions/User';
import MediumLoader from '@/components/svgs/MediumLoader';

async function getData() {
	const response = await fetchAllUsers();
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return await response.json();
}

export default function AdminPage() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData();
				setData(result.users);
			} catch (error) {
				toast.error('Error fetching data.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="flex flex-col p-1 lg:p-4 mx-auto gap-y-2">
			<Card className="flex justify-center">
				<h1 className="text-primary drop-shadow-1xl text-3xl font-bold py-1 mx-8">
					All Users
				</h1>
				<div className="flex flex-1"></div>
			</Card>
			<Card className="flex w-[75vw] min-h-36 justify-center items-center mx-auto">
				{isLoading ? (
					<MediumLoader />
				) : (
					<DataTable columns={UserColumns} data={data} />
				)}
			</Card>
		</section>
	);
}
