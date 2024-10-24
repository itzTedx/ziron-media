import Image from "next/image";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBase64 } from "@/server/actions/get-blurred-img-data";

export default async function HowWeWorks() {
  const blurData = await getBase64("/images/marketing.jpg");
  return (
    <section
      className="container grid gap-10 py-12 md:grid-cols-2 md:py-24"
      id="how-we-works"
    >
      <div className="top-28 flex h-fit flex-col gap-5 md:sticky">
        <Badge>✦ How we works</Badge>
        <h2 className="title-2">
          Here’s how your <span className="text-secondary">our process</span>{" "}
          works
        </h2>
        <p className="text-balance">
          From initial consultation to final execution, we keep you informed
          every step of the way, ensuring your digital marketing strategy is
          developed and implemented seamlessly.
        </p>
        <div className="relative aspect-video">
          <Image
            src="/images/marketing.jpg"
            fill
            placeholder="blur"
            blurDataURL={blurData}
            alt=""
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <aside className="space-y-12 md:px-12">
        {HOW_WE_WORKS.map(({ id, icon, title, description }) => (
          <Card className="relative overflow-clip bg-gray-50" key={id}>
            <CardHeader className="flex flex-row items-center justify-between p-6 md:p-8">
              <div className="relative size-16 md:size-20">{icon}</div>
              <span className="absolute right-3 top-0 font-monaSans text-7xl font-semibold italic text-violet-100">
                #{id}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-4 pt-0 md:gap-6 md:p-6 md:pt-0">
              <CardTitle className="text-balance text-xl font-medium md:leading-10 lg:text-3xl">
                {title}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </aside>
    </section>
  );
}

const HOW_WE_WORKS = [
  {
    id: 1,
    title: `Understanding your Business`,
    description:
      "We begin by discussing your goals and identifying your target audience, defining key customer profiles and your position in the market.",
    icon: <Icons.briefcase className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 2,
    title: `Refining your Brand`,
    description:
      "Next, we either create or refine your brand identity, aligning it with your business vision and ensuring it resonates with your audience.",
    icon: <Icons.paintbrush className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 3,
    title: `Crafting a Customized Marketing Strategy`,
    description:
      "We develop a tailored digital marketing plan, including SEO, PPC, content creation, and branding to drive growth and meet your specific objectives.",
    icon: <Icons.blueprint className="size-16 text-violet-500 md:size-24" />,
  },
  {
    id: 4,
    title: `Executing & Optimizing Campaigns`,
    description:
      "Finally, we launch your campaigns, continuously monitoring and optimizing them for improved performance, higher lead generation, and maximum ROI.",
    icon: <Icons.chart className="size-16 text-violet-500 md:size-24" />,
  },
];
