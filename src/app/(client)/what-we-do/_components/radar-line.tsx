"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

export const Radar = ({ className }: { className?: string }) => {
	const circles = new Array(8).fill(1);
	return (
		<div
			className={cn(
				"relative z-10 flex h-20 w-20 items-center justify-center rounded-full",
				className
			)}
		>
			<div
				className="absolute top-1/2 right-1/2 z-40 flex h-[5px] w-[400px] animate-radar-spin items-end justify-center overflow-hidden bg-transparent"
				style={{
					transformOrigin: "right center",
				}}
			>
				{/* Radar line that rotates */}
				<div className="relative z-40 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />
			</div>
			{/* concentric circles */}
			{circles.map((_, idx) => (
				<Circle
					idx={idx}
					key={`motion-${Number(idx) + 1}`}
					style={{
						height: `${(idx + 1) * 5}rem`,
						width: `${(idx + 1) * 5}rem`,
						border: `1px solid hsla(233, 30%, 80%, ${1 - (idx + 1) * 0.1})`,
					}}
				/>
			))}
		</div>
	);
};

export const Circle = ({
	className,
	idx,
	...rest
}: {
	className?: string;
	idx: number;
} & React.ComponentProps<typeof motion.div>) => {
	return (
		<motion.div
			{...rest}
			animate={{
				opacity: 1,
			}}
			className={twMerge(
				"absolute inset-0 top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
				className
			)}
			initial={{
				opacity: 0,
			}}
			transition={{
				delay: idx * 0.1,
				duration: 0.2,
			}}
		/>
	);
};
