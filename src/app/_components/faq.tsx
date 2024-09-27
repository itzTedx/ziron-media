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
    <section className="container grid gap-10 py-24 md:grid-cols-2">
      <div className="flex h-fit flex-col gap-5 md:sticky md:top-28">
        <Badge>✦ How we works</Badge>
        <h2 className="title-2">
          Here’s how your <span className="text-secondary">our process</span>{" "}
          works
        </h2>
        <p>
          From initial consultation to final execution, we keep you informed
          every step of the way, ensuring your digital marketing strategy is
          developed and implemented seamlessly.
        </p>
      </div>
      <aside>
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-8"
        >
          {FAQ.map((item, i) => (
            <AccordionItem
              value={`item-${i}`}
              key={i}
              className="data-[state=closed]:shadow-muted-md rounded-xl border px-9 py-4 transition-all data-[state=open]:border-primary data-[state=open]:shadow-primary-md"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
    </section>
  );
}
