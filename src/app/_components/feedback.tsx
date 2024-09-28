import { EmblaOptionsType } from "embla-carousel";

import Logo from "@/components/logo";
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/ui/carousel";

export default function Feedback() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <div className="py-40">
        <div className="mx-auto w-fit scale-150 pb-9 text-center brightness-[3.5] saturate-0">
          <Logo />
        </div>
        <Carousel options={OPTIONS} isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-2xl">
                  “Ziron Media is exceptional! Their expertise in logo design
                  and digital marketing exceeded my expectations. They truly
                  understand my brand&apos;s needs. My go-to for all things
                  digital!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Client Name, Company name
                </figcaption>
              </figure>
            </Slider>
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-2xl">
                  “Ziron Media is exceptional! Their expertise in logo design
                  and digital marketing exceeded my expectations. They truly
                  understand my brand&apos;s needs. My go-to for all things
                  digital!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Client Name, Company name
                </figcaption>
              </figure>
            </Slider>
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-2xl">
                  “Ziron Media is exceptional! Their expertise in logo design
                  and digital marketing exceeded my expectations. They truly
                  understand my brand&apos;s needs. My go-to for all things
                  digital!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Client Name, Company name
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
