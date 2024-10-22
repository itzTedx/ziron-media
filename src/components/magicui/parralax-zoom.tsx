"use client";

import Link from "next/link";
import { FC, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/site-config";

import MagneticButton from "../animations/magnetic-button";
import HeroVideoDialog from "./hero-video-dialog";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  //   const pictures = {
  //     src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528",
  //     scale: scale1,
  //     classes: "relative w-[50%] h-[50%]",
  //   };

  return (
    <section
      ref={container}
      className={cn("relative h-[150vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="">
          <h1 className="text-center font-monaSans text-[2rem] font-bold tracking-tight text-gray-900 md:text-7xl md:leading-[5rem]">
            We’re great at{" "}
            <span className="text-primary">
              Digital <br />
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
        </div>
        <motion.div
          style={{ scale: scale1 }}
          className="absolute top-0 flex h-full w-full items-center justify-center"
        >
          <div className={"relative"}>
            <HeroVideoDialog
              className=""
              videoSrc="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
              thumbnailSrc="/images/landing-video-thumb.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </motion.div>
      </div>
      <div className="h-[150vh] leading-[0]"></div>
    </section>
  );
};

export default ZoomParallax;
