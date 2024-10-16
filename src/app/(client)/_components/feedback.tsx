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
                  “The Company is very good on delivering services on time and
                  every time. They have a good team of researchers, who do our
                  job to our complete satisfaction. Needless to say, their rates
                  are highly competitive.”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Rajan Ahluwalia, Everest Ielts, Canada
                </figcaption>
              </figure>
            </Slider>
            <Slider className="w-full cursor-pointer">
              <figure className="pointer-events-none mx-auto h-[200px] max-w-4xl cursor-move select-none text-center">
                <p className="text-xl md:text-2xl">
                  “I recently worked with Ziron Media for their reels creation
                  services, and I’m beyond impressed! The team delivered
                  high-quality, engaging reels that really captured the essence
                  of my brand. Their creativity and attention to detail were
                  outstanding, and the reels have significantly boosted my
                  social media presence. If you&apos;re looking for top-notch
                  reels and digital marketing services in Dubai, Ziron Media is
                  the perfect choice!”
                </p>
                <figcaption className="mt-9 text-secondary">
                  Nasar Koliyadukkam , Aura Group
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
