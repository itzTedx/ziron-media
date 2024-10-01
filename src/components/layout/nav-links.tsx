"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { RevealText } from "../ui/reveal-text";

export function NavLinks() {
  const services = NAV_LINKS.filter((item) => item.services);
  const otherLinks = NAV_LINKS.filter((item) => !item.services);
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        {services.map((service, i) => (
          <NavigationMenuItem key={`Services_${i}`}>
            <NavigationMenuTrigger>
              <Link href={service.href} legacyBehavior passHref>
                <NavigationMenuLink className="uppercase">
                  <RevealText>{service.title.replace(/ /g, "\xa0")}</RevealText>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent key={`ServicesNav_${i}`} className="z-50">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Ziron Media
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We specialize in brand identities, scalable websites,
                        and expert social media management
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {service.services?.map((nav, i) => (
                  <ListItem href={nav.href} title={nav.title} key={i}>
                    {nav.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {otherLinks.map((nav, i) => (
          <NavigationMenuItem key={i}>
            <Link href={nav.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "uppercase")}
              >
                <RevealText>{nav.title.replace(/ /g, "\xa0")}</RevealText>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a {...props}>
        <NavigationMenuLink
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavigationMenuLink>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
