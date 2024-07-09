import { getSession, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '@/constants';

export const fetchUserById = async (userId, options) => {
	const url = `${BACKEND_URL}/users/${userId}`;
	const session = await getSession();
	const jwt = session?.user?.access_token;

	const response = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
		method: 'GET',
	});

	if (response.status === 401) {
		toast.error('Session expired. Please login again.');
		/* await 2 seg */
		await new Promise((resolve) => setTimeout(resolve, 2000));
		await signOut({ callbackUrl: '/' });
	}

	return response;
};

/* Delete by user id */
export const deleteUserById = async (userId, options) => {
	const url = `${BACKEND_URL}/users/${userId}`;
	const session = await getSession();
	const jwt = session?.user?.access_token;
	const response = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
		method: 'DELETE',
	});
	return response;
};

export const AllowUser = async (userId, options) => {
	const url = `${BACKEND_URL}/users/${userId}/allow`;
	const session = await getSession();
	const jwt = session?.user?.access_token;
	const response = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
		method: 'PUT',
	});
	return response;
};

export const fetchAllUsers = async (options) => {
	const url = `${BACKEND_URL}/users`;
	const session = await getSession();
	const jwt = session?.user?.access_token;
	const response = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
		method: 'GET',
	});
	return response;
};
