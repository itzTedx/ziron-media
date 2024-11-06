import Image from "next/image";

import { Icons } from "@/components/icons";
import { PartnerLogo } from "@/components/layout/partners-logo";
import { Badge } from "@/components/ui/badge";

export const AboutUs = () => {
  return (
    <section className="container gap-6 py-9 md:grid md:grid-cols-5 md:py-20">
      <div className="relative col-span-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <div className="group absolute bottom-3 left-3 z-10 flex max-w-9 items-center rounded-full border bg-background/30 p-2 text-background backdrop-blur-md">
            <Icons.ai className="size-4" />
            {/* <span
              className="m-0 hidden px-1 text-xs font-medium group-hover:block"
              aria-hidden
            >
              AI Generated Image
            </span> */}
          </div>
          <Image
            src="/images/new-gen-creators.jpg"
            objectFit="cover"
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
