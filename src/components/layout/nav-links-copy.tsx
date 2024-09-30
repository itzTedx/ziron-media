import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { RevealText } from "../ui/reveal-text";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <menu className="flex items-center bg-transparent">
      {NAV_LINKS.map((link, i) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <li key={i}>
            <Link
              href={link.href}
              className={
                "relative flex items-center px-4 font-medium uppercase"
              }
              aria-label={`Visit ${link.title} page`}
            >
              <RevealText>{link.title.replace(/ /g, "\xa0")}</RevealText>
              {link.services && <span className="ml-2 text-primary">✦</span>}
              {isActive ? <Span /> : null}
            </Link>
          </li>
        );
      })}
    </menu>
  );
}

const Span = () => {
  return (
    <motion.span
      layoutId="pill-tab"
      transition={{ type: "spring", duration: 0.5 }}
      className={cn(
        "absolute -bottom-4 left-1/2 z-0 mr-1 size-2 -translate-x-1/2 rounded-full bg-primary bg-gradient-to-b"
      )}
    />
  );
};
