import Link from "next/link";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="text-center">
      <h1 className="mt-20 text-6xl font-bold leading-[4rem] tracking-tight text-primary">
        We’re great at Digital <br />
        Marketing Solutions
      </h1>
      <p className="mt-3">
        We specialize in brand identities, scalable websites, and expert social
        media management
      </p>

      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-12 font-bold text-primary"
        )}
      >
        Let&apos;s get started!
      </Link>

      <HeroVideoDialog
        className="mx-auto mt-16 max-w-5xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
