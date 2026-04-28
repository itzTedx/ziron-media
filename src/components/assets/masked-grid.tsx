import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="none"
		height={381}
		width={537}
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask
			height={216}
			id="a"
			maskUnits="userSpaceOnUse"
			style={{
				maskType: "alpha",
			}}
			width={216}
			x={121}
			y={84}
		>
			<circle cx={229} cy={192} fill="#D9D9D9" r={108} />
		</mask>
		<g mask="url(#a)" stroke="#962DFF" strokeMiterlimit={10}>
			<path d="M171.146 0v381M226.354 0v381M281.563 0v381M336.771 0v381M599 116H0M599 171H0M599 226H0M599 282H0" />
		</g>
	</svg>
);

export { SvgComponent as MaskGrid };
