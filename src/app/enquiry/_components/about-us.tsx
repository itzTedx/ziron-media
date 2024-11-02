import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const AboutUs = () => {
  return (
    <section className="container grid grid-cols-5 gap-6 py-20">
      <div className="col-span-2">
        <div className="aspect-square bg-muted" />
      </div>
      <div className="col-span-3 flex flex-col justify-between px-12 py-6">
        <div>
          <h3 className="font-monaSans text-6xl tracking-tighter">
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
        <div className="space-y-8">
          <Badge>✦ We’re partnered with</Badge>
          <ul className="flex gap-12">
            <li>
              <Image
                src="/logos/google-partner.svg"
                width={120}
                height={50}
                alt="Google Partner"
              />
            </li>
            <li>
              <Image
                src="/logos/meta-business-partner.svg"
                width={120}
                height={50}
                alt="Meta Business Partner"
              />
            </li>
            <li>
              <Image
                src="/logos/tiktok-partner.svg"
                width={120}
                height={50}
                alt="Tiktok Partner"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
