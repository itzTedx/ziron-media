import { getTags } from "@/server/actions/get-tags";

import Header from "../../_components/header";
import { columns } from "./data/columns";
import { DataTable } from "./data/data.-table";
import TagForm from "./tag-form";

export default async function TagsPage() {
  const tags = await getTags();
  return (
    <section className="container">
      <Header title={"Tags"} description="Manage Tags" />
      <TagForm />
      <div className="">
        <DataTable columns={columns} data={tags} />
      </div>
    </section>
  );
}
