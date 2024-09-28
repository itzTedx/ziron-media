import Image from "next/image";

import { cn } from "@/lib/utils";

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

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative aspect-square w-20 cursor-pointer overflow-hidden rounded-md border"
      )}
    >
      <div className="aspect-square">
        <Image src={img} fill alt="" />
      </div>
    </figure>
  );
};

const ImagesMarquee = () => {
  return (
    <>
      <div className="absolute -bottom-5 -right-9 grid h-80 -rotate-[21deg] grid-cols-3 flex-row items-center justify-center overflow-hidden">
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
