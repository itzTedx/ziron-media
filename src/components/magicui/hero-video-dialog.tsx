import Image from "next/image";

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
  blurData: string;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export default function HeroVideoDialog({
  blurData,
  thumbnailSrc,
  thumbnailAlt,
  videoSrc,
  className,
}: HeroVideoProps) {
  return (
    <div className={cn("relative", className)}>
      <Dialog>
        <DialogTrigger className="group relative z-10 cursor-pointer rounded-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt!}
            title={thumbnailAlt!}
            width={1920}
            height={1080}
            priority
            placeholder="blur"
            blurDataURL={blurData}
            quality={80}
            className="w-full rounded-2xl shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          />
          <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
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
              src={videoSrc}
              playsInline
              title={thumbnailAlt}
              crossOrigin="anonymous"
            >
              <track
                className="hidden"
                kind="captions"
                src="path/to/captions.vtt" // Replace with the actual path to your captions file
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
