import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Item {
  id: number;
  title: string;
  category: string;
  href: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Aura Group",
    category: "Digital Marketing",
    href: "/case-studies/aura-group",
    imageUrl: "/images/featured/post-3.jpg",
  },
  {
    id: 2,
    title: "Tawreeq Document Clearing Services",
    category: "Web Development",
    href: "/case-studies/",
    imageUrl: "/images/featured/post-7.jpg",
  },
  {
    id: 3,
    title: "Tawreeq Document Clearing Services",
    category: "Branding",
    href: "/case-studies/",
    imageUrl: "/images/featured/post-5.jpg",
  },
  {
    id: 4,
    title: "Quantum Dynamics",
    category: "Data Analytics",
    href: "/case-studies/",
    imageUrl: "/images/featured/post-6.jpg",
  },
];
export default function CaseStudiesPage() {
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 !== 0);
  return (
    <main className="min-h-svh">
      <section className="container grid max-w-7xl grid-cols-2 py-24">
        <div className="space-y-6">
          <Badge>✦ Your success is our success</Badge>
          <h2 className="font-normal">
            <span className="text-secondary">Accelerating Growth </span>
            from Startups to Industry Leaders <br />
          </h2>
          <p className="text-balance text-xl text-gray-700">
            We are a digital marketing agencies creating powerful brand
            identities and scalable digital strategies
          </p>
        </div>
      </section>
      <section className="container grid max-w-7xl">
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          <div className="flex flex-col gap-24">
            {leftColumnItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Card className="group w-full overflow-hidden">
                  <CardContent className="relative p-0">
                    <div className="absolute left-6 top-6 rounded-lg bg-background/30 px-4 py-2 text-foreground backdrop-blur-lg">
                      <div className="text-sm">{item.category}</div>
                      <div className="text-xl font-semibold">{item.title}</div>
                    </div>
                    <Link
                      href={item.href}
                      className="absolute bottom-6 right-6 flex translate-y-10 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground opacity-0 backdrop-blur-lg transition-all duration-500 ease-out hover:bg-background/80 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View Case <IconArrowUpRight />
                    </Link>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-24 md:mt-24">
            {rightColumnItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Card className="group w-full overflow-hidden">
                  <CardContent className="relative p-0">
                    <div className="absolute left-6 top-6 rounded-lg bg-background/30 px-4 py-2 text-foreground backdrop-blur-lg">
                      <div className="text-sm">{item.category}</div>
                      <div className="text-xl font-semibold">{item.title}</div>
                    </div>
                    <div className="absolute bottom-6 right-6 flex translate-y-10 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground opacity-0 backdrop-blur-lg transition-all duration-500 ease-out hover:bg-background/80 group-hover:translate-y-0 group-hover:opacity-100">
                      View Case <IconArrowUpRight />
                    </div>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-aut0 container max-w-7xl">
        <h5 className="pt-24 text-5xl leading-tight tracking-tight">
          Like what you see?
          <br />
          Why not get in touch.
        </h5>
      </section>
    </main>
  );
}
