import dynamic from "next/dynamic";

import { Badge } from "@/components/ui/badge";
import Iphone15Pro from "@/components/ui/iphone-15-pro";

const AnimatedList = dynamic(() =>
	import("@/components/bento/animated-list").then((mod) => mod.AnimatedListDemo)
);
export default function GetStated() {
	return (
		<>
			<section className="relative mx-auto max-w-7xl px-6 py-32 max-lg:overflow-hidden lg:py-40">
				<div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[20px_24px]">
					<div className="absolute top-0 right-0 left-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />
				</div>
				<div className="rounded-2xl border border-primary bg-linear-to-br from-primary/90 to-secondary/60 py-9 shadow-primary-md backdrop-blur-md max-sm:text-center md:grid md:grid-cols-12 md:from-secondary md:to-primary md:py-20">
					<div className="col-span-7 space-y-4 px-4 sm:px-6 md:px-20">
						<Badge className="border-white bg-secondary font-medium text-white text-xs">
							Guaranteed Target Audience Delivery
						</Badge>
						<h3 className="text-balance font-bold font-monaSans text-3xl text-primary leading-8 lg:text-7xl lg:leading-18">
							Your Success, Our Promise!
						</h3>
						<p className="mt-3 text-balance text-violet-200 md:mt-6 md:text-xl">
							We&apos;ll deliver your brand straight to your ideal customers,
							ensuring maximum impact and engagement.
						</p>
					</div>
					<div className="max-md:hidden md:relative md:col-span-3">
						<Iphone15Pro
							className="dark absolute top-1/2 h-160 -translate-y-1/2"
							src="/images/iphone-bg.webp"
						/>
						<AnimatedList className="mask-[linear-gradient(to_top,transparent_10%,#000_70%)] absolute top-1/2 right-0 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out group-hover:scale-105" />
					</div>
				</div>
				<div className="absolute top-1/2 left-1/2 -z-10 w-full md:hidden">
					<Iphone15Pro
						className="dark absolute top-1/2 h-104 -translate-y-1/2"
						src="/images/iphone-bg.webp"
					/>
					<AnimatedList className="mask-[linear-gradient(to_top,transparent_10%,#000_70%)] absolute top-1/2 h-[260px] w-full translate-y-[-32%] border-none transition-all duration-300 ease-out" />
				</div>
			</section>
		</>
	);
}
