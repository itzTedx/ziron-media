import { Clients } from "@/components/clients";

import { Works } from "../(client)/_components/works";
import { AboutUs } from "./_components/about-us";
import { Cta } from "./_components/cta";
import { Hero } from "./_components/hero";
import { HowWeWorks } from "./_components/how-we-works";
import { Services } from "./_components/services";

export default function EnquiryPage() {
  return (
    <main>
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Works />
      <HowWeWorks />
      <Cta />
    </main>
  );
}