import { Badge } from "@/components/ui/badge";

import ContactForm from "./_components/contact-form";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 py-12 md:grid md:grid-cols-2 md:py-32">
      <section className="space-y-3">
        <Badge>✦ FAQs</Badge>
        <h2 className="title-2">
          Dont be shy,
          <span className="text-secondary"> say hi!</span>
        </h2>
        <p className="text-balance">
          We’d love to hear from you: Drop us a line using this form or pay us a
          visit at our beautiful office in the bustling heart of Dubai.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
