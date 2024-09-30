import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import CtaButton from "@/components/layout/cta-button";

export default function ServiceCard({ data }: { data: { label: string } }) {
  return (
    <div className="group grid pb-12 md:grid-cols-2 md:gap-12 md:pb-24">
      <figure className="grid aspect-[4/3] place-content-center rounded-lg bg-gray-200 md:group-even:order-2">
        <div className="">Placeholder</div>
      </figure>
      <div className="flex flex-col justify-between py-6 md:group-even:items-end">
        <div>
          <h3>{data.label}</h3>
          <p className="text-xl">
            Strategic Social Media Campaigns: Crafting and executing tailored
            social media strategies to enhance brand visibility, engagement, and
            audience growth across platforms.
            <br />
            Content Creation and Community Engagement: Developing compelling
            content and fostering meaningful interactions to build brand loyalty
            and drive business objectives.
          </p>
        </div>
        <div className="flex items-center gap-9 max-md:mt-6">
          <Link href="/" className="inline-flex items-center gap-2">
            Let&apos;s Talk <IconArrowRight />
          </Link>
          <CtaButton href="/" label="View Works" />
        </div>
      </div>
    </div>
  );
}
