"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Radar = ({ className }: any) => {
  const circles = new Array(8).fill(1);
  return (
    <div
      className={cn(
        "relative z-10 flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}
    >
      <div
        style={{
          transformOrigin: "right center",
        }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        {/* Radar line that rotates */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      {/* concentric circles */}
      {circles.map((circle, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid hsla(233, 30%, 80%, ${1 - (idx + 1) * 0.1})`,
          }}
          key={`motion-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

{
  /* Creating circles */
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Circle = ({ className, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.2,
      }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    ></motion.div>
  );
};
