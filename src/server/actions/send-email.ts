"use server";

import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";

import { contactSchema } from "@/types/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const action = createSafeActionClient();

export const sendEmail = action
  .schema(contactSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    const { data, error } = await resend.emails.send({
      from: "Enquiry <enquiry@zironmedia.com>",
      replyTo: email,
      to: "melwinafs@gmail.com",
      subject: `Enquiry from ${name}`,
      text: message,
    });
    if (error) {
      console.log(error);
    }

    return { success: data };
  });
