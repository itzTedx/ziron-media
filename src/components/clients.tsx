import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import MagneticButton from "./animations/magnetic-button";
import { Card } from "./ui/card";

export const Clients = () => {
  return (
    <section className="container max-w-6xl py-20">
      <Card className="flex flex-col justify-between gap-5 overflow-hidden bg-background p-0 md:flex-row">
        <div className="p-4 md:p-12">
          <h3 className="leading-[1]">
            Building success together with these brands
          </h3>
          <p className="text-pretty py-4">
            Crafting each brand&apos;s vision with creativity and innovation.
          </p>
          <MagneticButton className="flex w-fit">
            <Link
              href="/what-we-do"
              className="rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
              <div className="group relative z-30 w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
                <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 focus-within:-translate-y-12 focus-within:opacity-0 group-hover:-translate-y-12 group-hover:opacity-0">
                  <span>✦ </span>
                  <span>Explore our Success Stories </span>
                </span>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
                  <span>✦ </span>
                  <span>Explore our Success Stories </span>
                </div>
              </div>
            </Link>
          </MagneticButton>
        </div>
        <div className="relative z-10 grid max-w-7xl flex-shrink-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand, i) => (
            <Feature key={brand.title} {...brand} i={i} />
          ))}
        </div>
      </Card>
    </section>
  );
};

const brands = [
  {
    logo: "/logos/aura.svg",
    title: "Aura Group",
  },
  {
    logo: "/logos/bumbyy.png",
    title: "Bumbby",
  },
  {
    logo: "/logos/famous-daves.png",
    title: "Famous Daves",
  },
  {
    logo: "/logos/kf.png",
    title: "Simply kf",
  },
  {
    logo: "/logos/phenom.png",
    title: "Phenom",
  },
  {
    logo: "/logos/mine-hive.png",
    title: "Mine Hive",
  },
  {
    logo: "/logos/saj-legal.png",
    title: "Saj Legals",
  },
];

const Feature = ({
  title,
  logo,
  i,
}: {
  title: string;
  logo: string;
  i: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col items-center justify-center py-4 lg:border-r",
        (i === 0 || i === 4) && "lg:border-l",
        i < 4 && "lg:border-b"
      )}
    >
      {i < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {i >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="absolute left-0 top-1/2 h-6 w-1 origin-center -translate-y-1/2 rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:bg-primary" />
      <div className="relative z-10 px-5 mix-blend-multiply">
        <Image
          src={logo}
          height={100}
          width={90}
          alt={`${title}'s logo`}
          className="h-16 object-contain"
        />
      </div>
      {/* <div className="relative z-10 mb-2 px-5 text-center text-sm font-semibold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:bg-primary" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:scale-105">
          {title}
        </span>
      </div> */}
    </div>
  );
};
