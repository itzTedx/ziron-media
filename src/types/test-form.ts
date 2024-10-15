import { z } from "zod";

export const testSchema = z.object({
  username: z.string().min(2).max(50),
});
