import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


const authHandler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/',
        signOut: '/',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
                const formData = new URLSearchParams({
                    username: credentials.username,
                    password: credentials.password,
                });

                let res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: formData.toString(),
                    }
                );
                let data = await res.json();
                if (data.detail) {
                    throw new Error(data.detail)
                }

                if (data.access_token) {
                    return { ...data };
                } else {
                    return false
                }

            },
        }),
    ],
});

export { authHandler as GET, authHandler as POST };


