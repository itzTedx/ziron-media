"use server";

import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";

import EnquiryTemplate from "@/features/enquiry-email-template";
import { enquirySchema, zEnquirySchema } from "@/types/enquiry-schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const action = createSafeActionClient();

export const sendEnquiry = action
  .schema(enquirySchema)
  .action(async ({ parsedInput }) => {
    await sendEnquiryToEmail(parsedInput);
    return { success: parsedInput };
  });

async function sendEnquiryToEmail(values: zEnquirySchema) {
  const { name, email } = values;

  const { data, error } = await resend.emails.send({
    from: "Enquiry <enquiry@zironmedia.com>",
    replyTo: email,
    to: "info@zironmedia.com",
    subject: `Enquiry from ${name} - Ad Campaign`,
    react: EnquiryTemplate({ data: values }),
  });

  if (error) {
    console.log(error);
  }

  return data;
}
