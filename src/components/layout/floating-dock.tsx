"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

import {
  IconBriefcase,
  IconBuildingSkyscraper,
  IconPhone,
  IconStar,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ListCollapseIcon } from "lucide-react";

import { useOnClickOutside } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

const sectionLinks = [
  {
    title: "What we do",
    Icon: <IconStar />,
    href: "/what-we-do",
  },
  {
    title: "About us",
    Icon: <IconBuildingSkyscraper />,
    href: "/about",
  },
  {
    title: "Case Studies",
    Icon: <IconBriefcase />,
    href: "/case-studies",
  },
  {
    title: "Contact",
    Icon: <IconPhone />,
    href: "/contact",
  },
] as const;

export const FloatingDock = ({ className }: { className?: string }) => {
  return (
    <>
      {/* <FloatingDockDesktop items={items} className={desktopClassName} /> */}
      <FloatingDockMobile className={className} />
    </>
  );
};

const FloatingDockMobile = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
    setOpen(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    setOpen(false);
  }, [pathname]);

  useOnClickOutside(ref, handleClickOutside);
  const [open, setOpen] = useState(false);
  return (
    <div ref={ref} className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full z-[999999] mb-2 flex flex-col items-end gap-2"
          >
            {sectionLinks.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (sectionLinks.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  className={cn(
                    "flex w-fit items-center justify-center gap-2 rounded-full border border-neutral-400/20 bg-background px-4 py-4",
                    pathname.includes(item.href)
                      ? "bg-neutral-700 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-800"
                      : "text-neutral-500 dark:bg-neutral-900 dark:text-neutral-300"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.Icon}
                  <p className="text-nowrap font-medium tracking-tighter">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex size-16 items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-50 dark:bg-neutral-800"
      >
        <ListCollapseIcon className="size-7 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

export const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; Icon: ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto hidden h-14 items-end gap-2 rounded-full border border-neutral-500/20 bg-neutral-50 px-2 pb-2 dark:bg-neutral-900 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  Icon,
  href,
}: Readonly<{
  mouseX: MotionValue;
  title: string;
  Icon: ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (href === "/") {
      setIsActive(href === pathname);
    } else {
      setIsActive(pathname.includes(href));
    }
  }, [pathname, href]);

  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [60, 80, 60]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 300,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 300,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 300,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 300,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} title={title}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border border-neutral-400/20 backdrop-blur-2xl",
          isActive
            ? "bg-neutral-800 dark:bg-neutral-100"
            : "bg-neutral-100 dark:bg-neutral-800"
        )}
      >
        <AnimatePresence>
          {hovered && (
            // ------ Tooltip ------ //
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-neutral-500/20 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center",
            isActive
              ? "*:text-neutral-100 *:dark:text-neutral-800"
              : "*:text-neutral-800 *:dark:text-neutral-100"
          )}
        >
          {Icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
