import {
  IconBraces,
  IconChartAreaLine,
  IconDeviceMobile,
  IconPencilStar,
  IconPhotoCode,
  IconSpeakerphone,
  IconUserSearch,
} from "@tabler/icons-react";

import { IconContainer } from "./icon-container";
import { Radar } from "./radar-line";

export default function Hero() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden bg-background px-4">
      <div className="mx-auto w-full max-w-4xl max-md:mt-20">
        <div className="flex w-full items-center justify-center space-x-8 md:justify-between md:space-x-0">
          <IconContainer
            text="Branding"
            icon={<IconPencilStar className="size-6 md:size-8" stroke={1.75} />}
            delay={0.2}
          />
          <IconContainer
            delay={0.4}
            text="Content Creation"
            icon={
              <IconDeviceMobile className="size-6 md:size-8" stroke={1.75} />
            }
          />
          <IconContainer
            text="Web Development"
            delay={0.3}
            icon={<IconBraces className="size-6 md:size-8" stroke={1.75} />}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-4 md:justify-between md:space-x-0">
          <IconContainer
            text="SEO"
            delay={0.5}
            icon={
              <IconChartAreaLine className="size-6 md:size-8" stroke={1.75} />
            }
          />
          <IconContainer
            text="Lead generation"
            icon={<IconUserSearch className="size-6 md:size-8" stroke={1.75} />}
            delay={0.8}
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex w-full items-center justify-center space-x-12 md:justify-between md:space-x-0">
          <IconContainer
            delay={0.6}
            text="Digital Marketing"
            icon={
              <IconSpeakerphone className="size-6 md:size-8" stroke={1.5} />
            }
          />
          <IconContainer
            delay={0.7}
            text="UI/UX Design"
            icon={<IconPhotoCode className="size-6 md:size-8" stroke={1.75} />}
          />
        </div>
      </div>
      <h2 className="absolute bottom-6 px-3 text-center font-medium max-md:top-0">
        We design, build and elevate <br />
        your <span className="text-secondary">online presence</span>
      </h2>
      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-3/5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  );
}
