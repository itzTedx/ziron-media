"use server";

import { revalidatePath } from "next/cache";

import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { createSafeActionClient } from "next-safe-action";

import { slugify } from "@/lib/utils";
import { db } from "@/server";
import { Services } from "@/server/schema";
import { ServiceSchema } from "@/types/service-schema";

const action = createSafeActionClient();

// Create a DOMPurify instance with JSDOM for server-side use
const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const createService = action.schema(ServiceSchema).action(
  async ({
    parsedInput: {
      title,
      description,
      image,

      content,
    },
  }) => {
    const sanitizedContent = purify.sanitize(content);
    try {
      const newService = await db
        .insert(Services)
        .values({
          title,
          description,
          image,
          // featuredImage,
          content: JSON.stringify(sanitizedContent),
          // excerpt,
          slug: slugify(title),
        })
        .returning();

      revalidatePath("/studio/services");

      return {
        success: `${newService[0].title} has been created`,
      };
    } catch (err) {
      return { error: JSON.stringify(err) };
    }
  }
);
