import dynamic from "next/dynamic";

import { IconCircle } from "@tabler/icons-react";

import { TextHoverEffect } from "../ui/text-hover-effect";
import FooterCopy from "./footer-copy";
import FooterHead from "./footer-head";
import FooterLinks from "./footer-links";

const SparklingGrid = dynamic(() => import("../animations/sparkling-grid"), {
  loading: () => <IconCircle className="animate-spin" />,
});

export default function Footer() {
  return (
    <footer className="relative h-full bg-gray-950">
      <SparklingGrid />
      <div className="container relative z-50 grid gap-6 px-9 py-12 md:grid-cols-2 md:py-20">
        <FooterHead />
        <div className="grid-cols-3 md:grid">
          <div></div>
          <div></div>
          <FooterLinks />
        </div>
      </div>
      <div className="flex w-full items-center justify-center max-md:px-4">
        <TextHoverEffect text="ZIRONMEDIA" />
      </div>
      <FooterCopy />
    </footer>
  );
}
