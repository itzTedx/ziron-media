import LenisProvider from "@/components/dev/lenis";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div vaul-drawer-wrapper="" className="bg-gray-950">
      <LenisProvider />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
