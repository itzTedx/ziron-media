"use server";

import { db } from "..";

export async function getServices() {
  try {
    const services = await db.query.Services.findMany();

    if (!services) throw new Error("Service not found");

    return { services };
  } catch (error) {
    return { error: `Failed to get Service, Error: ${error}` };
  }
}
