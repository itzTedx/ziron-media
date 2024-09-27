import Faq from "./_components/faq";
import { Featured } from "./_components/featured";
import Feedback from "./_components/feedback";
import GetStated from "./_components/get-started";
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

      <GetStated />

      <Feedback />
      <Faq />
    </main>
  );
}
