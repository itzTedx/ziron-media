import Image from "next/image";

import { Icons } from "@/components/icons";
import { PartnerLogo } from "@/components/layout/partners-logo";
import { Badge } from "@/components/ui/badge";

export const AboutUs = () => {
  return (
    <section className="container gap-6 py-9 md:grid md:grid-cols-5 md:py-20">
      <div className="relative col-span-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <button className="group/button absolute bottom-3 left-3 z-10 inline-flex size-7 items-center justify-center overflow-hidden rounded-full bg-background/30 font-medium text-white backdrop-blur-md transition-all duration-300 hover:w-40">
            <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
              AI Generated Image
            </p>
            <div className="absolute right-1.5">
              <Icons.ai className="size-4" />
            </div>
          </button>

          <Image
            src="/images/new-gen-creators.jpg"
            className="object-cover"
            fill
            alt="Three young professionals in a modern workspace discussing analytics, with digital screens and lush greenery around them."
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-between py-6 md:px-12">
        <div>
          <h3 className="font-monaSans text-[2.1rem] tracking-tighter max-md:leading-10 md:text-6xl">
            We&apos;re a{" "}
            <span className="font-valverde text-secondary">
              New Generation{" "}
            </span>
            of digital creators
          </h3>
          <p className="text-balance pt-4 text-xl text-gray-700">
            We are a digital marketing agencies creating powerful brand
            identities and scalable digital strategies
          </p>
        </div>
        <div className="space-y-8 max-md:pt-9">
          <Badge>✦ We’re partnered with</Badge>
          <PartnerLogo />
        </div>
      </div>
    </section>
  );
};
