import Link from "next/link";

import { SOCIALS } from "@/constants/socials";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

export default function Socials() {
  return (
    <ul className="mt-6 flex gap-3 text-violet-300">
      {SOCIALS.map((social) => (
        <li key={social.label}>
          <Link
            href={social.href}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-11 p-0 hover:bg-primary/30"
            )}
          >
            {<social.icon />}
          </Link>
        </li>
      ))}
    </ul>
  );
}
