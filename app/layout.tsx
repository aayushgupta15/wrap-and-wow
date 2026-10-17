import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

<meta
  name="google-site-verification"
  content="GCY3b84A8CIV0Z60x8a9wczO7Vm5eqll_a5-V7Y2W54"
/>;
// <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT2V9ZJG');</script>
// <!-- End Google Tag Manager -->

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
  title: "Wrap & Wow | Premium Gifting",
  description:
    "Thoughtfully curated gift hampers and premium gifting experiences.",
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
      {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PT2V9ZJG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
    </html>
  );
}
