import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Giftingproduct from "./components/Giftingproduct";
import GiftingBanner from "./components/GiftingBanner";
import GiftingCollection from "./components/GiftingCollection";
import Benefits from "./components/Benefits";
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
      <Benefits />
      <GiftingBanner />
      <Giftingproduct />
      <GiftingCollection />

      <br />

      <Reviews />
      <FAQs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
