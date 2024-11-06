import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { zEnquirySchema } from "@/types/enquiry-schema";

const baseUrl = process.env.BASE_URL || "";

export function EnquiryTemplate({ data }: { data: zEnquirySchema }) {
  const previewText = `New Enquiry from ${data.name}`;
  return (
    <Html>
      <Head />
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logos/ziron-logo.png`}
                width="40"
                height="37"
                alt="Zironmedia"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[20px] p-0 text-center text-[24px] font-normal text-black">
              New Enquiry from {data.name} for {data.service}
            </Heading>

            <Section className="mb-[12px] mt-[12px]">
              <Text>Name: {data.name}</Text>
              <Text>
                Email: <Link href={`mailto:${data.email}`}>{data.email}</Link>
              </Text>
              <Text>
                Phone: <Link href={`tel:${data.phone}`}>{data.phone}</Link>
              </Text>
              <Text>
                Service: <strong>{data.service}</strong>
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Heading as="h3">Message:</Heading>
            <Text className="text-[12px] leading-[24px] text-black">
              {data.message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default EnquiryTemplate;
