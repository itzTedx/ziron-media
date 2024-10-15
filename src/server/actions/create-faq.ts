"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/server";
import { Faqs } from "@/server/schema";

export async function createFaq(formData: FormData) {
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;

  await db.insert(Faqs).values({
    question,
    answer,
  });

  revalidatePath("/studio/faqs");
}
