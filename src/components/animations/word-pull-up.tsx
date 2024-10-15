"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

export function TitlePullUp() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const title = "We design, build and elevate your online presence";

  const words = title.split(" ");

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="show"
      className="mb-12 max-w-2xl text-balance text-center font-medium"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "10px" }}
          className={clsx(
            word === "online" || word === "presence" ? "text-secondary" : ""
          )} // Apply secondary color to "online" and "presence"
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
