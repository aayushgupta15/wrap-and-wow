import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wrapnwow.com"),
  title: {
    default: "Premium Gift Hampers & Corporate Gifting | Wrap & Wow",
    template: "%s | Wrap & Wow", // har page ke title ke end mein brand lag jayega
  },
  description:
    "Curated gift hampers online: dry fruit, chocolate & corporate gift boxes from ₹850. Custom and bulk orders. Delivery in Delhi NCR & Dehradun.",
  openGraph: {
    siteName: "Wrap & Wow",
    type: "website",
    locale: "en_IN",
    images: ["/banner_premium.png"], // WhatsApp/Facebook par preview image
  },
  alternates: { canonical: "/" },
  // google-site-verification tag aapka pehle se hai, usse rehne do:
  verification: { google: "GCY3b84A8CIV0Z60x8a9wczO7Vm5eqll_a5-V7Y2W54" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable}`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager - noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT2V9ZJG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PT2V9ZJG');
            `,
          }}
        />
      </body>
    </html>
  );
}
