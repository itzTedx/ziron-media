import Image from "next/image";
import { notFound } from "next/navigation";

import { Blob } from "@/components/assets/blob";
import Cta from "@/components/cta";
import MDXContent from "@/components/editor/mdx-content";
import { getServiceBySlug } from "@/server/actions/get-service-by-mdx";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  const { metadata, content } = service;

  return (
    <main className="min-h-dvh">
      <header className="container relative z-10 max-w-6xl py-12 text-center">
        <h1 className="text-5xl font-medium capitalize tracking-tight">
          {metadata.title}
        </h1>
        <p className="mt-4 text-balance md:text-xl">{metadata.description}</p>
        <figure className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={metadata.image!}
            fill
            alt={metadata.title!}
            className="object-cover"
          />
        </figure>
        <Blob className="absolute right-1/2 top-0 -z-10 opacity-50" />
      </header>
      <main className="container prose relative z-10 max-w-6xl">
        <MDXContent source={content} />
      </main>

      {/* <section className="mx-auto grid max-w-6xl grid-cols-2 px-4 py-12">
        <h2 className="max-w-sm text-balance font-normal">
          Why <span className="capitalize text-secondary">{title} ?</span>
        </h2>
        <p className="text-balance text-xl">
          Your digital marketing needs to be guided by an overarching strategy -
          without one, how do you know if your current activity is working?
          <br />
          <br />
          We at Loom pride ourselves on our ability to tailor and enact
          long-term strategies that achieve your goals. We get under the skin of
          your industry and target audiences to ensure you maximise your
          marketing budget and make the most of the channels best suited to you.
        </p>
      </section>
      <section className="my-24 bg-violet-50 py-24">
        <h2 className="mx-auto mb-6 max-w-xl text-center font-bold capitalize leading-tight">
          Our {title} Service
        </h2>
        <p className="mx-auto max-w-3xl text-balance px-4 text-center text-xl">
          In a world where numerous platforms and technologies are available,
          planning a strategy can feel overwhelming. What makes sense for your
          business? What to do and when? How do you achieve your goals?
          <br />
          <br />
          That&apos;s where our digital strategy services come in. We use our
          expertise to understand your current position and ambitions, and how
          we can help you get there. We provide holistic strategies and
          consultancy to help you make the most of your digital marketing
          budgets. All of our work across your digital marketing channels is
          guided by a strategy, pulling together to overcome the challenges you
          face and achieve your business goals.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-5xl font-normal">
          How we achieve <br />
          your goals
        </h3>
        <ul className="my-12 space-y-24">
          <li className="grid grid-cols-2">
            <h4 className="text-2xl font-medium">Immersion</h4>
            <p>
              It all begins with immersion in your business, understanding the
              challenges you face, where you&apos;re going and why. It&apos;s at
              this stage that we get to diagnose and understand the challenges
              you face and capture your long term goals. It&apos;s also
              important that we capture the lie of the land in terms of your
              internal business - the stakeholders, digital ambassadors, the
              budgets, any knowledge gaps and blockers to progress.
            </p>
          </li>
          <li className="grid grid-cols-2">
            <h4 className="text-2xl font-medium">Immersion</h4>
            <p>
              It all begins with immersion in your business, understanding the
              challenges you face, where you&apos;re going and why. It&apos;s at
              this stage that we get to diagnose and understand the challenges
              you face and capture your long term goals. It&apos;s also
              important that we capture the lie of the land in terms of your
              internal business - the stakeholders, digital ambassadors, the
              budgets, any knowledge gaps and blockers to progress.
            </p>
          </li>
          <li className="grid grid-cols-2">
            <h4 className="text-2xl font-medium">Immersion</h4>
            <p>
              It all begins with immersion in your business, understanding the
              challenges you face, where you&apos;re going and why. It&apos;s at
              this stage that we get to diagnose and understand the challenges
              you face and capture your long term goals. It&apos;s also
              important that we capture the lie of the land in terms of your
              internal business - the stakeholders, digital ambassadors, the
              budgets, any knowledge gaps and blockers to progress.
            </p>
          </li>
          <li className="grid grid-cols-2">
            <h4 className="text-2xl font-medium">Immersion</h4>
            <p>
              It all begins with immersion in your business, understanding the
              challenges you face, where you&apos;re going and why. It&apos;s at
              this stage that we get to diagnose and understand the challenges
              you face and capture your long term goals. It&apos;s also
              important that we capture the lie of the land in terms of your
              internal business - the stakeholders, digital ambassadors, the
              budgets, any knowledge gaps and blockers to progress.
            </p>
          </li>
        </ul>
      </section> */}
      <Cta />
    </main>
  );
}
