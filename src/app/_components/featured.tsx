import Image from "next/image";

import { Blob } from "@/components/assets/blob";
import { AnimatedBeamSocial } from "@/components/bento/animated-beam";
import { AnimatedListDemo } from "@/components/bento/animated-list";
import { BentoCard, BentoGrid } from "@/components/bento/bento-grid";
import Marquee from "@/components/bento/marquee";
import { Badge } from "@/components/ui/badge";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

export function Featured() {
  return (
    <section className="container flex flex-col items-center gap-6 px-3 py-24 md:px-9">
      <Badge variant={"secondary"}>✦ What we are great at</Badge>
      <h2 className="mb-12 text-center font-medium">
        We design, build and elevate <br />
        your <span className="text-secondary">online presence</span>
      </h2>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
        <Blob className="absolute top-0 -z-40 scale-150" />
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
    background: (
      <div className="mt-9">
        {/* <Services left={services.flatMap((item) => item.label)} /> */}
        <div className="absolute z-10 h-full w-full bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
          {services.slice(0, 5).map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative cursor-pointer rounded-xl border px-4 py-2",
                "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <figcaption className="font-medium">{f.label}</figcaption>
              </div>
            </figure>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25000ms]">
          {services.slice(6, 10).map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative cursor-pointer rounded-xl border px-4 py-2",
                "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="font-medium">{f.label}</figcaption>
                </div>
              </div>
            </figure>
          ))}
        </Marquee>
        <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
          {services.slice(11, 15).map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative cursor-pointer rounded-xl border px-4 py-2",
                "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <figcaption className="font-medium">{f.label}</figcaption>
              </div>
            </figure>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25000ms]">
          {services.slice(16, 20).map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative cursor-pointer rounded-xl border px-4 py-2",
                "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <figcaption className="font-medium">{f.label}</figcaption>
              </div>
            </figure>
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    name: "Get Connected to Your Audience – Fast",
    description:
      "Our targeted strategies are designed to quickly connect you with your ideal audience, helping you build strong relationships and drive engagement in no time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 lg:row-span-2",
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
    className: "col-span-3 lg:col-span-1",
    background: <div></div>,
  },
  {
    name: "Creative Content & Design",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div></div>,
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
    className: "col-span-3 lg:col-start-2 lg:row-start-4 lg:col-span-1",
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
    className: "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3",
    background: (
      <AnimatedBeamSocial className="absolute right-2 top-4 h-[350px] border-none transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
];
