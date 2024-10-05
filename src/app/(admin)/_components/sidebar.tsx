"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Icon,
  IconApps,
  IconDeviceDesktopSearch,
  IconHome,
  IconLoader,
  IconMessage,
  IconSettings,
  IconShoppingBag,
  IconTag,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";

import { Logo, LogoType } from "@/components/logo";
import { cn } from "@/lib/utils";

interface TagsProp {
  tag: { id: number; createdAt: Date | null; tag: string }[];
}

export const Sidebar = ({ tag }: TagsProp) => {
  const [open, setOpen] = useState<boolean | undefined>(undefined); // Set undefined initially

  // Check and set initial state based on localStorage
  useEffect(() => {
    const storedState = localStorage.getItem("sidebarOpen");
    if (storedState !== null) {
      setOpen(JSON.parse(storedState));
    } else {
      setOpen(false); // Default to open if no state in localStorage
    }
  }, []);

  // Function to toggle and update localStorage
  const handleToggle = () => {
    setOpen((prevState) => {
      const newState = !prevState;
      localStorage.setItem("sidebarOpen", JSON.stringify(newState)); // Update localStorage
      return newState;
    });
  };

  const pathname = usePathname(); // Get the current route

  // Prevent rendering until the open state is defined
  if (open === undefined)
    return (
      <nav className="sticky top-0 h-screen border-r bg-background p-2">
        <div className="mb-3 border-b pb-3">
          <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-primary/10">
            <div className="flex items-center gap-2 p-2">
              <LogoType className="size-9" />
            </div>
          </div>
        </div>
        <IconLoader className="size-5 animate-spin" />
      </nav>
    );

  return (
    <motion.nav
      layout
      className="sticky top-0 flex h-screen shrink-0 flex-col justify-between border-r bg-background"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <div className="p-2">
        <TitleSection open={open} />

        <div className="space-y-3">
          <Option
            Icon={IconHome}
            title="Dashboard"
            href="/studio"
            open={open}
            currentPath={pathname}
          />
          <Option
            Icon={IconApps}
            title="Services"
            href="/studio/services"
            open={open}
            currentPath={pathname}
          />
          <Option
            Icon={IconDeviceDesktopSearch}
            title="Case Studies"
            href="/studio/case-study"
            open={open}
            currentPath={pathname}
            notifs={4}
          />
          <Option
            Icon={IconShoppingBag}
            title="Products"
            href="/studio/products"
            open={open}
            currentPath={pathname}
          />
          <Option
            Icon={IconTag}
            title="Tags"
            href="/studio/tags"
            open={open}
            currentPath={pathname}
            notifs={tag.length}
          />
          <Option
            Icon={IconMessage}
            title="FAQs"
            href="/studio/faqs"
            open={open}
            currentPath={pathname}
          />
        </div>
      </div>
      <div className="">
        <div className="p-2">
          <Option
            Icon={IconSettings}
            title="Settings"
            href="/studio/settings"
            open={open}
            currentPath={pathname}
          />
        </div>
        <ToggleClose open={open} handleToggle={handleToggle} />
      </div>
    </motion.nav>
  );
};

const Option = ({
  Icon,
  title,
  href,
  open,
  notifs,
  currentPath,
}: {
  Icon: Icon;
  title: string;
  href: string;
  open: boolean;
  notifs?: number;
  currentPath: string;
}) => {
  const isSelected = currentPath === href; // Check if the current path matches the option's href

  return (
    <motion.button
      layout
      className={cn(
        "relative flex h-10 w-full items-center rounded-md transition-colors",
        open ? "" : "justify-center",
        isSelected
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:bg-muted/60"
      )}
    >
      <Link
        href={href}
        className={cn(
          "flex w-full items-center",
          open ? "justify-start" : "justify-center"
        )}
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg"
        >
          <Icon className="size-5" />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-sm font-medium"
          >
            {title}
          </motion.span>
        )}

        {notifs && open && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: "-50%" }}
            transition={{ delay: 0.5 }}
            className="absolute right-2 top-1/2 size-4 rounded bg-secondary/80 text-[10px] text-background"
          >
            {notifs}
          </motion.span>
        )}
      </Link>
    </motion.button>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-3 border-b pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-primary/10">
        <Link href="/" className="flex items-center gap-2 p-2">
          <LogoType className="size-8" />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Logo />
            </motion.div>
          )}
        </Link>
      </div>
    </div>
  );
};

const ToggleClose = ({
  open,
  handleToggle,
}: {
  open: boolean;
  handleToggle: () => void;
}) => {
  return (
    <motion.button
      layout
      onClick={handleToggle}
      className="w-full border-t transition-colors hover:bg-gray-100"
    >
      <div
        className={cn(
          "flex items-center p-2",
          open ? "justify-start" : "justify-center"
        )}
      >
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
