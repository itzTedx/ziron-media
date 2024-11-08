import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { zContactSchema } from "@/types/contact-schema";

const baseUrl = process.env.BASE_URL || "";

export default function ContactTemplate({ data }: { data: zContactSchema }) {
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
        fontWeight={500}
        fontStyle="normal"
      />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[565px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logos/ziron-logo.png`}
                width="34"
                height="40"
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
            <Text className="text-[16px] leading-[24px] text-black">
              {data.message}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Section>
              <Row>
                <Column colSpan={4}>
                  <Img
                    src={`${baseUrl}/logos/ziron-logo.png`}
                    width="34"
                    height="40"
                    alt="Ziron Media's logo"
                  />
                  <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
                    Ziron Media
                  </Text>
                </Column>
                <Column align="left" className="table-cell align-bottom">
                  <Row className="table-cell h-[44px] w-[56px] align-bottom">
                    <Column className="pr-[8px]">
                      <Link href="https://facebook.com/zironmedia/">
                        <Img
                          alt="Facebook"
                          height="36"
                          src="https://react.email/static/facebook-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                    <Column className="pr-[8px]">
                      <Link href="#">
                        <Img
                          alt="X"
                          height="36"
                          src="https://react.email/static/x-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.instagram.com/ziron_media/">
                        <Img
                          alt="Instagram"
                          height="36"
                          src="https://react.email/static/instagram-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                  </Row>
                  <Row>
                    <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-500">
                      #317, Aura Xavier Building, Al Gubaiba Metro Exit-1,
                      Dubai, United Arab Emirates
                    </Text>
                    <Text className="mb-[0px] mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
                      info@zironmedia.com
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
