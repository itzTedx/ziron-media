import Header from "../../_components/header";
import FaqClient from "./client";
import FaqForm from "./faq-form";

export default function Page() {
  return (
    <section className="container relative">
      <Header
        title={"Frequently Asked Questions"}
        description="Site Settings"
      />
      <FaqForm />

      <FaqClient />
    </section>
  );
}
