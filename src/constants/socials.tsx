import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { siteConfig } from "@/utils/site-config";

export const SOCIALS = [
  {
    label: "instagram",
    href: "https://www.instagram.com/ziron_media/",
    icon: IconBrandInstagram,
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/zironmedia",
    icon: IconBrandFacebook,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/company/ziron-media",
    icon: IconBrandLinkedin,
  },
  {
    label: "whatsapp",
    href: `https://wa.me/${siteConfig.contact.replace(/\s/g, "").replace(/\+/g, "")}`,
    icon: IconBrandWhatsapp,
  },
];
