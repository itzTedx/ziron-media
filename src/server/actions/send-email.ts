"use server";

import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";

import { contactSchema, type contactTypes } from "@/types/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const action = createSafeActionClient();

export const sendEmail = action
  .schema(contactSchema)
  .action(async ({ parsedInput }) => {
    await sendEnquiryToEmail(parsedInput);
    return { success: parsedInput };
  });

async function sendEnquiryToEmail(values: contactTypes) {
  const { name, email, message } = values;

  const { data, error } = await resend.emails.send({
    from: "Enquiry <enquiry@zironmedia.com>",
    replyTo: email,
    to: "shahana@zironmedia.com",
    subject: `Enquiry from ${name}`,
    text: message,
  });

  if (error) {
    console.log(error);
  }

  return data;
}
