"use client";

import { useRef } from "react";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

interface TechStackProps {
  left: string[];
  right?: string[];
}

interface SlideProps {
  items: string[];
  scrollDirection: "left" | "right";
  left: string;
  progress: MotionValue<number>;
}

interface PhraseProps {
  item: string[];
}

export default function Services({ left }: TechStackProps) {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div
      className="absolute -right-3 flex w-fit gap-2 lg:-right-2 lg:gap-3"
      ref={container}
    >
      <div className="flex-co flex gap-2 lg:gap-3">
        <Slide
          items={left}
          scrollDirection={"left"}
          left={"-20%"}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
}

const Slide = ({ items, scrollDirection, left, progress }: SlideProps) => {
  const direction = scrollDirection == "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: left }}
      className="relative flex flex-col gap-2 whitespace-nowrap"
    >
      <Phrase item={items} />
      <Phrase item={items} />
      <Phrase item={items} />
    </motion.div>
  );
};

const Phrase = ({ item }: PhraseProps) => {
  return item.map((item) => (
    <span
      className="rounded-lg bg-muted px-4 py-2 text-center text-xs opacity-50 lg:text-sm lg:opacity-100"
      key={item}
    >
      {item}
    </span>
  ));
};
