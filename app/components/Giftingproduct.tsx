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
            src="/royal.png"
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
            Royal Nut & Choco
            <br />
            Gift Hamper
          </h2>

          <p className={styles.description}>
            A Royal Affair of Nuts, Chocolates & Indulgence <br />
            Salted Cashews, Salted Almonds, Dry Fruit & Seed Mix and Premium
            Chocolates.
          </p>

          <Link href="/products" className={styles.button}>
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
