import Header from "@/app/(admin)/_components/header";
import { Separator } from "@/components/ui/separator";

import ServiceForm from "./_components/service-form";

export default function Service({ params }: { params: { id: string } }) {
  const isNew = params.id === "new";

  return (
    <section className="container">
      <Header
        title={isNew ? "Add New Service" : "Edit Service"}
        description="Manage Services"
        btnType="back"
        btnLink="/studio/services"
      />
      <Separator />
      <ServiceForm />
    </section>
  );
}
