import React from 'react';

export default function Hamburguer({ ...rest }) {
	return (
		<button className="relative group" {...rest}>
			{/* button container */}
			<div className="relative z-20 my-2 py-auto flex items-center justify-center rounded-full w-10 h-10 transform transition-all  bg-muted ring-0 ring-muted-foreground hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
				<div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
					<div className="bg-primary h-[1.5px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]" />
					<div className="bg-primary h-[1.5px] rounded" />
					<div className="m-0 bg-primary h-[1.5px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]" />
				</div>
			</div>
		</button>
	);
}
