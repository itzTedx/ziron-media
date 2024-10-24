import Image from "next/image";

import { Blob } from "@/components/assets/blob";

export default function AboutHero() {
  return (
    <section className="container relative overflow-x-clip py-20 text-center">
      <h1 className="mx-auto max-w-3xl text-balance font-monaSans text-6xl leading-tight tracking-tight text-gray-900">
        We&apos;re a <span className="text-secondary"> New Generation</span> of
        digital creators
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-balance text-xl">
        We are a digital marketing agencies creating powerful brand identities
        and scalable digital strategies
      </p>
      <Image
        src="/images/about-hero.png"
        height={400}
        width={1064}
        quality={100}
        alt=""
        className="mx-auto"
      />
      <Blob className="absolute left-0 top-[10rem] rotate-45" />
    </section>
  );
}
