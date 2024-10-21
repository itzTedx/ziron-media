import type { MetadataRoute } from "next";

import { siteConfig } from "@/utils/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4938ff",
    icons: [
      {
        src: siteConfig.logo,
        sizes: "192x192",
        type: "image/svg+xml",
      },
    ],
  };
}
