export const metadata = {
  metadataBase: new URL("https://www.wrapnwow.com"),
  title: "Gift Hamper Catalog | Wrap & Wow",
  description:
    "Explore premium gift hampers for birthdays, weddings, festivals, and corporate gifting at Wrap & Wow. Browse our full catalog.",
  alternates: { canonical: "/catalog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gift Hamper Catalog | Wrap & Wow",
    description:
      "Premium corporate and festive gift hampers. Browse the full Wrap & Wow catalog.",
    url: "/catalog",
    siteName: "Wrap & Wow",
    type: "website",
    images: ["/banner_premium.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Hamper Catalog | Wrap & Wow",
    description: "Premium corporate and festive gift hampers by Wrap & Wow.",
    images: ["/banner_premium.png"],
  },
};

const FILE_ID = "1coUZjNYr_vuGUPB72lqz5dY3mJtZ3wrD";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gift Hamper Catalog",
  url: "https://www.wrapnwow.com/catalog",
  description:
    "Premium gift hampers for birthdays, weddings, festivals and corporate gifting.",
  isPartOf: {
    "@type": "WebSite",
    name: "Wrap & Wow",
    url: "https://www.wrapnwow.com",
  },
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

export default function CatalogPage() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        background: "#1c1d1f",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 style={srOnly}>Wrap &amp; Wow Gift Hamper Catalog</h1>
      <p style={srOnly}>
        Browse premium gift hampers for birthdays, weddings, festivals and
        corporate gifting. Customised and sustainable gift boxes available.
      </p>

      <a
        href="/"
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 10,
          padding: "8px 16px",
          borderRadius: 999,
          background: "rgba(43, 26, 20, 0.9)",
          color: "#fff",
          fontSize: 14,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        ← Back to Home
      </a>

      <iframe
        src={`https://drive.google.com/file/d/${FILE_ID}/preview`}
        title="Wrap & Wow Gift Hamper Catalog"
        allow="autoplay"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </main>
  );
}
