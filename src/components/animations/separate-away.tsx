"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

export function SeparateAway() {
	const separate = {
		hidden: { opacity: 0, y: 0 },
		visible: (custom: number) => ({
			opacity: 1,
			y: custom * 5,
			transition: { duration: 1.5 },
		}),
	};
	return (
		<div>
			<motion.h1
				animate="visible"
				className={clsx(
					"text-center font-bold font-display drop-shadow-sm",
					"text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
					"tracking-[-0.02em]",
					"md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
				)}
				custom={-1}
				initial="hidden"
				variants={separate}
			>
				Separate
			</motion.h1>
			<motion.h1
				animate="visible"
				className={clsx(
					"text-center font-bold font-display drop-shadow-sm",
					"text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
					"tracking-[-0.02em]",
					"md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
				)}
				custom={1}
				initial="hidden"
				variants={separate}
			>
				Away
			</motion.h1>
		</div>
	);
}
