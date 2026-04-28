import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";

export const Cta = () => {
	return (
		<section className="container mb-12 max-w-6xl">
			<div className="container relative rounded-2xl bg-linear-to-br from-secondary to-primary p-4 md:grid md:grid-cols-12 md:p-12">
				<div className="col-span-6 space-y-3 p-6 text-background">
					<Badge className="border-white bg-secondary font-medium text-background text-xs">
						Dont&apos;t wait!
					</Badge>
					<h5 className="font-monaSans text-4xl md:text-5xl">
						Contact us <span className="font-valverde">Now!</span>
					</h5>
					<p className="text-balance md:text-lg">
						Ready to take your marketing to the next level? Fill out the contact
						form above, and let&apos;s discuss how we can help you achieve your
						goals.
					</p>
				</div>
				<Image
					alt="Window with search engine and notifications about the business"
					className="md:absolute md:top-1/2 md:-right-20 md:-translate-y-1/2"
					height={370}
					src="/images/marketing-data.svg"
					width={636}
				/>
				<Link
					className="absolute -top-4 -right-4 flex size-12 items-center justify-center rounded-full border bg-background/20 backdrop-blur-lg md:-top-9 md:-right-9 md:size-20"
					href="#"
				>
					<IconArrowUpRight className="size-9 stroke-[1.5]" />
				</Link>
			</div>
			<div className="mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] absolute -left-12 size-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[30px_30px] opacity-50 mix-blend-overlay md:size-120" />
		</section>
	);
};
