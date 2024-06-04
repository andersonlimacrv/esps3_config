import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-semibold tracking-wide',
	{
		variants: {
			variant: {
				default: 'bg-primary-foreground text-secondary-foreground hover:bg-secondary/50 drop-shadow shadow-lg hover:shadow border border-white/muted-foreground',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80 shadow-lg hover:shadow',
				outline: 'border-[2px] border-slate-800/20 hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow bg-transparent',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 shadow-lg hover:shadow',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const Button = React.forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
