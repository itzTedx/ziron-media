"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

export const TypeWriter = ({
  examples,
  onExampleClick,
}: {
  examples: string[];
  onExampleClick: (example: string) => void;
}) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="line-clamp-1 w-full cursor-pointer text-xs">
      <strong className="text-gray-600"> ✦ Ask about: </strong>
      {examples[exampleIndex].split("").map((l, i) => {
        return (
          <motion.span
            key={`${exampleIndex}-${i}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            className="relative text-gray-700"
            onClick={() => onExampleClick(examples[exampleIndex])}
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                times: [0, 0.1, 1],
                delay: i * LETTER_DELAY,
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-px right-0 top-[3px] bg-gray-950"
            />
          </motion.span>
        );
      })}
    </span>
  );
};
