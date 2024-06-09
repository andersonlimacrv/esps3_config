'use client';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const light = {
	background: '#F7F9FB',
	color: '#161616',
	border: '1px solid #00AACC30',
	textShadow: '1px 1px 1px #acacac',
	boxShadow: '3px 3px 6px #16161680',
};

const dark = {
	background: '#161616',
	color: '#F7F9FB',
	border: '1px solid #00AACC30',
	textShadow: '1px 1px 1px #161616',
	boxShadow: '6px 9px 12px #16161650',
};

export default function Toast() {
	const [theme, setTheme] = useState('system');
	const [style, setStyle] = useState({});

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		if (theme === 'light') {
			setStyle(light);
		} else if (theme === 'dark') {
			setStyle(dark);
		}
	}, [theme]);

	return (
		<>
			<Toaster
				position="top-center"
				reverseOrder={true}
				gutter={16}
				containerClassName=""
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: style,
				}}
			/>
		</>
	);
}
