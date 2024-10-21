import Link from "next/link";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { getBase64 } from "@/server/actions/get-blurred-img-data";
import { siteConfig } from "@/utils/site-config";

export default async function Hero() {
  const blurData = await getBase64("/images/landing-video-thumb.jpg");

  return (
    <section className="container flex flex-col overflow-hidden py-12 md:pb-32">
      <h1 className="text-center font-monaSans text-[2rem] font-bold tracking-tight text-gray-900 md:text-7xl md:leading-[5rem]">
        We’re great at{" "}
        <span className="text-primary">
          Digital <br />
          Marketing
        </span>{" "}
        Solutions
      </h1>
      <p className="mt-6 text-balance text-center text-xl">
        {siteConfig.description}
      </p>

      <Link
        href="/what-we-do"
        className="mx-auto mt-8 w-fit rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 md:mt-12"
      >
        <div className="group relative z-30 mx-auto w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
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
        blurData={blurData}
        className="mx-auto mt-12 max-w-5xl md:mt-24"
        videoSrc="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
        thumbnailSrc="/images/landing-video-thumb.jpg"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
