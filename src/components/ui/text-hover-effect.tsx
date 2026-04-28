"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

export const TextHoverEffect = ({
	text,
	duration,
}: {
	text: string;
	duration?: number;
	automatic?: boolean;
}) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);
	const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

	useEffect(() => {
		if (svgRef.current && cursor.x !== null && cursor.y !== null) {
			const svgRect = svgRef.current.getBoundingClientRect();
			const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
			const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
			setMaskPosition({
				cx: `${cxPercentage}%`,
				cy: `${cyPercentage}%`,
			});
		}
	}, [cursor]);

	return (
		<svg
			className="relative z-[9999] select-none"
			height="100%"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
			ref={svgRef}
			viewBox="0 0 300 45"
			width="100%"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient
					cx="50%"
					cy="50%"
					gradientUnits="userSpaceOnUse"
					id="textGradient"
					r="25%"
				>
					{hovered && (
						<>
							<stop offset="0%" stopColor={"#A78BFA"} />
							<stop offset="25%" stopColor={"#A78BFA"} />
							<stop offset="50%" stopColor={"#A78BFA"} />
							<stop offset="75%" stopColor={"#A78BFA"} />
							<stop offset="100%" stopColor={"#A78BFA"} />
						</>
					)}
				</linearGradient>

				<motion.radialGradient
					animate={maskPosition}
					gradientUnits="userSpaceOnUse"
					id="revealMask"
					r="20%"
					transition={{
						duration: duration ?? 0,
						ease: "easeOut",
						type: "spring",
						stiffness: 300,
						damping: 50,
					}}
				>
					<stop offset="0%" stopColor="white" />
					<stop offset="100%" stopColor="black" />
				</motion.radialGradient>
				<mask id="textMask">
					<rect
						fill="url(#revealMask)"
						height="100%"
						width="100%"
						x="0"
						y="0"
					/>
				</mask>
			</defs>
			<text
				className="fill-transparent stroke-primary font-bold font-monaSans text-[2.8rem] dark:stroke-neutral-800"
				dominantBaseline="middle"
				strokeWidth="0.3"
				style={{ opacity: hovered ? 0.7 : 0 }}
				textAnchor="middle"
				x="50%"
				y="50%"
			>
				{text}
			</text>

			<motion.text
				animate={{
					strokeDashoffset: 0,
					strokeDasharray: 1000,
				}}
				className="fill-transparent stroke-primary font-bold font-monaSans text-[2.8rem] dark:stroke-neutral-800"
				dominantBaseline="middle"
				initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
				strokeWidth="0.3"
				textAnchor="middle"
				transition={{
					duration: 4,
					ease: "easeInOut",
				}}
				x="50%"
				y="50%"
			>
				{text}
			</motion.text>
			<text
				className="fill-transparent font-bold font-monaSans text-[2.8rem]"
				dominantBaseline="middle"
				mask="url(#textMask)"
				stroke="url(#textGradient)"
				strokeWidth="0.3"
				textAnchor="middle"
				x="50%"
				y="50%"
			>
				{text}
			</text>
		</svg>
	);
};
