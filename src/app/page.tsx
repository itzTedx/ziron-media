import { Featured } from "./_components/featured";
import Hero from "./_components/hero";
import HowWeWorks from "./_components/how-we-works";
import { Works } from "./_components/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <HowWeWorks />
      <Works />
    </main>
  );
}
