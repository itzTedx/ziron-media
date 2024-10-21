"use client";

import { useEffect } from "react";

import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1,
      lerp: 0.05,
      prevent(node) {
        return node.hasAttribute("data-scroll-locked");
      },
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup to prevent memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // No need to render anything
}
