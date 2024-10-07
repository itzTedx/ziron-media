import Header from "@/app/(admin)/_components/header";

import ProductForm from "./_components/product-form";

export default function Service({ params }: { params: { id: string } }) {
  const isNew = params.id === "new";

  return (
    <section className="">
      <Header
        title={isNew ? "Add New Product" : "Edit Product"}
        description="Manage Products"
        btnType="back"
        btnLink="/studio/Products"
      />

      <ProductForm />
    </section>
  );
}
