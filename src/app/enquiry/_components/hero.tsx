import dynamic from "next/dynamic";

import { IconPlus } from "@tabler/icons-react";

import { Blob } from "@/components/assets/blob";
import confetti from "@/components/assets/confetti.json";
import engagement from "@/components/assets/engagement.json";
import { getServices } from "@/server/actions/get-service-by-mdx";

import EnquiryForm from "./enquiry-form";

const AnimationLottie = dynamic(() => import("@/components/lottie-animation"), {
  ssr: false,
});

export const Hero = async () => {
  const services = await getServices();
  return (
    <section className="container relative gap-4 px-4 py-4 md:grid md:grid-cols-6 md:px-8 md:py-6 lg:grid-cols-12">
      <div className="col-span-3 flex flex-col justify-between py-3 md:py-12 lg:col-span-6">
        <div className="space-y-4">
          <h1 className="text-pretty font-monaSans text-4xl leading-[1.125] tracking-tight md:text-5xl">
            <span className="text-primary">Grow and boost</span> your business
            using a{" "}
            <span className="font-valverde text-secondary">
              data driven digital strategy
            </span>
          </h1>
          <p className="text-balance leading-relaxed">
            If you&apos;re looking to elevate your business with effective
            digital marketing solutions, you&apos;re in the right place. Our
            team of experts is here to help you grow, engage, and succeed in
            today&apos;s competitive online landscape.
          </p>
        </div>
        <ul className="flex flex-col gap-2 pt-4 lg:flex-row">
          <li className="flex gap-2">
            <div className="relative flex size-10 items-center justify-center rounded-full border bg-background">
              <div className="size-6">
                <AnimationLottie animationPath={confetti} />
              </div>
            </div>
            <p className="flex h-10 items-center gap-1 rounded-full border bg-background px-6 font-medium">
              <IconPlus className="size-4" />
              100 <span className="font-bold">Successful</span> projects
            </p>
          </li>
          <li className="flex gap-2">
            <div className="relative flex size-10 items-center justify-center rounded-full border bg-background">
              <div className="size-6">
                <AnimationLottie animationPath={engagement} />
              </div>
            </div>
            <p className="flex h-10 items-center gap-1 rounded-full border bg-background px-6 font-medium">
              <IconPlus className="size-4" />
              50 <span className="font-bold">Happy</span> clients
            </p>
          </li>
        </ul>
      </div>
      <div className="col-span-3 w-full max-md:pt-4 lg:col-span-5 lg:col-start-8">
        <EnquiryForm data={services} />
      </div>
      <Blob className="pointer-events-none absolute right-8 top-1/2 -z-10 -translate-y-1/4 select-none md:-translate-y-1/2" />
    </section>
  );
};
