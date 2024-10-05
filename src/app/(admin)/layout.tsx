import { Metadata } from "next";

import { getTags } from "@/server/actions/get-tags";

import { Sidebar } from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard - Ziron Media",
};

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tags = await getTags();

  return (
    <div className="flex">
      <Sidebar tag={tags} />
      <div className="w-full transition-all">{children}</div>
    </div>

    // <SidebarMenu>
    //   <main className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-background p-2 md:p-10">
    //     {children}
    //   </main>
    // </SidebarMenu>
  );
}
