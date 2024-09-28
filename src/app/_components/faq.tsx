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
    <section className="overflow-hidden py-24">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="flex h-fit flex-col gap-5 md:sticky md:top-28">
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
        <aside>
          <Accordion
            type="single"
            collapsible
            className="relative flex w-full flex-col gap-8"
            defaultValue="item-0"
          >
            {FAQ.map((item, i) => (
              <AccordionItem
                value={`item-${i}`}
                key={i}
                className="rounded-xl border bg-background px-9 py-4 transition-all data-[state=open]:border-primary data-[state=closed]:shadow-lg data-[state=open]:shadow-primary-md data-[state=closed]:shadow-gray-900/5"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
            <Blob className="absolute left-1/2 top-0 -z-40 scale-125" />
          </Accordion>
        </aside>
      </div>
    </section>
  );
}
