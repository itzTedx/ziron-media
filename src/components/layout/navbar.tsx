"use client";

import Link from "next/link";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import Logo from "../logo";
import ContactButton from "./contact-button";
import MobileDrawer from "./mobile-drawer";
import NavLinks from "./nav-links";

export default function Navbar() {
  const isScrolled = useScroll(100);

  return (
    <>
      <header className="container sticky top-3 z-30 mx-auto max-sm:px-5 max-sm:pt-2">
        <nav
          className={cn(
            "shadow-glow hidden w-full items-center justify-between rounded-full border-background px-5 py-3 transition-all duration-500 ease-in-out md:flex",
            isScrolled
              ? "border bg-[#FAF9FB]/50 backdrop-blur-md"
              : "bg-transparent backdrop-blur-0"
          )}
          style={{
            transitionProperty: "background-color, backdrop-filter, margin-top",
          }}
        >
          <Link href="/">
            <Logo />
          </Link>
          <NavLinks />
          <ContactButton />
          <div
            className={cn(
              "absolute bottom-0 z-40 flex w-full justify-center transition-opacity duration-500 ease-in-out",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute mx-auto h-1 w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-lg" />
          </div>
        </nav>

        <MobileDrawer />

        <span
          className={cn(
            "absolute -top-3 -z-50 h-[150%] w-full bg-gradient-to-b from-background/80 to-transparent transition-opacity duration-500 ease-in-out max-sm:left-0 lg:inset-x-14",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        />
      </header>
    </>
  );
}
