"use server";

import { db } from "@/db";

export async function getTags() {
  const tags = db.query.Tags.findMany();

  return tags;
}
