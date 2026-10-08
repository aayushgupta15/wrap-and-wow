"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    src: "/diwali-banner.png",
    alt: "Wrap and Wow Diwali gifting",
  },
  {
    src: "/diwali-banner.png",
    alt: "Wrap and Wow corporate gifting",
  },
  {
    src: "/diwali-banner.png",
    alt: "Wrap and Wow luxury hampers",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div className={styles.slide} key={slide.src}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
