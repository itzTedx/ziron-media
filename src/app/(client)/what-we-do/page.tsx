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
