import SidebarMenu from "./_components/sidebar";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarMenu>
      <main className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-background p-2 md:p-10">
        {children}
      </main>
    </SidebarMenu>
  );
}
