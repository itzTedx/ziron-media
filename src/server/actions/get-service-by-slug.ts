"use server";

import { eq } from "drizzle-orm";

import { db } from "..";
import { Services } from "../schema";

export async function getServiceBySlug(slug: string) {
  try {
    const service = await db.query.Services.findFirst({
      where: eq(Services.slug, slug),
    });

    if (!service) throw new Error("service not found");

    return { service };
  } catch (error) {
    return { error: `Failed to get company details${error}` };
  }
}
