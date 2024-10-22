import Script from "next/script";

import { Organization, WithContext } from "schema-dts";

import Cta from "@/components/cta";
import { siteConfig } from "@/utils/site-config";

import Faq from "./_components/faq";
import { Featured } from "./_components/featured";
import Feedback from "./_components/feedback";
import GetStated from "./_components/get-started";
import Hero from "./_components/hero";
import HowWeWorks from "./_components/how-we-works";
import { Works } from "./_components/works";

export const dynamic = "force-static";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.shortName,
  image: `${process.env.BASE_URL}${siteConfig.ogImage}`,
  logo: `${process.env.BASE_URL}${siteConfig.logo}`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact,
    contactType: "Customer services",
    areaServed: "Worldwide",
    availableLanguage: "English, Arabic, Hindi, Malayalam, Tamil",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Metro Exit 1 Burdubai - 303, Aura Xavier Building",
    addressLocality: "Al Gubaiba",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    // siteConfig.links.twitter,
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],

  description: siteConfig.description,
};

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      {/* <ZoomParallax /> */}
      <Featured />
      <HowWeWorks />

      <Works />

      <GetStated />

      <Feedback />
      <Faq />
      <Cta />
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
