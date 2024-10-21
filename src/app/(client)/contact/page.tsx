import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

import ContactForm from "./_components/contact-form";

export const dynamic = "force-static";

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
              <h5 className="text-2xl font-light">Email</h5>
              <p className="text-sm font-light text-gray-600">
                Our friendly team is here to help.
              </p>
              <Link
                href="mailto:info&#64;zironmedia&#46;com"
                className="select-none"
              >
                info&#64;zironmedia&#46;com
              </Link>
            </div>

            <div className="space-y-4">
              <Icons.flag className="text-secondary" />
              <h5 className="text-2xl font-light">Office</h5>
              <p className="text-sm font-light text-gray-600">
                Come visit us in Dubai.
              </p>
              <Link
                href="https://maps.app.goo.gl/paExi9WpQtHtEfkB6"
                target="_blank"
                className="text-balance pt-3"
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
  title: "We'd love to help you grow: Ziron media",
  description:
    "We’d love to hear from you: Drop us a line using this form or pay us a visit at our beautiful office in the bustling heart of Dubai.",
  openGraph: {
    type: "website",
    url: `/contact`,
    title: "We'd love to help you grow: Ziron media",
    description:
      "We’d love to hear from you: Drop us a line using this form or pay us a visit at our beautiful office in the bustling heart of Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "We'd love to help you grow: Ziron media",
    description:
      "We’d love to hear from you: Drop us a line using this form or pay us a visit at our beautiful office in the bustling heart of Dubai.",
  },
  alternates: { canonical: `/contact` },
};
