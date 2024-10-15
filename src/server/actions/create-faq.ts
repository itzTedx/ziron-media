"use server";

import { revalidatePath } from "next/cache";

import { createSafeActionClient } from "next-safe-action";

import { db } from "@/server";
import { Faqs } from "@/server/schema";
import { faqSchema } from "@/types/faq-schema";

const action = createSafeActionClient();

export const createFaq = action
  .schema(faqSchema)
  .action(async ({ parsedInput: { question, answer } }) => {
    try {
      await db
        .insert(Faqs)
        .values({
          question,
          answer,
        })
        .returning();

      revalidatePath("/studio/services");

      return {
        success: `New faq has been created`,
      };
    } catch (err) {
      return { error: JSON.stringify(err) };
    }
  });
