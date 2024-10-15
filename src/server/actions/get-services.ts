"use server";

import { db } from "..";

export async function getServices() {
  try {
    const service = await db.query.Services.findMany();

    if (!service) throw new Error("Service not found");

    return { service };
  } catch (error) {
    return { error: `Failed to get Service, Error: ${error}` };
  }
}
