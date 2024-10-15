"use server";

import { revalidatePath } from "next/cache";

import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { createSafeActionClient } from "next-safe-action";

import { slugify } from "@/lib/utils";
import { ServiceSchema } from "@/types/service-schema";

import { db } from "..";
import { test } from "../schema";

// Create a DOMPurify instance with JSDOM for server-side use
const window = new JSDOM("").window;
const purify = DOMPurify(window);

const action = createSafeActionClient();

export const createTest = action
  .schema(ServiceSchema)
  .action(async ({ parsedInput: { title, description, content, image } }) => {
    const sanitizedContent = purify.sanitize(content);

    try {
      const newCategory = await db
        .insert(test)
        .values({
          title,
          description,
          content: JSON.stringify(sanitizedContent),
          image,

          slug: slugify(title),
        })
        .returning();

      revalidatePath("/studio");

      return {
        success: `Test: (${newCategory[0].title}) has been created`,
      };
    } catch (err) {
      return { error: JSON.stringify(err) };
    }
  });
