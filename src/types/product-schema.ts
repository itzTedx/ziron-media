import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2),
  image: z.array(
    z.object(
      {
        url: z.string().refine((url) => url.search("blob:") !== 0, {
          message: "Please wait for the image to upload",
        }),
        size: z.number(),
        key: z.string().optional(),
        id: z.number().optional(),
        name: z.string({ message: "Please upload image" }),
      },
      { message: "Image is required" }
    )
  ),
  why: z.string(),
  about: z.string().min(2),
  content: z.string(),
  excerpt: z.string().optional(),
  featuredImage: z.array(
    z.object(
      {
        url: z.string().refine((url) => url.search("blob:") !== 0, {
          message: "Please wait for the image to upload",
        }),
        size: z.number(),
        key: z.string().optional(),
        id: z.number().optional(),
        name: z.string({ message: "Please upload image" }),
      },
      { message: "Image is required" }
    )
  ),
});
