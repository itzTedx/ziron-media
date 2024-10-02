import Link from "next/link";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

import ContactForm from "./_components/contact-form";

export const dynamic = "force-static";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="min-h-dvh">
      <div className="relative mx-auto max-w-6xl items-start gap-6 px-4 py-12 md:grid md:grid-cols-2 md:py-32">
        <section className="space-y-3">
          <Badge>✦ Get in touch</Badge>
          <h2 className="title-2">
            Dont be shy,
            <span className="text-secondary"> say hi!</span>
          </h2>
          <p className="text-balance">
            We’d love to hear from you: Drop us a line using this form or pay us
            a visit at our beautiful office in the bustling heart of Dubai.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-12">
            <div className="space-y-4">
              <Icons.mail className="text-secondary" />
              <h5 className="text-2xl font-light">Email</h5>
              <p className="text-sm font-light text-gray-600">
                Our friendly team is here to help.
              </p>
              <Link href="mailto:info@zironmedia.com">info@zironmedia.com</Link>
            </div>

            <div className="space-y-4">
              <Icons.flag className="text-secondary" />
              <h5 className="text-2xl font-light">Office</h5>
              <p className="text-sm font-light text-gray-600">
                Come visit us in Dubai.
              </p>
              <Link
                href="mailto:info@zironmedia.com"
                className="text-balance pt-3"
              >
                #317, Aura Xavier Building, Al Gubaiba Metro Exit-1, Dubai,
                United Arab Emirates{" "}
              </Link>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
    </main>
  );
}
