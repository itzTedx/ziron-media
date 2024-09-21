export default function Home() {
  return (
    <main className="container mt-20">
      <div className="mt-8 grid grid-cols-5 gap-x-1 gap-y-8">
        <h1 className="text-3xl font-bold text-primary">Text Sample</h1>
        <h1 className="text-3xl font-bold text-secondary">Text Sample</h1>
        <h1 className="text-3xl font-bold text-accent">Text Sample</h1>
        <h1 className="text-3xl font-bold text-muted">Text Sample</h1>
        <h1 className="text-3xl font-bold text-foreground">Text Sample</h1>

        <div className="flex h-36 w-full bg-primary" />
        <div className="h-36 w-full bg-secondary" />
        <div className="h-36 w-full bg-accent" />
        <div className="h-36 w-full bg-muted" />
        <div className="h-36 w-full bg-foreground" />
      </div>
    </main>
  );
}
