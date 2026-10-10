import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
        <FAQs />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
