import Image from "next/image";

import { Blob } from "@/components/assets/blob";
import { GraphUp } from "@/components/assets/graph-up";

export default function Cta() {
  return (
    <section className="relative mx-auto max-w-6xl pb-24 pt-40">
      <div className="relative flex h-96 w-full items-center justify-between gap-12 rounded-[1.875rem] border border-secondary bg-gradient-to-bl from-gray-900 to-violet-900 shadow-primary-md">
        <div className="relative z-40 space-y-9 px-12">
          <h4 className="text-[2.375rem] font-medium text-purple-200">
            Take your marketing
            <br />
            to the next level
          </h4>

          <div className="group relative w-36 cursor-pointer overflow-hidden rounded-full border bg-background p-3 text-center font-semibold text-foreground">
            <span className="inline-block translate-y-0 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
              Get a quote
            </span>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-2 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
              <span>Get a quote</span>
            </div>
          </div>
        </div>
        <div className="absolute -left-12 size-[30rem] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50 mix-blend-overlay [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <GraphUp className="absolute right-9" />
        <Image
          src="/images/guy-holding-tab.png"
          height={522}
          width={459}
          alt=""
          className="absolute -bottom-px left-1/2 z-10 -translate-x-1/3"
        />
        <Blob className="absolute -bottom-12 left-1/2 -translate-x-1/2 -rotate-90 scale-50" />
      </div>
      <Blob className="absolute right-0 top-1/2 -z-40 -translate-y-1/2 scale-125" />
    </section>
  );
}
