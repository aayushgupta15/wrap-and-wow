import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import LuxeGifting from "./components/LuxeGifting";
import LuxeGifting1 from "./components/LuxeGifting_1";
import FullBanner from "./components/FullBanner";
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const products = [
  "Premium Dry Fruit Hampers",
  "Royal Nut & Choco Hampers",
  "Corporate Gift Boxes",
  "Festive Gift Hampers",
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* <Hero /> */}
      <HeroSlider />
      <LuxeGifting />
      <LuxeGifting1 />
      <FullBanner />
      <Reviews />
      <FAQs />
      <Footer />

      <WhatsAppButton />
    </main>
  );
}
