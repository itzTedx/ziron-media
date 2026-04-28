"use client";

import React, { useCallback, useEffect, useState } from "react";

import Image, { ImageProps } from "next/image";
import Link from "next/link";

import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconArrowUpRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import { cn, slugify } from "@/lib/utils";

interface CarouselProps {
	items: JSX.Element[];
	initialScroll?: number;
}

type Card = {
	src: string;
	title: string;
	category: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialScroll]);

	const checkScrollability = useCallback(() => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	}, []);

	const scrollLeft = useCallback(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	}, []);

	const scrollRight = useCallback(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	}, []);

	return (
		<div className="relative w-full">
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:pt-20"
				onScroll={checkScrollability}
				ref={carouselRef}
			>
				<div className={cn("flex flex-row justify-start gap-4")}>
					{items.map((item, index) => (
						<motion.div
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									delay: 0.2 * index,
									ease: "easeOut",
									once: true,
								},
							}}
							className="rounded-3xl first:pl-[2%] last:pr-[5%] md:first:pl-[1.5%] lg:last:pr-[5%] xl:first:pl-[4%]"
							initial={{
								opacity: 0,
								y: 20,
							}}
							key={`card_${Number(index + 1)}`}
						>
							{item}
						</motion.div>
					))}
				</div>
			</div>
			<div className="mr-10 flex justify-end gap-2">
				<button
					className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
					disabled={!canScrollLeft}
					onClick={scrollLeft}
				>
					<IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
				</button>
				<button
					className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
					disabled={!canScrollRight}
					onClick={scrollRight}
				>
					<IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
				</button>
			</div>
		</div>
	);
};

export const Card = React.memo(
	({ card, layout = false }: { card: Card; layout?: boolean }) => {
		return (
			<>
				<motion.div
					className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[35rem] md:w-96 dark:bg-neutral-900"
					layoutId={layout ? `card-${card.title}` : undefined}
				>
					<div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-foreground/50 via-transparent to-transparent" />
					<div className="relative z-40 p-8">
						<motion.p
							className="text-left font-medium font-sans text-sm text-white md:text-base"
							layoutId={layout ? `category-${card.category}` : undefined}
						>
							{card.category}
						</motion.p>
						<motion.p
							className="mt-1 max-w-xs text-left font-sans font-semibold text-white text-xl [text-wrap:balance] md:mt-2 md:text-3xl"
							layoutId={layout ? `title-${card.title}` : undefined}
						>
							{card.title}
						</motion.p>
					</div>
					<div className="absolute right-8 bottom-8 z-40 rounded-lg border border-background bg-background/50 px-3 py-2 opacity-0 backdrop-blur-lg transition-all duration-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring group-focus-within:opacity-100 group-hover:opacity-100">
						<Link
							className="inline-flex items-center gap-1.5 font-semibold text-sm focus-within:outline-none"
							href={`/case-studies/${slugify(card.title)}`}
							title={`Case study of ${card.title} project`}
						>
							View Case
							<IconArrowUpRight className="size-4" />
						</Link>
					</div>
					<BlurImage
						alt={card.title}
						className="absolute inset-0 z-10 object-cover"
						fill
						src={card.src}
					/>
				</motion.div>
			</>
		);
	}
);
Card.displayName = "Card"; // Add this line to set the display name

export const BlurImage = ({
	height,
	width,
	src,
	className,
	alt,
	...rest
}: ImageProps) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<Image
			alt={alt ? alt : "Case study"}
			blurDataURL={typeof src === "string" ? src : undefined}
			className={cn(
				"transition duration-300",
				isLoading ? "blur-sm" : "blur-0",
				className
			)}
			decoding="async"
			height={height}
			loading="lazy"
			onLoad={() => setLoading(false)}
			src={src}
			title={alt ? alt : "Case study"}
			width={width}
			{...rest}
		/>
	);
};
