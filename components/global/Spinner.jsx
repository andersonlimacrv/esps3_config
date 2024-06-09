import React from 'react';

export default function Spinner() {
	return (
		<>
			<div className="flex space-x-2 justify-center items-center bg-transparent">
				<span className="sr-only">Loading...</span>
				<div className="h-8 w-8 bg-accent rounded-full animate-bounce [animation-delay:-0.5s]" />
				<div className="h-8 w-8 bg-accent rounded-full animate-bounce [animation-delay:-0.25s]" />
				<div className="h-8 w-8 bg-accent rounded-full animate-bounce" />
			</div>
		</>
	);
}
