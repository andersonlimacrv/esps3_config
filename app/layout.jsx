import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import ThemeProvider from '@/components/theme-provider';
import Toast from '@/components/ui/Toast';
import AuthProvider from '@/context/AuthProvider';

export const metadata = {
	title: 'IoT ES32 - S3 Configuration Tool',
	description: 'IoT ES32 - S3 Configuration Tool',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<AuthProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toast />
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
