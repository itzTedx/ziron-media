"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

interface SparklingGridProps {
  gridSize?: number;
  sparkleFrequency?: number;
  sparkleColor?: {
    light: string;
    dark: string;
  };
  dotColor?: {
    light: string;
    dark: string;
  };
  theme?: "light" | "dark";
}

export default function SparklingGrid({
  gridSize = 40,
  sparkleFrequency = 0.03,
  sparkleColor = { light: "violet", dark: "silver" },
  dotColor = { light: "bg-secondary/30", dark: "bg-white/20" },
  theme = "dark",
}: SparklingGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = Math.ceil(container.offsetHeight / gridSize);
    const cols = Math.ceil(container.offsetWidth / gridSize);
    const dots: HTMLDivElement[] = []; // Store created dots for cleanup

    const createDot = (row: number, col: number) => {
      const dot = document.createElement("div");
      dot.className = `absolute w-0.5 h-0.5 rounded-full ${
        theme === "dark" ? dotColor.dark : dotColor.light
      } transition-all duration-1500`;
      dot.style.left = `${col * gridSize}px`;
      dot.style.top = `${row * gridSize}px`;
      dot.style.opacity = "0";
      dot.style.transform = "scale(0) rotate(0deg)";
      container.appendChild(dot);
      dots.push(dot); // Store the dot for cleanup

      const centerRow = rows / 2;
      const centerCol = cols / 2;
      const dx = col - centerCol;
      const dy = row - centerRow;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(
        centerRow * centerRow + centerCol * centerCol
      );
      const delay = (distance / maxDistance) * 2000;

      setTimeout(() => {
        dot.style.opacity = "1";
        dot.style.transform = "scale(1.2) rotate(360deg)";
      }, delay);

      setTimeout(() => {
        dot.style.transform = "scale(1) rotate(360deg)";
      }, delay + 500);

      const sparkle = () => {
        if (Math.random() < sparkleFrequency) {
          dot.style.backgroundColor =
            theme === "dark" ? sparkleColor.dark : sparkleColor.light;
          dot.style.boxShadow = `0 0 5px ${theme === "dark" ? "white" : "black"}`;
          setTimeout(() => {
            dot.style.backgroundColor = "";
            dot.style.boxShadow = "";
          }, 300);
        }
        setTimeout(sparkle, 1000 + Math.random() * 4000);
      };
      setTimeout(sparkle, delay + 1000);
    };

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        createDot(row, col);
      }
    }

    return () => {
      // Cleanup created dots
      dots.forEach((dot) => container.removeChild(dot));
    };
  }, [theme, gridSize, sparkleFrequency, sparkleColor, dotColor]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 top-0 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
}
