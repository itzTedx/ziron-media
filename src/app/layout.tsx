import type { Metadata } from "next";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
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
    creator: "@itzTedx_",
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
        {" "}
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
        <BreakpointIndicator />
      </body>
    </html>
  );
}
