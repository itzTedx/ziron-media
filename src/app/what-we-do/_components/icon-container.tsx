"use client";

import { IconFile3d } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const IconContainer = ({
  icon,
  text,
  delay,
}: {
  icon?: React.ReactNode;
  text: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={cn(
        "relative z-50 flex flex-col items-center justify-center space-y-2"
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/60 text-muted-foreground/60 shadow-inner md:size-12">
        {icon || <IconFile3d className="size-8" />}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs text-gray-300">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
