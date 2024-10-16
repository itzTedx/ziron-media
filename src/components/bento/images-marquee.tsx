import Image from "next/image";

import { cn } from "@/lib/utils";
import { getBase64 } from "@/server/actions/get-blurred-img-data";

import Marquee from "./marquee";

const reviews = [
  {
    img: "/images/featured/post-1.jpg",
  },
  {
    img: "/images/featured/post-2.jpg",
  },
  {
    img: "/images/featured/post-3.jpg",
  },
  {
    img: "/images/featured/post-4.jpg",
  },
  {
    img: "/images/featured/post-5.jpg",
  },
  {
    img: "/images/featured/post-6.jpg",
  },
  {
    img: "/images/featured/post-7.jpg",
  },
  {
    img: "/images/featured/post-8.jpg",
  },
  {
    img: "/images/featured/post-9.jpg",
  },
  {
    img: "/images/featured/post-10.jpg",
  },
  {
    img: "/images/featured/post-11.jpg",
  },
  {
    img: "/images/featured/post-12.jpg",
  },
  {
    img: "/images/featured/post-13.jpg",
  },
  {
    img: "/images/featured/post-14.jpg",
  },
];

const firstRow = reviews.slice(0, 5);
const secondRow = reviews.slice(6, 10);
const thirdRow = reviews.slice(11, 15);

const ReviewCard = async ({ img }: { img: string }) => {
  const blurData = await getBase64(img);
  return (
    <figure
      className={cn(
        "relative z-10 aspect-square w-14 cursor-pointer overflow-hidden rounded-md border md:w-20"
      )}
    >
      <div className="aspect-square">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={blurData}
          fill
          alt="Creative Designs we did"
          title="Creative Designs we did"
          aria-hidden
        />
      </div>
    </figure>
  );
};

const ImagesMarquee = () => {
  return (
    <>
      <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-r from-background via-background to-transparent md:hidden" />
      <div className="absolute -bottom-5 right-3 grid h-80 -rotate-[21deg] grid-cols-3 flex-row items-center justify-center overflow-hidden md:-right-9">
        <Marquee
          pauseOnHover
          vertical
          className="p-1 [--duration:22s] [--gap:0.5rem]"
        >
          {firstRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="p-1 [--duration:20s] [--gap:0.5rem]"
        >
          {secondRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="p-1 [--duration:28s] [--gap:0.5rem]"
        >
          {thirdRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-background"></div>
    </>
  );
};

export default ImagesMarquee;
