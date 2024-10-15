"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/server";
import { Tags } from "@/server/schema";

export async function createTag(formData: FormData) {
  const tag = formData.get("tag") as string;

  await db.insert(Tags).values({
    tag,
  });

  revalidatePath("/studio/tags");
}
