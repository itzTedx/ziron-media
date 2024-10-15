export default function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-20 bg-violet-50 py-14">
      <h2 className="not-prose mx-auto max-w-xl text-center font-monaSans font-bold capitalize leading-tight text-gray-900">
        Our {title} Service
      </h2>
      <span className="not-prose mx-auto max-w-3xl space-y-4 text-balance px-4 text-center text-xl">
        {children}
      </span>
    </section>
  );
}
