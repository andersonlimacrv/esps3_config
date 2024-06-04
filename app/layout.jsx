import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import ThemeProvider from '@/components/theme-provider.jsx';

export const metadata = {
	title: 'IoT ES32 - S3 Configuration Tool',
	description: 'IoT ES32 - S3 Configuration Tool',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
