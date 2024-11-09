"use client";

import Image from "next/image";
import Link from "next/link";

import Spotlight, { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

export function HowWeWorks() {
  return (
    <>
      <section
        id="how-we-works"
        className="relative mb-24 flex flex-col justify-center overflow-hidden rounded-xl bg-slate-900"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <Badge className="bg-transparent" variant="secondary">
            ✦ This is how we works
          </Badge>
          <h3 className="py-3 text-4xl text-background md:text-5xl">
            Your Dedicated Digital Partner
          </h3>
          <p className="mb-9 text-gray-300">
            Here&apos;s how we tailor our approach to ensure your success.
          </p>

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center">
                  {" "}
                  {/* Text */}
                  <div className="mb-5 grow">
                    <h2 className="mb-1 text-2xl font-bold text-background">
                      Data-Driven Approach
                    </h2>
                    <p className="text-balance text-gray-200">
                      We use in-depth analytics to inform our strategies and
                      maximize your ROI.
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src="/images/data-illustration.svg"
                      height={206}
                      width={350}
                      alt="Small Business growth is in digital marketing agencies hands"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center">
                  {/* Text */}
                  <div className="mb-5 grow p-6">
                    <h2 className="mb-1 text-2xl font-bold text-slate-200">
                      Tailored Solutions
                    </h2>
                    <p className="text-balance text-gray-200">
                      Every business is unique, and we customize our services to
                      fit your specific needs.
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex w-full"
                      src="/images/puzzle-hands.svg"
                      height={206}
                      width={300}
                      alt="Problem Solving in ease"
                    />
                  </div>
                  {/* <ConnectButton /> */}
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
                {/* Radial gradient */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]"></div>
                </div>
                <div className="flex h-full flex-col items-center">
                  {/* Text */}
                  <div className="mb-5 grow">
                    <h2 className="mb-1 text-2xl font-bold text-slate-200">
                      Ongoing Support
                    </h2>
                    <p className="text-balance text-gray-200">
                      Our commitment to your success extends beyond initial
                      campaigns, providing continuous insights and adjustments.
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="absolute inset-0 -z-10 m-auto h-[40%] w-[40%] -translate-y-[10%] rounded-full bg-indigo-600 blur-3xl"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex pt-12"
                      src="/images/group.svg"
                      height={206}
                      width={250}
                      alt="Ready to serve customer services"
                    />
                  </div>
                  {/* <ConnectButton /> */}
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </div>
        <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
          <div className="absolute left-24 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        </div>
      </section>
    </>
  );
}

export default function ConnectButton() {
  return (
    <Link
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
      href="#"
    >
      <svg
        className="mr-2 fill-slate-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
      >
        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
      </svg>
      <span>Connect</span>
    </Link>
  );
}
