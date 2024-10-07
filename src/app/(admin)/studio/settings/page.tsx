import Editor from "@/components/ui/editor";

import Header from "../../_components/header";

export default function Page() {
  return (
    <section className="container">
      <Header title={"Settings"} description="Site Settings" />
      <Editor />
    </section>
  );
}
