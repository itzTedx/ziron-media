"use client";

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 items-center justify-center rounded-full border bg-white p-1.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.5)] md:size-12 md:p-3",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamSocial({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-lg border p-10 md:h-[500px]",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-6">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="max-md:size-8">
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-12 border-primary md:size-20">
            <Icons.ziron />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-1 md:gap-4">
          <Circle ref={div1Ref} className="max-md:size-8">
            <Icons.instagram />
          </Circle>
          <Circle ref={div2Ref} className="max-md:size-8">
            <Icons.facebook />
          </Circle>
          <Circle ref={div3Ref} className="max-md:size-8">
            <Icons.linkedin />
          </Circle>
          <Circle ref={div4Ref} className="max-md:size-8">
            <Icons.whatsapp />
          </Circle>

          <Circle ref={div5Ref} className="max-md:size-8">
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={1.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={2.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={1.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={2.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={4}
      />
    </div>
  );
}
