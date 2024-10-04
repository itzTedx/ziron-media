import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="container max-w-7xl">
      <h5 className="pt-24 text-3xl leading-tight tracking-tight md:text-5xl">
        Like what you see?
        <br />
        Why not get in touch.
      </h5>
      <Link href="/what-we-do">
        <div className="group relative mt-4 w-fit cursor-pointer overflow-hidden rounded-full border border-primary bg-background p-3 text-center font-semibold uppercase text-primary">
          <span className="inline-block translate-y-0 space-x-3 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
            <span>✦ </span>
            <span>Let&apos;s get connected</span>
          </span>
          <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-3 rounded-full bg-primary text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100">
            <span>✦ </span>
            <span>Let&apos;s get connected</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
