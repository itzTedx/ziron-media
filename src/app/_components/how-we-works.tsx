import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HOW_WE_WORKS } from "@/constants/how-we-works";

export default function HowWeWorks() {
  return (
    <section className="grid gap-10 py-24 md:grid-cols-2">
      <div className="flex h-fit flex-col gap-5 md:sticky md:top-28">
        <Badge>✦ How we works</Badge>
        <h2 className="title-2">
          Here’s how your <span className="text-secondary">our process</span>{" "}
          works
        </h2>
        <p>
          From initial consultation to final execution, we keep you informed
          every step of the way, ensuring your digital marketing strategy is
          developed and implemented seamlessly.
        </p>
        <div className="relative aspect-video">
          <Image
            src="/images/marketing.jpg"
            fill
            alt=""
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <aside className="space-y-12">
        {HOW_WE_WORKS.map((step) => (
          <Card className="bg-gray-50" key={step.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="relative size-20">
                <Image
                  src={`/icons/${step.icon}.svg`}
                  fill
                  alt=""
                  className="object-contain"
                />
              </div>
              <div>#{step.id}</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <CardTitle className="text-balance text-3xl font-medium leading-10">
                {step.title}
              </CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </aside>
    </section>
  );
}
