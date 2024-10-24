"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Play } from "lucide-react";
import MediaThemeSutro from "player.style/sutro/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { Blob } from "../assets/blob";

interface HeroVideoProps {
  blurData?: string;
  subtitle?: string;
  videoSrc: string;
  videoPlaceholder: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export default function HeroVideoDialog({
  blurData,
  thumbnailSrc,
  thumbnailAlt,
  subtitle,
  videoSrc,
  videoPlaceholder,
  className,
}: HeroVideoProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div className={cn("relative", className)}>
      <Dialog>
        <DialogTrigger className="group relative z-10 cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <div
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
            className="relative w-full overflow-hidden rounded-2xl"
          >
            <div className="">
              <Image
                src={thumbnailSrc}
                alt={thumbnailAlt!}
                title={thumbnailAlt!}
                width={1280}
                height={640}
                priority
                placeholder={blurData ? "blur" : "empty"}
                blurDataURL={blurData ? blurData : undefined}
                quality={80}
                className={cn(
                  "w-full shadow-lg transition-all duration-200 ease-in-out group-hover:brightness-[0.8]"
                )}
              />
            </div>

            <video
              className={cn(
                "absolute top-1/2 z-10 w-full -translate-y-1/2 transition-opacity delay-200 duration-200 ease-in-out group-hover:brightness-[0.9]",
                isVideoPlaying ? "opacity-100" : "opacity-0"
              )}
              muted
              ref={videoRef}
              slot="media"
              src={videoPlaceholder}
              playsInline
              title={thumbnailAlt}
              crossOrigin="anonymous"
            >
              <track
                className="hidden"
                kind="captions"
                src={subtitle} // Replace with the actual path to your captions file
                srcLang="en"
                label="English"
              />
            </video>
            <div className="absolute inset-0 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
              <div className="relative flex size-24 items-center justify-center rounded-full bg-background/10 backdrop-blur-md">
                <span className="absolute size-28 items-center justify-center rounded-full bg-background/10 backdrop-blur-md" />
                <div
                  className={`relative flex size-20 scale-100 items-center justify-center rounded-full bg-background shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
                >
                  <Play
                    className="size-8 scale-100 fill-primary text-primary transition-transform duration-200 ease-out group-hover:scale-105"
                    style={{
                      filter:
                        "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Blob className="pointer-events-none absolute left-0 top-1/2 -z-10 -translate-y-1/2 scale-75 select-none md:scale-125" />
        </DialogTrigger>
        <DialogContent className="max-w-7xl overflow-hidden p-0 shadow-primary-md md:border-primary">
          <DialogHeader className="sr-only p-0">
            <DialogTitle>{thumbnailAlt}</DialogTitle>
            <DialogDescription>About us video</DialogDescription>
          </DialogHeader>

          <MediaThemeSutro className="w-full">
            <video
              autoPlay
              slot="media"
              // src={videoSrc}
              playsInline
              // title={thumbnailAlt}
              crossOrigin="anonymous"
            >
              <source
                src={videoPlaceholder}
                type="video/webm"
                media="all and (max-width: 480px)"
              />
              <source src={videoSrc} type="video/webm" />
              <track
                // className="hidden"
                kind="captions"
                src={subtitle} // Replace with the actual path to your captions file
                srcLang="en" // Specify the language of the captions
                label="English" // Label for the track
              />
            </video>
          </MediaThemeSutro>
        </DialogContent>
      </Dialog>
    </div>
  );
}
