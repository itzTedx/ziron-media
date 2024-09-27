import Link from "next/link";
import { ReactNode } from "react";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-rows-4 gap-3 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  titleClass,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  titleClass?: string;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border bg-white",
      "shadow-lg shadow-gray-900/5",

      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className={cn("text-xl font-semibold", titleClass)}>{name}</h3>
      <p className="max-w-lg">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        variant="ghost"
        asChild
        size={"sm"}
        className="pointer-events-auto text-base text-gray-500"
      >
        <Link href={href}>
          {cta}
          <IconArrowUpRight className="ml-2 size-6" />
        </Link>
      </Button>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
