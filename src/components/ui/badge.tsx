import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex w-fit items-center rounded-full rounded-md border bg-background px-3 py-1.5 font-medium uppercase transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:px-6",
	{
		variants: {
			variant: {
				default: "border-primary text-primary hover:bg-primary/5",
				secondary: "border-secondary text-secondary hover:bg-secondary/5",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant }), className, "cursor-default")}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
