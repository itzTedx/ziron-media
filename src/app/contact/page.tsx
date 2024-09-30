import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <main className="container grid min-h-svh grid-cols-2 py-32">
      <section>
        <Badge>✦ FAQs</Badge>
        <h2 className="title-2">
          Dont be shy,
          <span className="text-secondary"> say hi!</span>
        </h2>
        <p className="mt-3 text-balance">
          Everything you need to know about our services and the costs. Can’t
          find the answer you’re looking for? Please chat to our team.
        </p>
      </section>
      <section></section>
    </main>
  );
}
