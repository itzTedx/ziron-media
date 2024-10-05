import Header from "../../_components/header";

export default function ProductsPage() {
  return (
    <section className="container">
      <Header
        title={"Products"}
        description="Ziron Media"
        btnLink="/studio/products/new"
      />
    </section>
  );
}
