import Link from "next/link";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Hero() {
  return (
    <section className="container overflow-hidden py-12 text-center md:pb-32">
      <h1 className="font-monaSans text-4xl font-bold tracking-tight text-gray-900 md:text-7xl md:leading-[5rem]">
        We’re great at{" "}
        <span className="text-primary">
          Digital <br />
          Marketing
        </span>{" "}
        Solutions
      </h1>
      <p className="mt-6 text-balance text-xl">
        We specialize in brand identities, scalable websites, and expert social
        media management
      </p>

      <Link href="/what-we-do" className="w-fit rounded-full">
        <div className="group relative z-30 mx-auto mt-12 w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
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

      <HeroVideoDialog
        className="mx-auto mt-24 max-w-5xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/LDU_Txk06tM?si=I2jLBKfxTPB0i127"
        thumbnailSrc="/images/landing-video-thumb.jpg"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
