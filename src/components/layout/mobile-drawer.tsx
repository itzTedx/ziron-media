import Link from "next/link";

import { IconMenu4 } from "@tabler/icons-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import Logo from "../logo";
import { buttonVariants } from "../ui/button";
import { RevealText } from "../ui/reveal-text";

export default function MobileDrawer() {
  return (
    <Drawer setBackgroundColorOnScale={false}>
      <DrawerTrigger className="grid size-10 place-content-center rounded-md border bg-background/50 backdrop-blur-xl">
        <IconMenu4 className="" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b">
          <DrawerClose asChild>
            <Link href="/" className="mx-auto w-fit">
              <Logo />
            </Link>
          </DrawerClose>
        </DrawerHeader>
        <nav className="py-9">
          <menu className="flex w-full flex-col items-center gap-6 bg-transparent">
            {NAV_LINKS.map((link, i) => {
              return (
                <li key={i}>
                  <DrawerClose asChild>
                    <Link
                      href={link.href}
                      className={"relative flex items-center py-4 text-xl"}
                      aria-label={`Visit ${link.title} page`}
                    >
                      <RevealText>
                        {link.title.replace(/ /g, "\xa0")}
                      </RevealText>
                    </Link>
                  </DrawerClose>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "ml-3 bg-transparent text-xl"
                )}
              >
                <RevealText>{`Contact\xa0us!`}</RevealText>
              </Link>
            </li>
          </menu>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
