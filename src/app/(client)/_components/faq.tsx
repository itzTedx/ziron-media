import { Blob } from "@/components/assets/blob";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { FAQS } from "@/constants/faq";

export default async function Faq() {
	return (
		<section className="container relative z-0 grid gap-10 py-12 max-lg:overflow-clip md:grid-cols-2 md:py-24">
			<div className="top-28 flex h-fit flex-col gap-5 md:sticky">
				<Badge>✦ FAQs</Badge>
				<h2 className="title-2">
					Still have <br />
					<span className="text-secondary">questions?</span>
				</h2>
				<p className="text-balance">
					Everything you need to know about our services and the costs. Can’t
					find the answer you’re looking for? Please chat to our team.
				</p>
			</div>
			<aside
				className="relative space-y-12"
				itemScope
				itemType="https://schema.org/FAQPage"
			>
				<Accordion
					className="relative flex w-full flex-col gap-6 md:gap-8"
					collapsible
					defaultValue="faq-0"
					type="single"
				>
					{FAQS.map((faq, i) => (
						<AccordionItem
							className="rounded-xl border bg-background px-4 py-4 transition-all data-[state=open]:border-primary data-[state=closed]:shadow-gray-900/5 data-[state=closed]:shadow-lg data-[state=open]:shadow-primary-md md:px-9"
							itemProp="mainEntity"
							itemScope
							itemType="https://schema.org/Question"
							key={`faq-${Number(i) + 1}`}
							value={`faq-${Number(i)}`}
						>
							<AccordionTrigger
								aria-label={`Toggle question: ${faq.question}`}
								id={`question-${i}`}
							>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent
								aria-labelledby={`question-${i}`}
								id={`question-${i}-answer`}
								itemProp="acceptedAnswer"
								itemScope
								itemType="https://schema.org/Answer"
							>
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</aside>
			<Blob className="absolute top-0 left-[45%] -z-40 scale-125" />
		</section>
	);
}
