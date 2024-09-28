import { AnimatedListDemo } from "@/components/bento/animated-list";
import Iphone15Pro from "@/components/ui/iphone-15-pro";

export default function GetStated() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 py-24 max-sm:overflow-hidden">
        <div className="rounded-2xl border border-primary bg-background/30 py-9 shadow-primary-md backdrop-blur-md max-sm:text-center md:grid md:grid-cols-12 md:bg-primary md:py-20">
          <div className="col-span-6 col-start-2 px-6">
            <h3 className="text-balance text-2xl font-bold text-gray-900 md:text-5xl md:leading-[3.25rem] md:text-violet-100">
              Guaranteed Target Audience Delivery - Your Success, Our Promise!
            </h3>
            <p className="mt-3 text-balance text-xl text-gray-800 md:mt-6 md:text-violet-200">
              We&apos;ll deliver your brand straight to your ideal customers,
              ensuring maximum impact and engagement.
            </p>
          </div>
          <div className="max-sm:hidden md:relative md:col-span-3">
            <Iphone15Pro
              className="dark absolute top-1/2 h-[30rem] -translate-y-1/2"
              src="/images/iphone-bg.jpg"
            />
            <AnimatedListDemo className="absolute top-1/2 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -z-10 w-full md:hidden">
          <Iphone15Pro
            className="dark absolute top-1/2 h-[30rem] -translate-y-1/2"
            src="/images/iphone-bg.jpg"
          />
          <AnimatedListDemo className="absolute top-1/2 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
        </div>
        {/* <Blob className="absolute right-0 top-1/2 -z-40 -translate-y-1/2 scale-125" />
        <Blob className="absolute -left-1/4 top-1/2 -z-40 -translate-y-1/2 rotate-45" /> */}
      </section>
    </>
  );
}
