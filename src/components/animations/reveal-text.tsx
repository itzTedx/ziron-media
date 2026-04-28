"use client";

import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const RevealText = ({ children }: { children: string }) => {
	return (
		<motion.span
			className="relative block overflow-hidden whitespace-nowrap"
			initial="initial"
			style={{
				lineHeight: 1.2,
			}}
			whileHover="hovered"
		>
			<div>
				{children.split("").map((l, i) => (
					<motion.span
						className="inline-block"
						key={`${l}-${Number(i + 1)}`}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
					>
						{l}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((l, i) => (
					<motion.span
						className="inline-block"
						key={`${l}-${Number(i + 1)}`}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
					>
						{l}
					</motion.span>
				))}
			</div>
		</motion.span>
	);
};
