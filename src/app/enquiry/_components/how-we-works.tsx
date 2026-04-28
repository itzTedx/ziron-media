import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const HowWeWorks = () => {
	return (
		<section className="container pb-40">
			<Badge>✦ This is how we works</Badge>
			<h3 className="py-3 text-4xl md:text-5xl">
				Your Dedicated Digital Partner
			</h3>
			<p>Here&apos;s how we tailor our approach to ensure your success.</p>

			<div className="grid grid-cols-1 gap-6 pt-9 md:grid-cols-3">
				<div className="flex flex-col justify-between rounded-xl bg-gray-950 text-gray-50">
					<div className="p-6 md:p-12">
						<h4 className="font-bold text-2xl">Data-Driven Approach</h4>
						<p className="text-balance pt-3 text-xl">
							We use in-depth analytics to inform our strategies and maximize
							your ROI.
						</p>
					</div>
					<Image
						alt="Small Business growth is in digital marketing agencies hands"
						className="mx-auto py-4 max-md:px-4 md:py-12"
						height={206}
						src="/images/data-illustration.svg"
						width={350}
					/>
				</div>
				<div className="flex flex-col justify-between rounded-xl bg-violet-300">
					<div className="p-6 md:p-12">
						<h4 className="font-bold text-2xl">Tailored Solutions</h4>
						<p className="text-balance pt-3 text-xl">
							Every business is unique, and we customize our services to fit
							your specific needs.
						</p>
					</div>
					<Image
						alt="Problem Solving in ease"
						className="w-full pt-6"
						height={206}
						src="/images/puzzle-hands.svg"
						width={300}
					/>
				</div>
				<div className="flex flex-col justify-between rounded-xl bg-gray-50">
					<div className="p-6 md:p-12">
						<h4 className="font-bold text-2xl">Ongoing Support</h4>
						<p className="text-balance pt-3 text-xl">
							Our commitment to your success extends beyond initial campaigns,
							providing continuous insights and adjustments.
						</p>
					</div>
					<Image
						alt="Ready to serve customer services"
						className="mx-auto py-6"
						height={206}
						src="/images/group.svg"
						width={300}
					/>
				</div>
			</div>
		</section>
	);
};
