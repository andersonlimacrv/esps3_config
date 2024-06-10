import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


const authHandler = NextAuth({
    pages: {
        signIn: '/',
        error: '/',
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
                let user = await res.json();
                if (user.detail) {
                    throw new Error(user.detail)
                }

                if (user.access_token) {
                    return { ...user, username: credentials.username };

                } else {
                    return false
                }

            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return { ...token };
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        }
    },
});

export { authHandler as GET, authHandler as POST };


