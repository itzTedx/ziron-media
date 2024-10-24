import Link from "next/link";

import { cn } from "@/lib/utils";
import { getServices } from "@/server/actions/get-service-by-mdx";

import Marquee from "./marquee";

export default async function ServicesMarquee() {
  const services = await getServices();
  return (
    <div className="mt-16">
      <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
        {services.slice(0, 5).map((service, idx) => (
          <Link key={idx} href={`/what-we-do/${service.slug}`} tabIndex={-1}>
            <figure
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
          </Link>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25000ms]">
        {services.slice(6, 10).map((service, idx) => (
          <Link key={idx} href={`/what-we-do/${service.slug}`} tabIndex={-1}>
            <figure
              className={cn(
                "relative cursor-pointer rounded-xl border px-4 py-2",
                "bg-gray-50 text-gray-900 hover:bg-gray-600 hover:text-gray-50",

                "transform-gpu transition-all duration-300 ease-out"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="font-medium">
                    {service.title}
                  </figcaption>
                </div>
              </div>
            </figure>
          </Link>
        ))}
      </Marquee>
      <Marquee repeat={2} pauseOnHover className="[--duration:25000ms]">
        {services.slice(11, 15).map((service, idx) => (
          <Link key={idx} href={`/what-we-do/${service.slug}`} tabIndex={-1}>
            <figure
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
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
