import Image from "next/image";

import { Blob } from "@/components/assets/blob";

export default function AboutHero() {
	return (
		<section className="container relative overflow-x-clip py-20 text-center">
			<h1 className="mx-auto max-w-3xl text-balance font-monaSans text-6xl text-gray-900 leading-tight tracking-tight">
				We&apos;re a <span className="text-secondary"> New Generation</span> of
				digital creators
			</h1>
			<p className="mx-auto mt-6 max-w-3xl text-balance text-xl">
				We are a digital marketing agencies creating powerful brand identities
				and scalable digital strategies
			</p>
			<Image
				alt=""
				className="mx-auto"
				height={400}
				quality={100}
				src="/images/about-hero.png"
				width={1064}
			/>
			<Blob className="absolute top-40 left-0 rotate-45" />
		</section>
	);
}
