import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
