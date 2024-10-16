import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Blob } from "@/components/assets/blob";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import ContactCta from "./_components/contact-cta";

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
    href: "/case-studies/tawreeq",
    imageUrl: "/images/featured/post-7.jpg",
  },
  {
    id: 3,
    title: "SAJ Consultants",
    category: "Social Media Marketing",
    href: "/case-studies/saj-collection",
    imageUrl: "/images/featured/post-8.jpg",
  },
  {
    id: 4,
    title: "Simply KF",
    category: "Branding",
    href: "/case-studies/simply-kf",
    imageUrl: "/images/featured/post-13.jpg",
  },
  {
    id: 5,
    title: "Ziron Media",
    category: "Branding",
    href: "/case-studies/simply-kf",
    imageUrl: "/images/featured/post-2.jpg",
  },
];
export default function CaseStudiesPage() {
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 !== 0);
  return (
    <main className="relative min-h-svh overflow-hidden">
      <section className="container grid max-w-7xl py-12 md:grid-cols-2 md:py-24">
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
      <Blob className="absolute -right-[20%] top-0 opacity-50" />
      <section className="container grid max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col gap-12 md:gap-24">
            {leftColumnItems.map((item) => (
              <Link key={item.id} className="group" href={item.href}>
                <Card className="group w-full overflow-hidden">
                  <CardContent className="relative p-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-xs">{item.category}</p>
                    <h3 className="text-lg">{item.title}</h3>
                  </div>
                  <div className="hover:bg-background/800 flex shrink-0 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-lg transition-all duration-500 ease-out">
                    View Case <IconArrowUpRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-12 md:mt-24 md:gap-24">
            {rightColumnItems.map((item) => (
              <Link key={item.id} className="group" href={item.href}>
                <Card className="group w-full overflow-hidden">
                  <CardContent className="relative p-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-xs">{item.category}</p>
                    <h3 className="text-lg">{item.title}</h3>
                  </div>
                  <div className="hover:bg-background/800 flex shrink-0 items-center justify-center gap-1.5 rounded-lg border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-lg transition-all duration-500 ease-out">
                    View Case <IconArrowUpRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Your success is our success | Success Stories: Ziron media",
  description:
    "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  openGraph: {
    type: "website",
    url: `/case-studies`,
    title: "Your success is our success | Success Stories: Ziron media",
    description:
      "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your success is our success | Success Stories: Ziron media",
    description:
      "We are a digital marketing agencies creating powerful brand identities and scalable digital strategies",
  },
  alternates: { canonical: `/case-studies` },
};
