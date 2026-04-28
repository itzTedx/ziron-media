import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

import ContactForm from "./_components/contact-form";

export const dynamic = "force-static";

const meta = {
	title: "We'd love to help you grow: Ziron media",
	description:
		"We’d love to hear from you: Drop us a line using this form or pay us a visit at our beautiful office in the bustling heart of Dubai.",
	url: "/contact",
};

export default async function ContactPage() {
	return (
		<main className="min-h-dvh">
			<div className="relative mx-auto max-w-6xl items-start gap-6 px-4 py-12 md:grid md:grid-cols-2 md:py-32">
				<section className="space-y-3">
					<Badge>✦ Get in touch</Badge>
					<h2 className="title-2">
						Don&apos;t be shy,
						<span className="text-secondary"> say hi!</span>
					</h2>
					<p className="text-balance">
						We’d love to hear from you: Drop us a line using this form or pay us
						a visit at our beautiful office in the bustling heart of Dubai.
					</p>

					<div className="grid grid-cols-2 gap-6 pt-12">
						<div className="space-y-4">
							<Icons.mail className="text-secondary" />
							<h5 className="font-light text-2xl">Email</h5>
							<p className="font-light text-gray-600 text-sm">
								Our friendly team is here to help.
							</p>
							<Link
								className="select-none"
								href="mailto:info&#64;zironmedia&#46;com"
							>
								info&#64;zironmedia&#46;com
							</Link>
						</div>

						<div className="space-y-4">
							<Icons.flag className="text-secondary" />
							<h5 className="font-light text-2xl">Office</h5>
							<p className="font-light text-gray-600 text-sm">
								Come visit us in Dubai.
							</p>
							<Link
								className="text-balance pt-3"
								href="https://maps.app.goo.gl/paExi9WpQtHtEfkB6"
								target="_blank"
							>
								#317, Aura Xavier Building, Al Gubaiba Metro Exit-1, Dubai,
								United Arab Emirates
							</Link>
						</div>
					</div>
				</section>

				<ContactForm />
			</div>
		</main>
	);
}

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	openGraph: {
		type: "website",
		url: meta.url,
		title: meta.title,
		description: meta.description,
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
	},
	alternates: { canonical: meta.url },
};
