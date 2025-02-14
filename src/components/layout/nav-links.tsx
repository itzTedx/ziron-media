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

import { RevealText } from "../animations/reveal-text";
import { LogoType } from "../logo";

export function NavLinks() {
  const services = NAV_LINKS.filter((item) => item.services);
  const otherLinks = NAV_LINKS.filter((item) => !item.services);
  return (
    <NavigationMenu className="z-50 hidden md:flex">
      <NavigationMenuList>
        {services.map((service, i) => (
          <NavigationMenuItem key={`Services_${i}`}>
            <NavigationMenuTrigger>
              <Link href={`${service.href}`} passHref className="uppercase">
                <NavigationMenuLink asChild>
                  <RevealText>{service.title.replace(/ /g, "\xa0")}</RevealText>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuTrigger>

            <NavigationMenuContent key={`ServicesNav_${i}`} className="z-50">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[750px] lg:grid-cols-[.75fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-secondary p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <LogoType className="brightness-[5] saturate-0" />
                      <div className="mb-2 mt-4 text-lg font-medium text-background">
                        Ziron Media
                      </div>
                      <p className="text-sm font-light leading-tight text-muted">
                        We specialize in brand identities, scalable websites,
                        and expert social media management
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {service.services?.map((nav, i) => (
                  <ListItem href={`${nav.href}`} title={nav.title} key={i}>
                    {nav.description}
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
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li title={String(children)}>
      <Link href={href!} passHref {...props}>
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
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
