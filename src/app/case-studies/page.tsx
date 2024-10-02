import { Badge } from "@/components/ui/badge";

export default function CasePage() {
  return (
    <main className="min-h-svh">
      <section className="container grid grid-cols-2 py-24">
        <div className="space-y-6">
          <Badge>✦ Your success is our success</Badge>
          <h2 className="font-normal">
            <span className="text-secondary">Accelerating Growth </span>
            from Startups to Industry Leaders <br />
          </h2>
          <p className="text-balance text-xl text-gray-700">
            We are a digital marketing agencies creating powerful brand
            identities and scalable digital strategies
          </p>
        </div>
      </section>
      <section className="container">
        <h5 className="text-5xl leading-tight tracking-tight">
          Like what you see?
          <br />
          Why not get in touch.
        </h5>
      </section>
    </main>
  );
}
