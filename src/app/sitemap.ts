import type { MetadataRoute } from "next";

import { getServices } from "@/server/actions/get-service-by-mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASE_URL || "";

  const services = await getServices();

  const servicesEntries: MetadataRoute.Sitemap = services.map(({ slug }) => ({
    url: `${baseURL}/what-we-do/${slug}`,
    priority: 0.9,
  }));

  return [
    {
      url: baseURL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseURL}/what-we-do`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/about`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/case-studies`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...servicesEntries,
  ];
}
