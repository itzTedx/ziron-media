"use server";

import { db } from "@/server";

export async function getTags() {
  const tags = db.query.Tags.findMany();

  return tags;
}
