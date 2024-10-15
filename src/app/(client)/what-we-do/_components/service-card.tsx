import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import Button from "@/components/primary-button";
import { ServiceMetadata } from "@/types";

interface ServiceCardProps {
  data: ServiceMetadata;
}

export default function ServiceCard({ data }: ServiceCardProps) {
  return (
    <div className="group grid items-center pb-12 md:grid-cols-2 md:gap-20 md:pb-32">
      <figure className="relative grid aspect-[4/3] place-content-center overflow-hidden rounded-lg bg-gray-200 md:group-even:order-2">
        <Image
          src={data.image!}
          alt={data.title!}
          fill
          className="object-cover"
        />
        <figcaption className="sr-only">{data.title}</figcaption>
      </figure>
      <div className="flex flex-col justify-between md:group-even:items-end lg:py-6">
        <Link
          href={`/what-we-do/${data.slug}`}
          title={`Explore more about ${data.title}`}
        >
          <h3>{data.title}</h3>
          <p className="mt-3 text-balance">{data.description}</p>
        </Link>
        <div className="mt-9 flex items-center gap-9 max-md:mt-6">
          <Link
            href={`/contact?message=${data.title}`}
            className="inline-flex items-center gap-2"
          >
            Let&apos;s Talk <IconArrowRight />
          </Link>
          <Button href={`/what-we-do/${data.slug}`} label="View Works" />
        </div>
      </div>
    </div>
  );
}
