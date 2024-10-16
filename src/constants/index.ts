import { NavItems } from "@/types/nav-links";

export const NAV_LINKS: NavItems[] = [
  { title: "About", href: "/about" },
  {
    title: "What we do",
    href: "/what-we-do",
    services: [
      {
        title: "Digital Marketing",
        description:
          "Turning online interactions into powerful business growth.",
        href: "/what-we-do/digital-marketing",
      },
      {
        title: "Branding",
        href: "/what-we-do/branding",
        description:
          "Unforgettable identities that resonate and inspire loyalty.",
      },
      {
        title: "SEO",
        href: "/what-we-do/seo",
        description:
          "Optimizing content to climb search rankings and connect with the right audience organically",
      },
      {
        title: "Social Media Management",
        href: "/what-we-do/social-media-management",
        description:
          "Build vibrant online communities that amplify brand presence and foster meaningful connections.",
      },
      {
        title: "Website Development",
        href: "/what-we-do/website-development",
        description:
          "Dynamic digital experiences, blending design and functionality to engage users and drive business success.",
      },
      {
        title: "Explore All →",
        href: "/what-we-do",
        description:
          "Growth Hacking, CRM, Lead generations, Performance Marketing, Videography, Photography",
      },
    ],
  },

  { title: "Case Study", href: "/case-studies" },
];
