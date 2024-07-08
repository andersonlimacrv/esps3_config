import { getSession } from 'next-auth/react';

export const fetchUser = async (url, options) => {
	const session = await getSession();
	const jwt = session?.user?.access_token;
	return fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
	});
};
