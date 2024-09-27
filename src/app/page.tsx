import { Featured } from "./_components/featured";
import Hero from "./_components/hero";
import HowWeWorks from "./_components/how-we-works";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Featured />
      <HowWeWorks />
    </main>
  );
}
