import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { getServices } from "@/server/actions/get-service-by-mdx";

export const Services = async () => {
  const services = await getServices();
  return (
    <section className="container relative grid grid-cols-2 gap-3 px-3 py-9 md:grid-cols-4 md:gap-4 md:px-8 md:py-28">
      {services.splice(0, 7).map((service) => (
        <Link
          href={service.slug}
          key={service.id}
          className="z-20 flex flex-col justify-between rounded-md border bg-gray-50 p-6"
        >
          <h5 className="text-lg font-semibold">
            {service.title
              ?.split(" ")
              .map((word, index) => {
                return index === 0 ? (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ) : (
                  <span key={index} className="text-muted-foreground">
                    {word}{" "}
                  </span>
                );
              })
              .flat()}
          </h5>
          <div className="flex items-center gap-2 pt-6 max-md:text-xs">
            <div className="rounded-full border p-1">
              <IconArrowUpRight className="size-4 md:size-5" />
            </div>
            Learn More
          </div>
        </Link>
      ))}
      <Link
        href={"/what-we-do"}
        className="flex flex-col justify-between rounded-md border bg-gray-50 p-6"
      >
        <h5 className="text-lg font-semibold">
          <span className="text-muted-foreground">Explore our</span>
          <br />
          Services
        </h5>
        <div className="flex items-center gap-2 pt-6 max-md:text-xs">
          <div className="rounded-full border p-1">
            <IconArrowUpRight className="size-4 md:size-5" />
          </div>
          Learn More
        </div>
      </Link>
      <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </div>
    </section>
  );
};
