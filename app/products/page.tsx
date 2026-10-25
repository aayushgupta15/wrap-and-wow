import Navbar from "../components/Navbar";
import ProductsGrid from "../components/ProductsGrid";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Hampers Online: Prices from ₹850", // template se "| Wrap & Wow" khud judega
  description:
    "Browse dry fruit, chocolate, festive and corporate gift hampers from ₹850 to ₹1,299. Premium packaging and custom options. Enquire now.",
  alternates: { canonical: "/products" },
};

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
