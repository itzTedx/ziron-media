import { z } from "zod";

export const ServiceSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2),
  image: z.string(),
  content: z.string(),

  excerpt: z.string().optional(),
  featuredImage: z.string().optional(),
});
