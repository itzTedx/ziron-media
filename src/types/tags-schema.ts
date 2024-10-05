import { z } from "zod";

export const tagSchema = z.object({
  tag: z.string().min(2).max(50),
});
