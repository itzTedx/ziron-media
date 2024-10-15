import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Service, ServiceMetadata } from "@/types";

const root = path.join(process.cwd(), "src", "content", "services");

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const filePath = path.join(root, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);

    return { metadata: { ...data, slug }, content };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

export async function getServices(
  isFeaturedOnly?: boolean,
  limit?: number
): Promise<ServiceMetadata[]> {
  const files = fs.readdirSync(root);

  let services = files.map((file) => getServiceMetadata(file));

  // Conditionally filter by isFeatured if the flag is set to true
  if (isFeaturedOnly) {
    services = services.filter((service) => service.isFeatured);
  }

  // Sort by id in ascending order
  services.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  if (limit) {
    return services.slice(0, limit);
  }

  return services;
}

export function getServiceMetadata(filepath: string): ServiceMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(root, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
