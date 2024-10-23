"use client";

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name" })
    .max(50, { message: "Seriously!!!" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2, { message: "Please enter your message" }).max(560),
});

export type contactTypes = z.infer<typeof contactSchema>;
