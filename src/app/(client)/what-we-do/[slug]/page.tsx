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
      <header className="container relative z-10 max-w-7xl py-12 text-center">
        <h1 className="text-5xl font-medium capitalize tracking-tight">
          {metadata.title}
        </h1>
        <p className="mt-4 text-balance">{metadata.description}</p>
        <figure className="relative mt-9 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 md:mt-16">
          {/* <div className="absolute bottom-0 z-10 h-96 w-full bg-gradient-to-t from-background/50 to-transparent" /> */}
          <Image
            src={metadata.image!}
            fill
            alt={metadata.title!}
            className="rounded-xl object-cover object-top"
          />
        </figure>
        <Blob className="absolute right-1/2 top-0 -z-10 opacity-50" />
      </header>
      <main className="container prose relative z-10 max-w-7xl md:prose-lg">
        <MDXContent source={content} />
      </main>

      <Cta />
    </main>
  );
}
