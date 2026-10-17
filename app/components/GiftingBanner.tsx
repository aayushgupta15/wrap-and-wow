import Image from "next/image";
import Link from "next/link";
import styles from "./GiftingBanner.module.css";

export default function GiftingBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/luxe_festive.png"
            alt="A Royal Affair of Nuts, Chocolates & Indulgence"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            A Royal Affair of Nuts, Chocolates & Indulgence
          </p>

          <h2>
            Royal Nut & Choco
            <br className={styles.desktopBreak} /> Gift Hamper
          </h2>

          <p className={styles.description}>
            Salted Cashews, Salted Almonds, Dry Fruit & Seed Mix and Premium
            Chocolates
          </p>

          <Link href="/products" className={styles.button}>
            Explore Our Collection
          </Link>

          <p className={styles.note}>
            Choose your chocolate flavours and create a hamper that’s uniquely
            yours
          </p>
        </div>
      </div>
    </section>
  );
}
