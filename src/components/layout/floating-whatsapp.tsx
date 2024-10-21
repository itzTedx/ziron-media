"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentTime } from "@/lib/get-current-time";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/site-config";

import { TypeWriter } from "../animations/type-writer-blocks";
import { Icons } from "../icons";
import { LogoType } from "../logo";

const examples = [
  "What are the monthly costs?",
  "Is digital marketing benefit my business?",
  "How long will it take to see results?",
];

export default function FloatingWhatsapp() {
  const [showMessage, setShowMessage] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    const updateViewportHeight = () => {
      if (window.innerWidth < 768 && window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
      } else if (window.innerWidth < 768) {
        setViewportHeight(window.innerHeight); // Fallback for unsupported browsers
      }
    };

    window.visualViewport?.addEventListener("resize", updateViewportHeight);

    // Cleanup event listener
    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        updateViewportHeight
      );
    };
  }, []);

  useEffect(() => {
    const delay = 1 * 1000;
    let timer: NodeJS.Timeout;

    if (isPopupVisible) {
      timer = setTimeout(() => {
        setShowMessage(true);
      }, delay);
    }
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [isPopupVisible]);

  const handleClick = () => {
    setIsPopupVisible(true);
  };

  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
    // Check for Enter key press
    if (event.key === "Enter") {
      sendMessageToWhatsApp(message);
    }
  };

  const sendMessageToWhatsApp = (messageToSend: string) => {
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.replace(/\s/g, "").replace(/\+/g, "")}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={cn("fixed right-3 z-[99999999] transition-all")}
      style={{
        bottom:
          typeof window !== "undefined" && viewportHeight < window.innerHeight
            ? "30vh"
            : "3vh",
      }}
    >
      <Popover>
        <PopoverTrigger
          onClick={handleClick}
          className="overflow-hidden rounded-full shadow-lg"
        >
          <div className="flex size-14 items-center justify-center bg-green-500">
            <Icons.whatsapp className="fill-white" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[375px] overflow-hidden rounded-xl border-primary p-0 shadow-primary-md"
        >
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 bg-primary p-4 text-background">
              <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-50">
                <LogoType className="p-1" />
                <span className="absolute bottom-0 right-0 flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
              </div>
              <div>
                <CardTitle className="mt-0 text-xl text-background">
                  {siteConfig.shortName}
                </CardTitle>
                <CardDescription className="text-xs font-light text-muted">
                  Typically replies within minutes
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="bg-[url('/whatsapp-bg.jpg')] bg-cover py-0 pb-1.5">
              <div className="relative h-[12rem] border-0 pt-4">
                <div className="whatsapp-clip absolute -left-3 top-4 z-[999] inline-block h-0 w-0" />
                <motion.div
                  className="w-fit rounded-lg bg-primary p-3 px-4 text-background shadow-md"
                  layout
                >
                  {showMessage ? (
                    <div className="min-w-[13rem]">
                      <h6 className="pb-1.5 pr-12 font-bold">
                        {siteConfig.shortName}
                      </h6>
                      <p className="text-sm">
                        Hello there! 🤝
                        <br />
                        <strong> Have Questions?</strong> We&apos;d love to
                        help!
                      </p>
                      <aside className="pt-1 text-right text-xs text-muted">
                        {getCurrentTime()}
                      </aside>
                    </div>
                  ) : (
                    <div className="flex h-4 items-center">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  )}
                </motion.div>
              </div>
              <BlockInText onExampleClick={sendMessageToWhatsApp} />
            </CardContent>

            <CardFooter>
              <Input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
                onKeyDown={handleInputChange}
                placeholder="Type your message..."
                className="rounded-full py-2 placeholder:text-sm"
              />
              <Button
                onClick={() => sendMessageToWhatsApp(message)}
                type="submit"
                variant={"ghost"}
                size={"icon"}
                className="px-1.5"
              >
                <Icons.send className="fill-muted-foreground" />
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const BlockInText = ({
  onExampleClick,
}: {
  onExampleClick: (example: string) => void;
}) => {
  return (
    <div className="w-full rounded-md bg-background/20 p-2 backdrop-blur-sm">
      <TypeWriter examples={examples} onExampleClick={onExampleClick} />
    </div>
  );
};
