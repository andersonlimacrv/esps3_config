import React from 'react';

export default function Loading() {
	return (
		<>
			<div className="min-h-screen w-full h-full flex flex-col justify-center items-center">
				<div className="flex h-full w-full space-x-2 justify-center items-center bg-transparent">
					<span className="sr-only">Loading...</span>
					<div className="h-12 w-12 bg-accent rounded-full animate-bounce [animation-delay:-0.5s]" />
					<div className="h-12 w-12 bg-accent rounded-full animate-bounce [animation-delay:-0.25s]" />
					<div className="h-12 w-12 bg-accent rounded-full animate-bounce" />
				</div>
			</div>
		</>
	);
}
