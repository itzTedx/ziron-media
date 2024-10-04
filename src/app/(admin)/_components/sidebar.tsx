"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import {
  Icon,
  IconApps,
  IconDeviceDesktopSearch,
  IconHome,
  IconShoppingBag,
  IconTag,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";

import { Logo, LogoType } from "@/components/logo";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r bg-background p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-3">
        <Option
          Icon={IconHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/studio"
        />
        <Option
          Icon={IconApps}
          title="Services"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/studio/services"
        />
        <Option
          Icon={IconDeviceDesktopSearch}
          title="Case Studies"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/studio/case-study"
          notifs={4}
        />
        <Option
          Icon={IconShoppingBag}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/studio/products"
        />
        <Option
          Icon={IconTag}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/studio/tags"
        />
        {/* <Option
          Icon={IconFileAnalytics}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href=""
        /> */}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({
  Icon,
  title,
  selected,
  href,
  setSelected,
  open,
  notifs,
}: {
  Icon: Icon;
  title: string;
  selected: string;
  href: string;
  setSelected: Dispatch<SetStateAction<string>>;
  open: boolean;
  notifs?: number;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative h-10 w-full rounded-md transition-colors ${selected === title ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-slate-100"}`}
    >
      <Link href={href} className="flex w-full items-center">
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
            animate={{
              opacity: 1,
              scale: 1,
            }}
            style={{ y: "-50%" }}
            transition={{ delay: 0.5 }}
            className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
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
        <div className="flex items-center gap-2 p-2">
          <LogoType />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Logo />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
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
