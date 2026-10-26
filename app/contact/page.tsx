import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://www.wrapnwow.com"),
  title: "Contact Us | Wrap & Wow Corporate & Festive Gifting",
  description:
    "Get in touch with Wrap & Wow for premium gift hampers, corporate gifting and customised gift boxes. Call +91 88102 49661 or send us an enquiry today.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us | Wrap & Wow",
    description:
      "Enquire about premium gift hampers, bulk corporate orders and customised gifting with Wrap & Wow.",
    url: "/contact",
    siteName: "Wrap & Wow",
    type: "website",
    images: ["/banner_premium.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Wrap & Wow",
    description:
      "Enquire about premium gift hampers and corporate gifting with Wrap & Wow.",
    images: ["/banner_premium.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Wrap & Wow",
      url: "https://www.wrapnwow.com/contact",
      isPartOf: {
        "@type": "WebSite",
        name: "Wrap & Wow",
        url: "https://www.wrapnwow.com",
      },
    },
    {
      "@type": "Organization",
      name: "Wrap & Wow",
      url: "https://www.wrapnwow.com",
      logo: "https://www.wrapnwow.com/logo.png", // apna asli logo path daalo
      telephone: "+91-88102-49661",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-88102-49661",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
  ],
};

// Screen par nahi dikhta, lekin Google padh leta hai
const srOnly = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Agar ContactForm ya FAQs mein pehle se <h1> hai to ye hata do */}
        <h1 style={srOnly}>Contact Wrap &amp; Wow for Premium Gift Hampers</h1>
        <ContactForm />
        <FAQs />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
