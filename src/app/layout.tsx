import { Metadata } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import LenisProvider from "@/components/dev/lenis";
import { FloatingDock } from "@/components/layout/floating-dock";
import FloatingWhatsapp from "@/components/layout/floating-whatsapp";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import { monaSans, plusJakarta, valverde } from "@/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/site-config";

import "../styles/globals.css";
import "../styles/ui.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Ziron Media" />
        <meta
          name="google-site-verification"
          content="ApzGDgxzf02cJKRvF91NImSEkYYlfYjD60c7JH6ky_I"
        />
      </head>
      <body
        className={cn(
          plusJakarta.className,
          monaSans.variable,
          valverde.variable,
          "antialiased"
        )}
      >
        <LenisProvider />
        <Navbar />
        {children}
        <Footer />

        <FloatingActions />
        <BreakpointIndicator />
        <Toaster richColors theme="light" />

        <GoogleAnalytics gaId="G-80W1TG3C5V" />
      </body>
    </html>
  );
}

function FloatingActions() {
  return (
    <>
      <div
        className={cn(
          "fixed z-[99999999999] inline-flex items-center justify-center gap-2 p-2",
          "bottom-4 right-4",
          "md:bottom-4 md:left-1/2 md:right-auto md:-translate-x-1/2",
          "scale-90 transform-gpu transition duration-150 hover:scale-100"
        )}
      >
        <FloatingWhatsapp className="md:hidden" />
        <FloatingDock />
      </div>
      <FloatingWhatsapp className="hidden md:block" />
    </>
  );
}
