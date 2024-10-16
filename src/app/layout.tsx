import type { Metadata } from "next";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import LenisProvider from "@/components/dev/lenis";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import { monaSans, plusJakarta } from "@/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/site-config";

import "../styles/globals.css";
import "../styles/ui.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
  },
  authors: [
    {
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.shortName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(plusJakarta.className, monaSans.variable, "antialiased")}
      >
        <div vaul-drawer-wrapper="" className="bg-gray-950">
          <LenisProvider />
          <Navbar />
          {children}
          <Toaster richColors position="bottom-center" />
          <BreakpointIndicator />
          <Footer />
        </div>
      </body>
    </html>
  );
}
