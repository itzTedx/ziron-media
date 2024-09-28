import Link from "next/link";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Hero() {
  return (
    <section className="container text-center">
      <h1 className="font-monaSans mt-32 text-3xl font-bold tracking-tight text-primary md:text-7xl md:leading-[5rem]">
        We’re great at Digital <br />
        Marketing Solutions
      </h1>
      <p className="mt-6 text-balance text-xl">
        We specialize in brand identities, scalable websites, and expert social
        media management
      </p>

      {/* <div className="group relative mx-auto mt-12 w-56 cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          Let&apos;s get started
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>Let&apos;s get started </span>
          <IconArrowRight className="size-5" />
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2">✦</div>
        <div className="absolute left-4 top-[43%] size-2 scale-[1] rounded-lg bg-primary opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary group-hover:opacity-100"></div>
      </div> */}
      <Link href="/contact">
        <div className="group relative mx-auto mt-12 w-56 cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
          <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
            <span>✦ </span>
            <span>Let&apos;s get started </span>
          </span>
          <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
            <span>✦ </span>
            <span>Let&apos;s get started </span>
          </div>
        </div>
      </Link>
      {/* <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "mt-12 h-12 text-lg font-bold uppercase text-primary"
        )}
      >
        Let&apos;s get started <IconArrowRight className="ml-2 size-5" />
      </Link> */}

      <HeroVideoDialog
        className="mx-auto mt-24 max-w-5xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/LDU_Txk06tM?si=I2jLBKfxTPB0i127"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
