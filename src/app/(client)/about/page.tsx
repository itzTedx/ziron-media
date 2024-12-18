import { Metadata } from "next";

import { Clients } from "@/components/clients";

import AboutHero from "./_components/hero";
import OurQuality from "./_components/our-quality-section";
import Toolkit from "./_components/toolkit";

export default function AboutPage() {
  function calculateAge(birthYear: number) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  const foundedYear = 2020;
  const age = calculateAge(foundedYear);

  return (
    <main className="relative space-y-36 py-9 md:py-24">
      <AboutHero />

      <section className="container py-24">
        <h2 className="mx-auto max-w-3xl text-center">
          <strong className="font-medium">
            Our story started with our founders, {age} years ago
          </strong>
        </h2>
      </section>
      <section className="container">
        <div className="p-9">
          {/* <h3 className="mb-6 text-center">
            Building Together with these Brands
          </h3> */}
          <Clients />
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-3">
        <h2 className="md:hidden">
          Creating Long Term
          <span className="text-secondary"> Success</span>
        </h2>
        <h2 className="hidden md:block">
          Creating
          <br />
          Long Term
          <br />
          <span className="text-secondary">Success</span>
        </h2>
        <p className="text-xl md:col-span-2">
          We help all kinds of companies, big and small, from all kinds of
          sectors. The thing they have in common is that they’re ambitious and
          want to make their mark online. They like that we’re experts in our
          field, have been doing it for years, and have proven results and a
          fair few awards to show for it.
          <br />
          <br />
          Our digital specialists, strategists, creatives and number crunchers
          are good at what they do and love doing it. That’s why our clients and
          the team tend to stick around, and there’s always a great buzz about
          the place. And why we come into work each day wanting to go one
          better.
        </p>
        <div className="space-y-12 py-12 md:col-span-3 md:py-24">
          <h3 className="py-12 text-center max-md:pb-32">
            Our Marketing Toolkit
          </h3>
          <Toolkit />
        </div>
      </section>

      <OurQuality />
    </main>
  );
}

export const metadata: Metadata = {
  title: "New Generation of digital creators: Ziron Media",
  description:
    "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  openGraph: {
    type: "website",
    url: `/about`,
    title: "New Generation of digital creators: Ziron Media",
    description:
      "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Generation of digital creators: Ziron Media",
    description:
      "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  },
  alternates: { canonical: `/about` },
};
