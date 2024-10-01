import { Blob } from "@/components/assets/blob";
import { Badge } from "@/components/ui/badge";
import { services } from "@/constants/services";

import Hero from "./_components/radar";
import ServiceCard from "./_components/service-card";

export const dynamic = "force-static";

export default function Services() {
  return (
    <main className="relative py-12">
      <Hero />
      <Blob className="absolute left-1/2 top-0 -z-50 -translate-x-1/2 max-md:w-full" />
      <section className="container py-12 md:py-32">
        <Badge variant="secondary">✦ What we are great at</Badge>
        <h2 className="title-2 mb-12">
          Here’s{" "}
          <span className="text-secondary">
            what we <br /> specialize in
          </span>
        </h2>

        {services.map((service) => (
          <ServiceCard data={service} key={service.label} />
        ))}
      </section>
    </main>
  );
}
