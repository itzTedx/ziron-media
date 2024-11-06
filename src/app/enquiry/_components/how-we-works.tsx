import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const HowWeWorks = () => {
  return (
    <section className="container pb-40">
      <Badge>✦ This is how we works</Badge>
      <h3 className="py-3 text-4xl md:text-5xl">
        Your Dedicated Digital Partner
      </h3>
      <p>Here&apos;s how we tailor our approach to ensure your success.</p>
      <div className="grid grid-cols-1 gap-6 pt-9 md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-xl bg-gray-950 text-gray-50">
          <div className="p-6 md:p-12">
            <h4 className="text-2xl font-bold">Data-Driven Approach</h4>
            <p className="text-balance pt-3 text-xl">
              We use in-depth analytics to inform our strategies and maximize
              your ROI.
            </p>
          </div>
          <Image
            src="/images/data-illustration.svg"
            height={206}
            width={350}
            alt="Small Business growth is in digital marketing agencies hands"
            className="mx-auto py-4 max-md:px-4 md:py-12"
          />
        </div>
        <div className="flex flex-col justify-between rounded-xl bg-violet-300">
          <div className="p-6 md:p-12">
            <h4 className="text-2xl font-bold">Tailored Solutions</h4>
            <p className="text-balance pt-3 text-xl">
              Every business is unique, and we customize our services to fit
              your specific needs.
            </p>
          </div>
          <Image
            src="/images/puzzle-hands.svg"
            height={206}
            width={300}
            alt="Problem Solving in ease"
            className="w-full pt-6"
          />
        </div>
        <div className="flex flex-col justify-between rounded-xl bg-gray-50">
          <div className="p-6 md:p-12">
            <h4 className="text-2xl font-bold">Ongoing Support</h4>
            <p className="text-balance pt-3 text-xl">
              Our commitment to your success extends beyond initial campaigns,
              providing continuous insights and adjustments.
            </p>
          </div>
          <Image
            src="/images/group.svg"
            height={206}
            width={300}
            alt="Ready to serve customer services"
            className="mx-auto py-6"
          />
        </div>
      </div>
    </section>
  );
};
