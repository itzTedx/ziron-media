import Image from "next/image";

import { TitlePullUp } from "@/components/animations/word-pull-up";
import { Blob } from "@/components/assets/blob";
import { AnimatedBeamSocial } from "@/components/bento/animated-beam";
import { AnimatedListDemo } from "@/components/bento/animated-list";
import { BentoCard, BentoGrid } from "@/components/bento/bento-grid";
import ImagesMarquee from "@/components/bento/images-marquee";
import ServicesMarquee from "@/components/bento/services-marquee";
import { Badge } from "@/components/ui/badge";

export function Featured() {
  return (
    <section className="container flex flex-col items-center gap-6 px-3 py-12 pt-24 max-sm:overflow-hidden md:px-9 md:py-24">
      <Badge variant={"secondary"}>✦ What we are great at</Badge>
      <TitlePullUp />
      {/* <h2 className="mb-12 text-center font-medium">
        We design, build and elevate <br />
        your <span className="text-secondary">online presence</span>
      </h2> */}
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
        <Blob className="pointer-events-none absolute top-0 -z-10 scale-150 select-none" />
      </BentoGrid>
    </section>
  );
}

const features = [
  {
    name: "All your Marketing needs in one place",
    description:
      "From strategy to execution, we offer a comprehensive suite of services to cover every aspect of your digital marketing, ensuring you have everything you need under one roof.",
    href: "#",
    cta: "Learn more",
    titleClass: "text-primary",
    className:
      "col-span-3 lg:col-span-2 row-span-2 border border-primary shadow-primary-md",
    background: <ServicesMarquee />,
  },
  {
    name: "Get Connected to Your Audience – Fast",
    description:
      "Our targeted strategies are designed to quickly connect you with your ideal audience, helping you build strong relationships and drive engagement in no time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 row-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    name: "Data-Driven Strategies",
    description:
      "Unlock growth with tailored marketing strategies based on in-depth analytics and industry insights. We make every decision count, using data to fuel your success.",
    href: "#",
    cta: "Learn more",
    className: "lg:col-span-1 row-span-1",
    background: <div></div>,
  },
  {
    name: "Creative Content & Design",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <ImagesMarquee />,
  },

  {
    name: "Customized Campaigns",
    description:
      "We tailor every campaign to your specific needs and goals, ensuring your marketing efforts resonate with your audience and deliver the best possible results.",
    className: "col-span-3 lg:col-span-2 lg:row-start-3",
    href: "#",
    cta: "Learn more",
    background: (
      <Image
        src="/images/globe.jpg"
        width={272}
        height={210}
        alt=""
        className="absolute right-0 top-3 scale-110 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
      />

      // <GridGlobe />
    ),
  },
  {
    name: "Dedicated Support",
    description:
      "Our partnership doesn’t stop at campaign launch. We provide continuous support and insights, helping you adapt and thrive as your brand evolves.",
    className: "lg:col-start-1 lg:row-start-4 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: "",
  },
  {
    name: "Conversion Optimization",
    description:
      "We focus on turning visitors into customers, optimizing every touchpoint to maximize your ROI.",
    className:
      "col-span-3 row-span-1 lg:col-start-2 lg:row-start-4 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    titleClass: "text-balance",
    background: "",
  },
  {
    name: "We Handle All Your Digital Appearance",
    description:
      "From website design to social media presence, we manage your brand’s entire online identity, ensuring it looks professional, cohesive, and impactful across all platforms.",
    href: "#",
    cta: "Learn more",
    className:
      "lg:col-span-2 row-span-1 md:row-span-2 lg:col-start-3 lg:row-start-3",
    background: (
      <AnimatedBeamSocial className="absolute -top-8 right-2 border-none transition-all duration-300 ease-out group-hover:scale-105 md:top-4 md:h-[350px]" />
    ),
  },
];
