import dynamic from "next/dynamic";
import Image from "next/image";

import { IconCircle } from "@tabler/icons-react";

import { TitlePullUp } from "@/components/animations/word-pull-up";
import { Blob } from "@/components/assets/blob";
import { BentoCard, BentoGrid } from "@/components/bento/bento-grid";
import { Badge } from "@/components/ui/badge";

const ServicesMarquee = dynamic(
  () => import("@/components/bento/services-marquee"),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);
const ImagesMarquee = dynamic(
  () => import("@/components/bento/images-marquee"),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);
const AnimatedList = dynamic(
  () =>
    import("@/components/bento/animated-list").then(
      (mod) => mod.AnimatedListDemo
    ),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);
const AnimatedBeam = dynamic(
  () =>
    import("@/components/bento/animated-beam").then(
      (mod) => mod.AnimatedBeamSocial
    ),
  {
    loading: () => <IconCircle className="animate-spin" />,
  }
);

export function Featured() {
  return (
    <section className="bg-violet-50 px-3 py-12 pt-24 max-md:overflow-hidden md:px-9 md:py-24">
      <div className="container flex flex-col items-center gap-6 max-md:px-3">
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
      </div>
    </section>
  );
}

const features = [
  {
    name: "All your Marketing needs in one place",
    description:
      "From strategy to execution, we offer a comprehensive suite of services to cover every aspect of your digital marketing, ensuring you have everything you need under one roof.",
    href: "/what-we-do",
    cta: "Check what we do",
    titleClass: "text-primary",
    className:
      "col-span-3 md:col-span-2 row-span-2 border border-primary shadow-primary-md",
    background: <ServicesMarquee />,
  },
  {
    name: "Get Connected to Your Audience – Fast",
    description:
      "Our targeted strategies are designed to quickly connect you with your ideal audience, helping you build strong relationships and drive engagement in no time.",
    href: "/contact",
    cta: "Contact us now!",
    className: "col-span-3 md:col-span-2 lg:col-span-1 row-span-2",
    background: (
      <div className="mt-28">
        <AnimatedList className="absolute right-2 top-0 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:top-4" />
      </div>
    ),
  },
  {
    name: "Data-Driven Strategies",
    description:
      "Unlock growth with tailored marketing strategies based on in-depth analytics and industry insights. We make every decision count, using data to fuel your success.",

    className: "lg:col-span-1 md:col-span-2 row-span-1",
  },
  {
    name: "Creative Content & Design",
    description: "",
    href: "/case-studies",
    cta: "Check out case studies",
    className: "col-span-3 md:col-span-2 lg:col-span-1",
    background: (
      <div className="mt-9">
        <ImagesMarquee />
      </div>
    ),
  },

  {
    name: "Tailored Campaigns for Maximum Impact",
    description:
      "Our marketing strategies are customized to fit your specific needs. Whether you're looking to increase brand awareness or drive conversions, we create a plan that delivers.",
    className: "col-span-3 md:col-span-4 lg:col-span-2 lg:row-start-3",
    href: "/what-we-do/digital-marketing",
    cta: "Learn more",
    background: (
      <Image
        src="/images/globe.jpg"
        width={272}
        height={210}
        aria-hidden={true}
        alt="all arround the world"
        className="absolute right-0 top-3 scale-110 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
      />

      // <GridGlobe />
    ),
  },
  {
    name: "Dedicated Support",
    description:
      "Our partnership doesn’t stop at campaign launch. We provide continuous support and insights, helping you adapt and thrive as your brand evolves.",
    className: "lg:col-start-1 md:col-span-2 lg:row-start-4 lg:col-span-1",
    // href: "#",
    // cta: "Learn more",
    background: "",
  },
  {
    name: "SEO & PPC Services to Increase Visibility",
    description:
      "We focus on turning visitors into customers, optimizing every touchpoint to maximize your ROI.",
    className:
      "col-span-3 row-span-1 md:col-span-2 lg:col-start-2 lg:row-start-4 lg:col-span-1",
    href: "/what-we-do/seo",
    cta: "Learn more",
    titleClass: "text-balance",
    background: "",
  },
  {
    name: "All Your Digital Marketing Needs Under One Roof",
    description:
      "From strategy to execution, we offer everything you need to elevate your digital presence and achieve your marketing goals. Our services cover all aspects of your brand's online identity, including social media, web development, and content marketing.",
    href: "/what-we-do/social-media-management",
    cta: "Explore our strategies",
    className:
      "lg:col-span-2 row-span-2 md:col-span-4 md:row-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-3 ",
    background: (
      <div className="mt-28">
        <AnimatedBeam className="absolute -top-4 border-none transition-all duration-300 ease-out md:right-2 md:top-4 md:h-[350px] md:group-hover:scale-105" />
      </div>
    ),
  },
];
