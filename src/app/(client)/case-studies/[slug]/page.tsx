import Link from "next/link";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { Blob } from "@/components/assets/blob";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import ContactCta from "../_components/contact-cta";

export default function CasePage({ params }: { params: { slug: string } }) {
	const title = params.slug.replace("-", " ");
	return (
		<main className="relative min-h-dvh">
			<header className="container relative z-10 grid grid-cols-2 py-12">
				<div className="flex flex-col justify-between">
					<div>
						<Link
							className="mb-9 inline-flex items-center justify-center gap-3"
							href="/case-studies"
						>
							<div className="flex size-6 items-center justify-center rounded-full bg-foreground text-background">
								<IconArrowLeft className="size-4" />
							</div>
							Case Studies
						</Link>
						<h1 className="font-medium text-5xl capitalize tracking-tight">
							{title}
						</h1>
						<p className="mt-4 text-balance text-xl">
							Tailored digital strategies combine SEO, PPC, and achieve
							goals.long-term strategies that achieve your goals. We get under
							the skin of your industry and target audiences to ensure you
							maximize your marketing budget
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Badge>Social Media Management</Badge>
						<Badge>Paid Advertisement</Badge>
						<Badge>Branding</Badge>
						<Badge>Search Engine Optimization</Badge>
					</div>
				</div>
				<div className="relative h-120 w-full rounded-xl bg-gray-100" />
				<Blob className="absolute top-24 right-[90%] -z-10 opacity-50" />
			</header>

			<section className="container max-w-6xl py-12">
				<div className="gap-9 border border-primary bg-violet-200 p-6 max-md:space-y-4 md:grid md:grid-cols-3 md:p-16">
					<div className="col-span-2 space-y-4">
						<h2 className="text-violet-900">About {title}</h2>
						<p className="text-balance text-xl leading-normal">
							Founded in 1841, Aura Group is a prestigious private sector in te
							heart of dubai. A new strategy was applied and ziron jumped
							straight on the tast
						</p>
					</div>
					<div className="w-full rounded-xl border border-primary bg-background p-6 shadow-primary-md md:p-9">
						<h3 className="font-monaSans text-violet-900">What we did</h3>
						<ul className="mt-4 mb-6 divide-y border-t border-b">
							<li>
								<Link
									className="flex justify-between py-3"
									href="/what-we-do/paid-advertisement"
								>
									Paid Advertisement
									<IconArrowRight />
								</Link>
							</li>
							<li>
								<Link
									className="flex justify-between py-3"
									href="/what-we-do/social-Media-marketing"
								>
									Social Media Marketing
									<IconArrowRight />
								</Link>
							</li>
						</ul>
						<Button asChild>
							<Link href="/what-we-do">
								What we do
								<IconArrowRight />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className="container py-12">
				<h3 className="mb-4 font-normal">The Challenge</h3>
				<p className="max-w-prose text-sm">
					Tailored digital strategies combine SEO, PPC, and achieve
					goals.long-term strategies that achieve your goals. We get under the
					skin of your industry and target audiences to ensure you maximize your
					marketing budget
				</p>

				<div className="mt-9 grid grid-cols-2 items-center gap-12">
					<div className="relative h-120 w-full rounded-lg bg-gray-100" />
					<div className="space-y-6 text-lg">
						<h4>Detailed Overview of the topic</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac. Elementum at viverra
							lorem proin purus interdum. Proin habitant aliquet pulvinar neque
							id facilisis. Imperdiet pharetra id praesent sed imperdiet massa
							nulla laoreet. Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac. Elementum at viverra
							lorem proin purus interdum. Proin habitant aliquet pulvinar neque
							id facilisis. Imperdiet pharetra id praesent sed imperdiet massa
							nulla laoreet. Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac.
						</p>
					</div>
				</div>
			</section>
			<section className="container py-12">
				<h3 className="mb-4 font-normal">The solution we came across</h3>
				<p className="max-w-prose text-sm">
					Short Description about the solution in this project
				</p>

				<div className="mt-9 grid grid-cols-2 items-center gap-12">
					<div className="space-y-6 text-lg">
						<h4>Detailed Overview of the topic</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac. Elementum at viverra
							lorem proin purus interdum. Proin habitant aliquet pulvinar neque
							id facilisis. Imperdiet pharetra id praesent sed imperdiet massa
							nulla laoreet. Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac. Elementum at viverra
							lorem proin purus interdum. Proin habitant aliquet pulvinar neque
							id facilisis. Imperdiet pharetra id praesent sed imperdiet massa
							nulla laoreet. Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac.
						</p>
					</div>
					<div className="relative h-120 w-full rounded-lg bg-gray-100" />
				</div>
			</section>
			<section className="container py-12">
				<h3 className="mb-4 font-normal">And the results are...</h3>
				<p className="max-w-prose text-sm">
					Short Description about the solution in this project
				</p>

				<div className="mt-9 grid grid-cols-2 gap-12">
					<div className="relative h-120 w-full rounded-lg bg-gray-100" />
					<div className="space-y-6 text-lg">
						<h4>Detailed Overview of the topic</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac. Elementum at viverra
							lorem proin purus interdum. Proin habitant aliquet pulvinar neque
							id facilisis. Imperdiet pharetra id praesent sed imperdiet massa
							nulla laoreet. Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis Proin habitant aliquet pulvinar neque id facilisis.
							Imperdiet pharetra id praesent sed imperdiet massa nulla laoreet.
							Enim sed quis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur. Purus malesuada ultrices
							at sit iaculis gravida maecenas eu. At facilisi cras purus
							curabitur vestibulum vel lorem vulputate ac.
						</p>
					</div>
				</div>
			</section>
			<ContactCta />
		</main>
	);
}
