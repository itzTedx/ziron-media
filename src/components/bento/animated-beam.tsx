"use client";

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";

import { cn } from "@/lib/utils";

import { Icons } from "../icons";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			className={cn(
				"z-10 flex size-8 items-center justify-center rounded-full border bg-white p-1.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.5)] md:size-12 md:p-3",
				className
			)}
			ref={ref}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export function AnimatedBeamSocial({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className={cn(
				"relative flex w-full items-center justify-center overflow-hidden rounded-lg border p-10 md:h-[500px]",
				className
			)}
			ref={containerRef}
		>
			<div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-6">
				<div className="flex flex-col justify-center">
					<Circle className="max-md:size-8" ref={div7Ref}>
						<Icons.user />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle className="size-12 border-primary md:size-20" ref={div6Ref}>
						<Icons.ziron />
					</Circle>
				</div>
				<div className="flex flex-col justify-center gap-1 md:gap-4">
					<Circle className="max-md:size-8" ref={div1Ref}>
						<Icons.instagram />
					</Circle>
					<Circle className="max-md:size-8" ref={div2Ref}>
						<Icons.facebook />
					</Circle>
					<Circle className="max-md:size-8" ref={div3Ref}>
						<Icons.linkedin />
					</Circle>
					<Circle className="max-md:size-8" ref={div4Ref}>
						<Icons.whatsapp />
					</Circle>

					<Circle className="max-md:size-8" ref={div5Ref}>
						<Icons.messenger />
					</Circle>
				</div>
			</div>

			{/* AnimatedBeams */}
			<AnimatedBeam
				containerRef={containerRef}
				duration={1.5}
				fromRef={div1Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				duration={2.5}
				fromRef={div2Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				duration={2}
				fromRef={div3Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				duration={1.5}
				fromRef={div4Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				duration={2.4}
				fromRef={div5Ref}
				toRef={div6Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				duration={4}
				fromRef={div6Ref}
				toRef={div7Ref}
			/>
		</div>
	);
}
