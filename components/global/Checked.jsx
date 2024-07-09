import React from 'react';

const Checked = ({ status }) => {
	return (
		<>
			<span
				className={`p-1 inline-flex items-center gap-x-1 text-xs drop-shadow-lg font-semibold ${
					status === true
						? 'text-[#37da37]'
						: 'text-[#FF0000]'
				}`}
			>
				{status === true ? (
					<svg
						className="flex-shrink-0 size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
						<path d="m9 12 2 2 4-4" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 512 512"
						fill="#FF0000"
					>
						<g>
							<g
								fill="#FF0000"
								transform="translate(42.667 42.667)"
							>
								<path d="M213.333 0c117.803 0 213.334 95.53 213.334 213.333s-95.531 213.334-213.334 213.334C95.531 426.667 0 331.136 0 213.333 0 95.531 95.53 0 213.333 0zm0 42.667c-94.101 0-170.666 76.565-170.666 170.666C42.667 307.435 119.232 384 213.333 384 307.435 384 384 307.435 384 213.333c0-94.101-76.565-170.666-170.667-170.666zm48.918 91.584l30.165 30.165-48.917 48.917 48.917 48.918-30.165 30.165-48.918-48.917-48.917 48.917-30.165-30.165 48.917-48.918-48.917-48.917 30.165-30.165 48.917 48.917 48.918-48.917z"></path>
							</g>
						</g>
					</svg>
				)}
			</span>
		</>
	);
};

export default Checked;
