import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="none"
		height={750}
		width={722}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#a)" opacity={0.26}>
			<circle cx={296.383} cy={302.163} fill="#4A3AFF" r={156.383} />
			<circle cx={371.674} cy={452.765} fill="#962DFF" r={156.383} />
			<circle cx={425.236} cy={296.383} fill="#2D5BFF" r={156.383} />
		</g>
		<defs>
			<filter
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
				height={749.148}
				id="a"
				width={721.618}
				x={0}
				y={0}
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
