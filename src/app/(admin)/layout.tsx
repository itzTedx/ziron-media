import SidebarMenu from "./_components/sidebar";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarMenu>{children}</SidebarMenu>;
}
