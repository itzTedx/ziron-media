import { TextHoverEffect } from "../ui/text-hover-effect";
import FooterCopy from "./footer-copy";
import FooterHead from "./footer-head";
import FooterLinks from "./footer-links";

export default function Footer() {
  return (
    <footer className="h-full bg-gray-950">
      <div className="container grid gap-6 px-9 py-12 md:grid-cols-2 md:py-24">
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
