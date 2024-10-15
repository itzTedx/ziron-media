"use server";

import { db } from "@/server";

export async function getFaqs() {
  const tags = db.query.Faqs.findMany();

  return tags;
}
