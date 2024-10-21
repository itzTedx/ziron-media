export default function Header({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:px-4 md:py-12">
      <h2 className="not-prose max-w-sm text-balance font-normal max-md:pb-4">
        Why <span className="capitalize text-secondary">{title} ?</span>
      </h2>
      <span className="not-prose space-y-3 text-balance md:text-xl">
        {children}
      </span>
    </section>
  );
}
