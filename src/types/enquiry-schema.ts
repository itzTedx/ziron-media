import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name" })
    .max(150, { message: "There is no way your name this long" }),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string({ message: "Please select any of our services" }),
  message: z.string().min(2, { message: "Write something.." }).max(1260),
});

export type zEnquirySchema = z.infer<typeof enquirySchema>;
