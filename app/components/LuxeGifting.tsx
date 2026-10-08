import Image from "next/image";
import styles from "./LuxeGifting.module.css";

export default function LuxeGifting() {
  return (
    <section className={styles.luxeSection}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/luxe-gifting.jpg"
            alt="Luxury gifting hamper"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2>Luxe Gifting</h2>

          <div className={styles.eyebrow}>
            CURATED LUXURY, THOUGHTFULLY
            <br />
            YOURS
          </div>

          <p>
            From gourmet delights to indulgent self-care, every box is a
            reflection of style, substance, and elevated taste.
          </p>

          <a href="#contact" className={styles.button}>
            EXPLORE COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}
