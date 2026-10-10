"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductsGrid.module.css";

const PHONE_NUMBER = "+918810249661";
const WHATSAPP_NUMBER = "918810249661";

const products = [
  {
    id: 1,
    name: "Luxury Gift Hamper",
    description:
      "A beautifully curated hamper for birthdays, celebrations, and special moments.",
    image: "/hero-banner.png",
  },
  {
    id: 2,
    name: "Chocolate Gift Box",
    description:
      "A thoughtful selection of chocolates, beautifully presented for someone special.",
    image: "/hero-banner.png",
  },
  {
    id: 3,
    name: "Corporate Gift Hamper",
    description:
      "Premium gifting solutions for clients, employees, and business celebrations.",
    image: "/hero-banner.png",
  },
  {
    id: 4,
    name: "Birthday Gift Box",
    description:
      "Make birthdays memorable with a personalised and thoughtfully wrapped gift.",
    image: "/hero-banner.png",
  },
  {
    id: 5,
    name: "Festive Gift Hamper",
    description:
      "Celebrate festive occasions with elegant hampers and beautiful packaging.",
    image: "/hero-banner.png",
  },
  //   {
  //     id: 6,
  //     name: "Personalised Gift Box",
  //     description:
  //       "A custom gifting experience designed around your recipient and occasion.",
  //     image: "/images/products/personalised-box.jpg",
  //   },
];

export default function ProductsGrid() {
  const [copied, setCopied] = useState(false);

  async function handleCall() {
    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
      return;
    }

    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy our contact number:", PHONE_NUMBER);
    }
  }

  function handleWhatsApp(productName: string) {
    const message = `Hello Wrap & Wow! I'm interested in the "${productName}". Please share the details and pricing.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>THOUGHTFULLY CURATED</span>
          <h1>Our Products</h1>
          <p>
            Beautifully wrapped gifts, thoughtfully curated to make every moment
            unforgettable.
          </p>
        </header>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.id}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productInfo}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.callButton}
                    onClick={handleCall}
                    aria-label={`Call Wrap & Wow about ${product.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2
                        19.79 19.79 0 0 1-8.63-3.07
                        19.5 19.5 0 0 1-6-6
                        A19.79 19.79 0 0 1 2.12 4.18
                        2 2 0 0 1 4.11 2h3
                        a2 2 0 0 1 2 1.72
                        c.12.96.36 1.9.7 2.8
                        a2 2 0 0 1-.45 2.11L8.09 9.91
                        a16 16 0 0 0 6 6l1.27-1.27
                        a2 2 0 0 1 2.11-.45
                        c.9.34 1.84.58 2.8.7
                        A2 2 0 0 1 22 16.92Z"
                      />
                    </svg>
                    {copied ? "Number Copied!" : "Call Us"}
                  </button>

                  <button
                    type="button"
                    className={styles.whatsappButton}
                    onClick={() => handleWhatsApp(product.name)}
                    aria-label={`WhatsApp about ${product.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.97L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.78a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91a9.85 9.85 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.22 1.35.19 1.86.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
