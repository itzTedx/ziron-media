"use server";

import { db } from "@/db";
import { Tags } from "@/db/schema";
import { revalidatePath } from 'next/cache';

export async function createTag(formData: FormData) {
  const tag = formData.get("tag") as string;

  await db.insert(Tags).values({
    tag,
  });

  revalidatePath('/studio/tags')
}
