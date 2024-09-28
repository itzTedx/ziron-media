import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

import Marquee from "./marquee";

export default function ServicesMarquee() {
  return (
    <div className="mt-9">
      {/* <Services left={services.flatMap((item) => item.label)} /> */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
        {services.slice(0, 5).map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer rounded-xl border px-4 py-2",
              "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <figcaption className="font-medium">{f.label}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25000ms]">
        {services.slice(6, 10).map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer rounded-xl border px-4 py-2",
              "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="font-medium">{f.label}</figcaption>
              </div>
            </div>
          </figure>
        ))}
      </Marquee>
      <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
        {services.slice(11, 15).map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer rounded-xl border px-4 py-2",
              "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <figcaption className="font-medium">{f.label}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25000ms]">
        {services.slice(16, 20).map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer rounded-xl border px-4 py-2",
              "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <figcaption className="font-medium">{f.label}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
    </div>
  );
}
