export default function Header({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-2 px-4 py-12">
      <h2 className="not-prose max-w-sm text-balance font-normal">
        Why <span className="capitalize text-secondary">{title} ?</span>
      </h2>
      <span className="not-prose space-y-3 text-balance text-xl">
        {children}
      </span>
    </section>
  );
}
