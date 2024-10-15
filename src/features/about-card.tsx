export default function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-20 rounded-lg border border-primary bg-violet-50 py-20 shadow-primary-md">
      <h2 className="not-prose mx-auto mb-4 max-w-2xl text-center font-monaSans font-bold capitalize leading-tight text-gray-900">
        Our {title} Service
      </h2>
      <div className="not-prose mx-auto max-w-5xl text-balance px-4 text-center text-xl">
        {children}
      </div>
    </section>
  );
}
