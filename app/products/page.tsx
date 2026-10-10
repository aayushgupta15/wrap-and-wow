import Navbar from "../components/Navbar";
import ProductsGrid from "../components/ProductsGrid";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsGrid />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
