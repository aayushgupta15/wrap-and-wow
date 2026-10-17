import Image from "next/image";
import Link from "next/link";
import styles from "./PromoBanner.module.css";
// import styles from "./GiftingBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        {/* Background product image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/product_one.png"
            alt="Beautifully curated premium gift hampers"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 90vw"
            className={styles.image}
          />
        </div>

        {/* Sale badge */}
        <div className={styles.saleBadge}>
          <span>GIFT</span>
          <span>SALE</span>
        </div>

        {/* Overlapping content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>SPECIAL GIFTING OFFER</p>

          <h2>
            Thoughtful Gifts.
            <br />
            Beautifully Wrapped.
          </h2>

          <p className={styles.description}>
            Discover premium gift hampers curated for every celebration. Make
            every occasion memorable with thoughtful gifts and elegant
            packaging.
          </p>

          <Link href="/products" className={styles.button}>
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
