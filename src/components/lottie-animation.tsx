"use client";

import Lottie from "lottie-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimationLottie = ({ animationPath }: { animationPath: any }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "100%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
