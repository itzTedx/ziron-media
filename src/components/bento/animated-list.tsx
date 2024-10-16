"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  time: string;
  index: number;
}

let baseNotifications = [
  {
    name: "New Message",
    description: "Can i get more info on this",
    time: "10s ago",
    icon: "instagram",
  },
  {
    name: "info@zironmeida.com",
    description: "Enquiry for Digital Marketing",
    time: "30s ago",
    icon: "gmail",
  },
  {
    name: "Message from olivia",
    description: "It arrived in excellent condition, just as described",
    time: "30s ago",
    icon: "messenger",
  },
  {
    name: "Linkedin",
    description: "You appeared in 9782 searches this week",
    time: "1m ago",
    icon: "linkedin",
  },
];

baseNotifications = Array.from({ length: 10 }, () => baseNotifications).flat();

const calculateTimeAgo = (index: number) => {
  if (index === 0) return "just now";
  const secondsAgo = 10 + (index - 1) * 20; // First notification is "just now", next ones increment by 20s
  return secondsAgo < 60
    ? `${secondsAgo}s ago`
    : `${Math.floor(secondsAgo / 60)}m ago`;
};

const Notification = ({ name, description, icon, index }: Item) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const time = calculateTimeAgo(index);
    setTimeAgo(time);
  }, [index]);

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-2xl px-3 py-2",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl">
          <div className="relative size-6">
            <Image
              src={`/icons/${icon}.png`}
              fill
              alt="icon"
              title="icon"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </figcaption>
          <p className="truncate text-xs font-normal">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border p-6 md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {baseNotifications.map((item, idx) => (
          <Notification {...item} key={idx} index={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
