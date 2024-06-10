import { getSession } from 'next-auth/react';

export const fetchUser = async (url, options) => {
	const session = await getSession();
	console.log('session from fetchUser', session);
	const jwt = session?.user?.access_token;
	return fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(session && { Authorization: `Bearer ${jwt}` }),
		},
	});
};
