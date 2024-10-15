import Header from "../_components/header";
import TestForm from "../_components/test-form";

export default function Page() {
  return (
    <section className="container">
      <Header title={"Dashboard"} description="Ziron Media" />
      <TestForm />
    </section>
  );
}
