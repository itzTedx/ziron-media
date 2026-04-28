"use client";

import * as React from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		className={cn(
			"focus-within:outline-none focus-within:ring-1 focus-within:ring-ring",
			className
		)}
		ref={ref}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			className={cn(
				"group focus-visible:!outline-none flex flex-1 items-center justify-between text-start font-semibold text-base transition-[transform_color] md:py-4 md:text-lg [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:bg-primary [&[data-state=open]>svg]:text-background",
				className
			)}
			ref={ref}
			{...props}
		>
			<span
				className="relative after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-muted-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 group-focus-within:after:origin-bottom-left group-focus-within:after:scale-x-100 md:after:absolute"
				itemProp="name"
			>
				{children}
			</span>
			<ChevronDownIcon className="size-6 shrink-0 rounded-full bg-gray-50 p-1 text-muted-foreground transition-all duration-300 ease-in-out md:size-10 md:p-2" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		ref={ref}
		{...props}
	>
		<div className={cn("pt-0 pb-4 max-sm:pt-3", className)} itemProp="text">
			{children}
		</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
