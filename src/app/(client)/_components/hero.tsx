import dynamic from "next/dynamic";
import Link from "next/link";

import { IconCircle } from "@tabler/icons-react";

import MagneticButton from "@/components/animations/magnetic-button";
import { getBase64 } from "@/server/actions/get-blurred-img-data";
import { siteConfig } from "@/utils/site-config";

const HeroVideoDialog = dynamic(
  () => import("@/components/magicui/hero-video-dialog"),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);

export default async function Hero() {
  const blurData = await getBase64("/images/landing-video-thumb.jpg");

  return (
    <section className="container relative flex flex-col overflow-hidden pb-12 md:pb-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <h1 className="pt-24 text-center font-monaSans text-[2.5rem] font-bold tracking-tight text-gray-900 md:pt-32 md:text-7xl md:leading-[5rem]">
        We’re great at{" "}
        <span className="text-primary">
          Digital <br className="hidden md:block" />
          Marketing
        </span>{" "}
        Solutions
      </h1>
      <p className="mb-8 mt-6 text-balance text-center text-xl md:mb-12">
        {siteConfig.description}
      </p>
      <MagneticButton className="mx-auto flex w-fit">
        <Link
          href="/what-we-do"
          className="rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        >
          <div className="group relative z-30 mx-auto w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
            <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 focus-within:-translate-y-12 focus-within:opacity-0 group-hover:-translate-y-12 group-hover:opacity-0">
              <span>✦ </span>
              <span>Let&apos;s get started </span>
            </span>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
              <span>✦ </span>
              <span>Let&apos;s get started </span>
            </div>
          </div>
        </Link>
      </MagneticButton>

      <HeroVideoDialog
        blurData={blurData}
        className="mx-auto mt-12 max-w-5xl md:mt-24"
        videoSrc="/video/Landing-intro.webm"
        videoPlaceholder="/video/Landing-intro-low.webm"
        subtitle="/video/subtitle.vtt"
        thumbnailSrc="/images/landing-intro-thumb.webp"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
