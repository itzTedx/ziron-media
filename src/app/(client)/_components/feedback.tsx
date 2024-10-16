import { EmblaOptionsType } from "embla-carousel";

import { Logo } from "@/components/logo";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/ui/carousel";

export default function Feedback() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <div className="bg-violet-50 py-40 max-md:px-4">
        <div className="mx-auto w-fit scale-150 pb-9 text-center brightness-[3.5] saturate-0">
          <Logo />
        </div>
        <Carousel options={OPTIONS} isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-xl md:text-2xl">
                  “Ziron Media is exceptional! Their expertise in logo design
                  and digital marketing exceeded my expectations. They truly
                  understand my brand&apos;s needs. My go-to for all things
                  digital!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Menat, All 4 you
                </figcaption>
              </figure>
            </Slider>
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-xl md:text-2xl">
                  “Working with Ziron Media was a pleasure. Their service is
                  exceptional, delivering creative designs and effective digital
                  marketing strategies that elevated my brand&apos;s online
                  presence. Highly recommend!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Niraj Patel, Aura Group
                </figcaption>
              </figure>
            </Slider>
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-xl md:text-2xl">
                  “Exceptional service! Our brand&apos;s visibility skyrocketed
                  within a few months. Their team is professional, responsive,
                  and truly understands our business goals.”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Zahab Ismail, Saj Legal
                </figcaption>
              </figure>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </>
  );
}
