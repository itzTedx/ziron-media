import Link from "next/link";

import { NAV_LINKS } from "@/constants";

import { RevealText } from "../ui/reveal-text";

export default function FooterLinks() {
  return (
    <nav className="self-end">
      <ul className="flex flex-col gap-4 text-violet-200 md:text-lg">
        <h6>Quick Links</h6>
        <li>
          <Link
            href="/"
            className={
              "relative flex items-center py-2 font-medium uppercase md:px-4"
            }
            aria-label={`Visit Home page`}
          >
            <RevealText>Home</RevealText>
          </Link>
        </li>
        {NAV_LINKS.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={
                "relative flex items-center py-2 font-medium uppercase md:px-4"
              }
              aria-label={`Visit ${link.title} page`}
            >
              <RevealText>{link.title.replace(/ /g, "\xa0")}</RevealText>
            </Link>
          </li>
        ))}{" "}
        <li>
          <Link
            href="/contact"
            className={
              "relative flex items-center py-2 font-medium uppercase md:px-4"
            }
            aria-label={`Visit Home page`}
          >
            <RevealText>Contact</RevealText>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
