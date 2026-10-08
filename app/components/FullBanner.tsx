import Image from "next/image";
import styles from "./FullBanner.module.css";

export default function FullBanner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/diwali-banner.png"
        alt="Wrap & Wow Custom Corporate Gifting"
        fill
        priority
        sizes="100vw"
        className={styles.bannerImage}
      />
    </section>
  );
}
