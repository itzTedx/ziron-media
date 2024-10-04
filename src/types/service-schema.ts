"use client";

import { z } from "zod";

export const ServiceSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  image: z.string(),
  why: z.string(),
  about: z.string().min(2),
  content: z.string(),
});
