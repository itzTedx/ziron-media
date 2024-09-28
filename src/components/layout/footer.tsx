import { TextHoverEffect } from "../ui/text-hover-effect";
import FooterCopy from "./footer-copy";
import FooterHead from "./footer-head";
import FooterLinks from "./footer-links";

export default function Footer() {
  return (
    <footer className="h-full rounded-t-3xl bg-gray-900">
      <div className="container grid grid-cols-2 gap-6 px-9 py-24">
        <FooterHead />
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <FooterLinks />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <TextHoverEffect text="ZIRONMEDIA" />
      </div>
      <FooterCopy />
    </footer>
  );
}
