import { cn } from "@/lib/utils";
import { getServices } from "@/server/actions/get-service-by-mdx";

import Marquee from "./marquee";

export default async function ServicesMarquee() {
  const services = await getServices();
  return (
    <div className="mt-9">
      {/* <Services left={services.flatMap((item) => item.label)} /> */}

      <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
        {services.slice(0, 5).map((service, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer rounded-xl border px-4 py-2",
              "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <figcaption className="font-medium">{service.title}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25000ms]">
        {services.slice(6, 10).map((service, idx) => (
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
                <figcaption className="font-medium">{service.title}</figcaption>
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
              <figcaption className="font-medium">{f.title}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:25000ms]">
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
              <figcaption className="font-medium">{f.title}</figcaption>
            </div>
          </figure>
        ))}
      </Marquee> */}
    </div>
  );
}
