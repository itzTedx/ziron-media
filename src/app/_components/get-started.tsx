import { AnimatedListDemo } from "@/components/bento/animated-list";
import Iphone15Pro from "@/components/ui/iphone-15-pro";

export default function GetStated() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-12 rounded-2xl bg-primary py-20">
        <div className="col-span-6 col-start-2">
          <h3 className="text-balance text-5xl font-bold leading-[3.25rem] text-violet-200">
            Guaranteed Target Audience Delivery - Your Success, Our Promise!
          </h3>
          <p className="mt-6 text-balance text-xl text-violet-200">
            We&apos;ll deliver your brand straight to your ideal customers,
            ensuring maximum impact and engagement.
          </p>
        </div>
        <div className="relative col-span-3">
          <Iphone15Pro
            className="dark absolute top-1/2 h-[30rem] -translate-y-1/2"
            src="/images/iphone-bg.jpg"
          />
          <AnimatedListDemo className="absolute top-1/2 h-[400px] w-full -translate-y-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
