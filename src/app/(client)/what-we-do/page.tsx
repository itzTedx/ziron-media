import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Blob } from "@/components/assets/blob";
import { Badge } from "@/components/ui/badge";
import { getServices } from "@/server/actions/get-service-by-mdx";

import Hero from "./_components/radar";
import ServiceCard from "./_components/service-card";

export const dynamic = "force-static";

export default async function Services() {
  const services = await getServices();

  if (!services) notFound();
  return (
    <main className="relative py-12">
      <Hero />
      <Blob className="absolute -top-28 left-1/2 -z-50 -translate-x-1/2 max-md:w-full" />
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-32">
        <Badge variant="secondary">✦ What we are great at</Badge>
        <h2 className="title-2 mb-12">
          Here’s{" "}
          <span className="text-secondary">
            what we <br /> specialize in
          </span>
        </h2>

        {services.map((service, i) => (
          <ServiceCard data={service} key={i} />
        ))}
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Digital Specialized Services in Dubai: Ziron Media",
  description:
    "We design, build and elevate your online presence, We Specialized in digital marketing, branding, growth hacking",
  openGraph: {
    type: "website",
    url: `/what-we-do`,
    images: ["/images/elevate-brand.jpg"],
    title: "Digital Specialized Services in Dubai: Ziron Media",
    description:
      "We design, build and elevate your online presence, We Specialized in digital marketing, branding, growth hacking",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/elevate-brand.jpg"],
    title: "Digital Specialized Services in Dubai: Ziron Media",
    description:
      "We design, build and elevate your online presence, We Specialized in digital marketing, branding, growth hacking",
  },
  alternates: { canonical: `/what-we-do` },
};
