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
        href: "/digital-marketing",
      },
      {
        title: "Branding",
        href: "/branding",
        description:
          "Unforgettable identities that resonate and inspire loyalty.",
      },
      {
        title: "SEO",
        href: "/seo",
        description:
          "Optimizing content to climb search rankings and connect with the right audience organically",
      },
      {
        title: "Social Media Management",
        href: "/social-media-management",
        description:
          "Build vibrant online communities that amplify brand presence and foster meaningful connections.",
      },
      {
        title: "Website Development",
        href: "/website-development",
        description:
          "Dynamic digital experiences, blending design and functionality to engage users and drive business success.",
      },
      {
        title: "Content Creation",
        href: "/content-creation",
        description:
          "Compelling stories and valuable insights, captivating audiences and fueling brand engagement across platforms.",
      },
    ],
  },

  { title: "Case Study", href: "/case-studies" },
];
