"use client";

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2).max(50),
});
