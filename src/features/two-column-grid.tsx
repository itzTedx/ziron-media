export default function TwoColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="container grid max-w-5xl grid-cols-2 gap-4">{children}</div>
  );
}
