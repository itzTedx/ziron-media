import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 md:px-6 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full uppercase w-fit duration-500 bg-background font-medium",
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
