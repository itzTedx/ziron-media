import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="container text-center">
      <h1 className="font-monaSans mt-32 text-3xl font-bold tracking-tight text-primary md:text-7xl md:leading-[4rem]">
        We’re great at Digital <br />
        Marketing Solutions
      </h1>
      <p className="mt-6 text-balance text-lg">
        We specialize in brand identities, scalable websites, and expert social
        media management
      </p>

      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "mt-12 h-12 font-bold uppercase text-primary"
        )}
      >
        Let&apos;s get started <IconArrowRight className="ml-2 size-5" />
      </Link>

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
