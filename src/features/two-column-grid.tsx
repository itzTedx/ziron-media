export default function TwoColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl gap-4 md:container md:grid md:grid-cols-2">
      {children}
    </div>
  );
}
