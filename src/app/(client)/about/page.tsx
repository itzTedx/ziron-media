import { Blob } from "@/components/assets/blob";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import AboutHero from "./_components/hero";
import OurQuality from "./_components/our-quality-section";
import Toolkit from "./_components/toolkit";

export default function AboutPage() {
  return (
    <main className="relative space-y-36 overflow-hidden py-9 md:py-24">
      <AboutHero />
      <Blob className="absolute -right-[25%] -top-[18rem] rotate-45" />
      <section className="container py-24">
        <h2 className="mx-auto max-w-3xl text-center">
          <strong className="font-medium">
            Our story started with our founders, 20 years ago
          </strong>
        </h2>
      </section>
      <section className="container">
        <div className="rounded-xl bg-gray-950 p-9">
          <h3 className="mb-6 text-center text-background">
            Building Together with these Brands
          </h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl grid-cols-3 px-4">
        <h2>
          Creating
          <br />
          Long Term
          <br />
          <span className="text-secondary">Success</span>
        </h2>
        <p className="col-span-2 text-xl">
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
        <div className="col-span-3 space-y-12 py-12 md:py-24">
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

const testimonials = [
  {
    src: "/logos/aura.svg",
    title: "Aura Group",
  },
  {
    src: "/logos/bumbyy.png",
    title: "Bumbby",
  },
  {
    src: "/logos/famous-daves.png",
    title: "Famous Daves",
  },
  {
    src: "/logos/kf.png",
    title: "simply kf",
  },
  {
    src: "/logos/phenom.png",
    title: "Phenom",
  },
  {
    src: "/logos/mine-hive.png",
    title: "Mine Hive",
  },
  {
    src: "/logos/saj-legal.png",
    title: "Saj Legals",
  },
];
