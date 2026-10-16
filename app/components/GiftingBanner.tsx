import Image from "next/image";
import Link from "next/link";
import styles from "./GiftingBanner.module.css";

export default function GiftingBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/product_one.png"
            alt="Premium curated gift hampers by Wrap N Wow"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>THE ART OF THOUGHTFUL GIFTING</p>

          <h2>
            Make every
            <br className={styles.desktopBreak} /> moment unforgettable.
          </h2>

          <p className={styles.description}>
            Beautifully curated hampers, thoughtful details, and elegant
            packaging to make your special moments truly memorable.
          </p>

          <Link href="/products" className={styles.button}>
            Explore Our Collection
          </Link>

          <p className={styles.note}>
            Thoughtfully curated. Beautifully wrapped. Always memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
