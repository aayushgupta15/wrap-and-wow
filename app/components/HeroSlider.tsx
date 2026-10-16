"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    desktop: "/banner_queen1.png",
    mobile: "/banner_queen_mobile.png",
    alt: "Wrap N Wow Diwali gifting",
  },
  {
    desktop: "/banner_premium.png",
    mobile: "/mobile_banner_premium.png",
    alt: "Wrap N Wow corporate gifting",
  },
  {
    desktop: "/banner_festival.png",
    mobile: "/banner_festival_mobile.png",
    alt: "Wrap N Wow luxury hampers",
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

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className={styles.hero}
      aria-label="Wrap N Wow featured collections"
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={slide.desktop}>
            <picture className={styles.picture}>
              <source media="(max-width: 640px)" srcSet={slide.mobile} />

              <Image
                src={slide.desktop}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={styles.image}
              />
            </picture>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.left}`}
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
