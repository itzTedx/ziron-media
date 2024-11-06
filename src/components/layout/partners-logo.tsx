import Image from "next/image";

import { cn } from "@/lib/utils";

export const PartnerLogo = ({
  className,
  height = 50,
  width = 120,
}: {
  className?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <ul className={cn("flex items-center gap-12", className)}>
      <li>
        <Image
          src="/logos/google-partner.svg"
          width={width}
          height={height}
          alt="Google Partner"
        />
      </li>
      <li>
        <Image
          src="/logos/meta-business-partner.svg"
          width={width}
          height={height}
          alt="Meta Business Partner"
          className="dark:hidden"
        />
        <Image
          src="/logos/meta-dark.svg"
          width={width}
          height={height}
          alt="Meta Business Partner"
          className="hidden dark:block"
        />
      </li>
      <li>
        <Image
          src="/logos/tiktok-partner.svg"
          width={width}
          height={height}
          alt="Tiktok Partner"
          className="dark:hidden"
        />
        <Image
          src="/logos/tiktok-dark.svg"
          width={width}
          height={height}
          alt="Meta Business Partner"
          className="hidden dark:block"
        />
      </li>
    </ul>
  );
};
