import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";

export const Cta = () => {
  return (
    <section className="container mb-12 max-w-6xl">
      <div className="container relative rounded-2xl bg-gradient-to-br from-secondary to-primary p-4 md:grid md:grid-cols-12 md:p-12">
        <div className="col-span-6 space-y-3 p-6 text-background">
          <Badge className="border-white bg-secondary text-xs font-medium text-background">
            Dont&apos;t wait!
          </Badge>
          <h5 className="font-monaSans text-4xl md:text-5xl">
            Contact us <span className="font-valverde">Now!</span>
          </h5>
          <p className="text-balance md:text-lg">
            Ready to take your marketing to the next level? Fill out the contact
            form above, and let&apos;s discuss how we can help you achieve your
            goals.
          </p>
        </div>
        <Image
          src="/images/marketing-data.svg"
          height={370}
          width={636}
          alt="Window with search engine and notifications about the business"
          className="md:absolute md:-right-20 md:top-1/2 md:-translate-y-1/2"
        />
        <Link
          href="#"
          className="absolute -right-4 -top-4 flex size-12 items-center justify-center rounded-full border bg-background/20 backdrop-blur-lg md:-right-9 md:-top-9 md:size-20"
        >
          <IconArrowUpRight className="size-9 stroke-[1.5]" />
        </Link>
      </div>
      <div className="absolute -left-12 size-[25rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50 mix-blend-overlay [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] md:size-[30rem]" />
    </section>
  );
};
