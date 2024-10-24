import dynamic from "next/dynamic";

import Iphone15Pro from "@/components/ui/iphone-15-pro";

const AnimatedList = dynamic(() =>
  import("@/components/bento/animated-list").then((mod) => mod.AnimatedListDemo)
);
export default function GetStated() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 py-32 max-lg:overflow-hidden lg:py-40">
        <div className="rounded-2xl border border-primary bg-primary/80 py-9 shadow-primary-md backdrop-blur-md max-sm:text-center md:grid md:grid-cols-12 md:bg-primary md:py-20">
          <div className="col-span-6 col-start-2 px-6">
            <h3 className="text-balance text-3xl font-bold leading-8 text-primary text-violet-100 lg:text-5xl lg:leading-[3.25rem]">
              Guaranteed Target Audience Delivery - Your Success, Our Promise!
            </h3>
            <p className="mt-3 text-balance text-violet-200 md:mt-6 md:text-xl">
              We&apos;ll deliver your brand straight to your ideal customers,
              ensuring maximum impact and engagement.
            </p>
          </div>
          <div className="max-md:hidden md:relative md:col-span-3">
            <Iphone15Pro
              className="dark absolute top-1/2 h-[30rem] -translate-y-1/2"
              src="/images/iphone-bg.webp"
            />
            <AnimatedList className="absolute top-1/2 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 w-full -translate-y-14 scale-90 md:hidden">
          <Iphone15Pro
            className="dark absolute top-1/2 h-[30rem] -translate-y-1/2"
            src="/images/iphone-bg.webp"
          />
          <AnimatedList className="absolute top-1/2 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
        </div>
        {/* <Blob className="absolute right-0 top-1/2 -z-40 -translate-y-1/2 scale-125" />
        <Blob className="absolute -left-1/4 top-1/2 -z-40 -translate-y-1/2 rotate-45" /> */}
      </section>
    </>
  );
}
