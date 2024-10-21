import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Blob } from "@/components/assets/blob";
import Cta from "@/components/cta";
import MDXContent from "@/components/editor/mdx-content";
import {
  getServiceBySlug,
  getServices,
} from "@/server/actions/get-service-by-mdx";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  const { metadata, content } = service;

  return (
    <section className="wrapper min-h-dvh">
      <header className="container relative z-10 max-w-7xl py-12 text-center">
        <h1 className="text-5xl font-medium capitalize tracking-tight">
          {metadata.title}
        </h1>
        <p className="mt-4 text-balance">{metadata.description}</p>
        <figure className="relative mt-9 aspect-[16/7] w-full overflow-hidden rounded-xl bg-gray-100 md:mt-16">
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
      <main className="container prose relative z-10 max-w-7xl bg-transparent md:prose-lg">
        <MDXContent source={content} />
      </main>

      <Cta />
    </section>
  );
}

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const services = await getServiceBySlug(params.slug);

  if (!services) return { title: "Ser" };

  const description = `${services.metadata.description!.slice(0, 140)}...`;

  return {
    title: `${services?.metadata.title}: Ziron Media`,
    description,
    openGraph: {
      type: "website",
      images: {
        url: services.metadata.image!,
        alt: description,
      },
      url: `/what-we-do/${slug}`,
      title: services?.metadata.title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${services?.metadata.title}: Ziron Media`,
      description,
      images: {
        url: services.metadata.image!,
        alt: description,
      },
    },
    alternates: { canonical: `/what-we-do/${slug}` },
  };
}
