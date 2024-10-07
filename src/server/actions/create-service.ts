"use server";

import { revalidatePath } from "next/cache";

import { createSafeActionClient } from "next-safe-action";

import { db } from "@/db";
import { Images, Services } from "@/db/schema";
import { slugify } from "@/lib/utils";
import { ServiceSchema } from "@/types/service-schema";

const action = createSafeActionClient();

export const createService = action
  .schema(ServiceSchema)
  .action(
    async ({
      parsedInput: {
        title,
        description,
        why,
        about,
        content,
        excerpt,
        image: newImgs,
      },
    }) => {
      try {
        const newProduct = await db
          .insert(Services)
          .values({
            title,
            description,
            status: "published",
            why,
            about,
            content,
            excerpt,
            slug: slugify(title),
          })
          .returning();

        await db.insert(Images).values(
          newImgs.map(
            (img: { name: string; size: string; url: string }, idx: any) => ({
              name: img.name,
              size: img.size,
              url: img.url,
              productId: newProduct[0].id,
              order: idx,
            })
          )
        );

        revalidatePath("/studio/services");

        return {
          success: `Service: (${newProduct[0].title}) has been created`,
        };
      } catch (err) {
        return { error: JSON.stringify(err) };
      }
    }
  );
