"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/constants";

import { RevealText } from "../animations/reveal-text";

export default function FooterLinks() {
  const pathName = usePathname();

  const homeActive = pathName === "/";
  const contactActive = pathName === "/contact";

  const TRENDING_SERVICES = [
    {
      title: "Branding",
      href: "/what-we-do/branding",
    },
    {
      title: "Digital Marketing",
      href: "/what-we-do/digital-marketing",
    },
    {
      title: "Search Engine Optimization",
      href: "/what-we-do/seo",
    },
    {
      title: "Social Media Management",
      href: "/what-we-do/social-media-management",
    },
    {
      title: "Content Creation",
      href: "/what-we-do/content-creation",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 max-md:col-span-2">
      <nav className="text-violet-200 md:text-lg">
        <h6 className="mb-2 text-gray-300">Quick Links</h6>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="/"
              className={"relative flex items-center gap-3 py-2 font-medium"}
              aria-label={`Visit Home page`}
            >
              {homeActive && "✦"}
              <RevealText> Home</RevealText>
            </Link>
          </li>
          {NAV_LINKS.map((link, i) => {
            const active = pathName.startsWith(link.href);
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className={
                    "relative flex items-center gap-3 py-2 font-medium"
                  }
                  aria-label={`Visit ${link.title} page`}
                >
                  {active && "✦"}
                  <RevealText>{link.title.replace(/ /g, "\xa0")}</RevealText>
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className={"relative flex items-center gap-3 py-2 font-medium"}
              aria-label={`Visit Home page`}
            >
              {contactActive && "✦"}
              <RevealText>Contact</RevealText>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="text-violet-200 md:text-lg">
        <h6 className="mb-2 text-gray-300">Most Trending Services</h6>
        <ul className="flex flex-col gap-3">
          {TRENDING_SERVICES.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={"relative flex items-center gap-3 py-2 font-medium"}
                aria-label={`Visit ${link.title} page`}
              >
                <RevealText>{link.title.replace(/ /g, "\xa0")}</RevealText>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
