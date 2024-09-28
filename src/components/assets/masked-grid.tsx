import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={537}
    height={381}
    fill="none"
  >
    <mask
      id="a"
      width={216}
      height={216}
      x={121}
      y={84}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={229} cy={192} r={108} fill="#D9D9D9" />
    </mask>
    <g stroke="#962DFF" strokeMiterlimit={10} mask="url(#a)">
      <path d="M171.146 0v381M226.354 0v381M281.563 0v381M336.771 0v381M599 116H0M599 171H0M599 226H0M599 282H0" />
    </g>
  </svg>
);
export { SvgComponent as MaskGrid };
