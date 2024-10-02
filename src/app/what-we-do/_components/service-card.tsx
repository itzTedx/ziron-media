import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import Button from "@/components/primary-button";
import { slugify } from "@/lib/utils";

export default function ServiceCard({ data }: { data: { label: string } }) {
  return (
    <div className="group grid items-center pb-12 md:grid-cols-2 md:gap-12 md:pb-24">
      <figure className="grid aspect-[4/3] place-content-center rounded-lg bg-gray-200 md:group-even:order-2">
        <div className="">Placeholder</div>
      </figure>
      <div className="flex flex-col justify-between md:group-even:items-end lg:py-6">
        <div>
          <h3>{data.label}</h3>
          <p className="mt-3 lg:text-xl">
            Strategic Social Media Campaigns: Crafting and executing tailored
            social media strategies to enhance brand visibility, engagement, and
            audience growth across platforms.
            <br />
            Content Creation and Community Engagement: Developing compelling
            content and fostering meaningful interactions to build brand loyalty
            and drive business objectives.
          </p>
        </div>
        <div className="flex items-center gap-9 max-lg:mt-9 max-md:mt-6">
          <Link
            href={`/contact?message=${data.label}`}
            className="inline-flex items-center gap-2"
          >
            Let&apos;s Talk <IconArrowRight />
          </Link>
          <Button
            href={`/what-we-do/${slugify(data.label)}`}
            label="View Works"
          />
        </div>
      </div>
    </div>
  );
}
