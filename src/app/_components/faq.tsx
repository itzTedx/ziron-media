import { Blob } from "@/components/assets/blob";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/constants/faq";

export default function Faq() {
  return (
    <section className="container relative grid gap-10 py-12 max-md:overflow-hidden md:grid-cols-2 md:py-24">
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
      <aside className="relative space-y-12">
        <Accordion
          type="single"
          collapsible
          className="relative flex w-full flex-col gap-6 md:gap-8"
          defaultValue="item-0"
        >
          {FAQ.map((item, i) => (
            <AccordionItem
              value={`item-${i}`}
              key={i}
              className="rounded-xl border bg-background px-4 py-4 transition-all data-[state=open]:border-primary data-[state=closed]:shadow-lg data-[state=open]:shadow-primary-md data-[state=closed]:shadow-gray-900/5 md:px-9"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <Blob className="absolute left-1/2 top-0 -z-40 scale-125" />
    </section>
  );
}
