import OurQuality from "./_components/our-quality-section";
import Toolkit from "./_components/toolkit";

export default function AboutPage() {
  return (
    <main className="space-y-36 py-9 md:py-24">
      <section className="container py-32">
        <h1 className="max-w-lg text-balance text-5xl leading-tight tracking-tight text-gray-900">
          We&apos;re a <span className="text-secondary"> new generation</span>{" "}
          of digital creators
        </h1>
        <p className="mt-6 max-w-md text-xl">
          We are a digital marketing agencies creating powerful brand identities
          and scalable digital strategies
        </p>
      </section>
      <section className="container py-24">
        <h2 className="mx-auto max-w-3xl text-center">
          <strong className="font-medium">
            Our story started with our founders, 20 years ago
          </strong>
        </h2>
      </section>
      <section className="mx-auto grid max-w-5xl grid-cols-3 px-4">
        <h2>
          Creating
          <br />
          Long Term
          <br />
          <span className="text-secondary">Success</span>
        </h2>
        <p className="col-span-2 text-xl">
          We help all kinds of companies, big and small, from all kinds of
          sectors. The thing they have in common is that they’re ambitious and
          want to make their mark online. They like that we’re experts in our
          field, have been doing it for years, and have proven results and a
          fair few awards to show for it.
          <br />
          <br />
          Our digital specialists, strategists, creatives and number crunchers
          are good at what they do and love doing it. That’s why our clients and
          the team tend to stick around, and there’s always a great buzz about
          the place. And why we come into work each day wanting to go one
          better.
        </p>
        <div className="col-span-3 space-y-12 py-12 md:py-24">
          <h3 className="py-12 text-center max-md:pb-32">
            Our Marketing Toolkit
          </h3>
          <Toolkit />
        </div>
      </section>

      <OurQuality />
    </main>
  );
}
