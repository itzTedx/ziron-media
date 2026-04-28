import { EmblaOptionsType } from "embla-carousel";

import { Logo } from "@/components/logo";
import Carousel, {
	Slider,
	SliderContainer,
	SliderDotButton,
} from "@/components/ui/carousel";

import { FEEDBACKS } from "@/constants/feedbacks";

export default function Feedback() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	return (
		<>
			<div className="bg-indigo-50/50 px-4 py-6 md:py-40">
				<div className="mx-auto w-fit scale-150 py-9 text-center brightness-[3.5] saturate-0">
					<Logo />
				</div>
				<Carousel isAutoPlay={true} options={OPTIONS}>
					<SliderContainer className="gap-2">
						{FEEDBACKS.map((feed, i) => (
							<Slider
								className="w-full cursor-pointer"
								key={`Feedback-${Number(i) + 1}`}
							>
								<figure className="pointer-events-none mx-auto max-w-4xl cursor-move select-none text-center">
									<p className="md:text-2xl">“{feed.feedback}”</p>
									<figcaption className="mt-4 text-secondary md:mt-9">
										{feed.name}
									</figcaption>
								</figure>
							</Slider>
						))}
					</SliderContainer>
					<div className="flex justify-center py-4">
						<SliderDotButton />
					</div>
				</Carousel>
			</div>
		</>
	);
}
