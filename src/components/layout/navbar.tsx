"use client";

import Link from "next/link";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import { Logo } from "../logo";
import Button from "../primary-button";
import { NavLinks } from "./nav-links";

export default function Navbar() {
  const isScrolled = useScroll(100);

  return (
    <section className="h-fit w-full bg-background">
      {/* Desktop navigation */}
      <header className="container fixed left-1/2 top-3 z-[999] -translate-x-1/2 max-sm:px-5 max-sm:pt-2">
        <nav
          className={cn(
            "hidden w-full items-center justify-between rounded-full border border-background bg-[#FAF9FB] px-6 py-3 shadow-glow transition-all duration-500 ease-in-out max-lg:text-sm md:flex",
            isScrolled
              ? "bg-[#FAF9FB]/50 backdrop-blur-md"
              : "bg-[#FAF9FB] backdrop-blur-0"
          )}
          style={{
            transitionProperty: "background-color, backdrop-filter, margin-top",
          }}
        >
          <Link
            href="/"
            className="rounded-full px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            title="Back to Homepage"
          >
            <Logo />
          </Link>
          <NavLinks />
          <Button
            label="Contact"
            href="/contact"
            className="font-medium uppercase"
          />
          <div
            className={cn(
              "absolute bottom-0 z-10 flex w-full justify-center transition-opacity duration-500 ease-in-out",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute mx-auto h-1 w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-lg" />
          </div>
        </nav>
      </header>
    </section>
  );
}
