import { getServices } from "@/server/actions/get-services";

import Header from "../../_components/header";
import { columns } from "./data/columns";
import { DataTable } from "./data/data-table";

export default async function ServiceAdminPage() {
  const { services } = await getServices();

  if (!services) return null;

  return (
    <section className="container">
      <Header
        title="Services"
        description="Manage all services"
        btnLink="/studio/services/new"
      />
      <div className="">
        <DataTable columns={columns} data={services} />
      </div>
    </section>
  );
}
