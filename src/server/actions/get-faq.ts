"use server";

import { db } from "@/db";

export async function getFaqs() {
  const tags = db.query.Faqs.findMany();

  return tags;
}
