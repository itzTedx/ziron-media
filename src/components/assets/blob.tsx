import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={722}
    height={750}
    fill="none"
  >
    <g filter="url(#a)" opacity={0.26}>
      <circle cx={296.383} cy={302.163} r={156.383} fill="#4A3AFF" />
      <circle cx={371.674} cy={452.765} r={156.383} fill="#962DFF" />
      <circle cx={425.236} cy={296.383} r={156.383} fill="#2D5BFF" />
    </g>
    <defs>
      <filter
        id="a"
        width={721.618}
        height={749.148}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_378_1278"
          stdDeviation={70}
        />
      </filter>
    </defs>
  </svg>
);
export { SvgComponent as Blob };
