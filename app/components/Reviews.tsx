import styles from "./Reviews.module.css";

const reviews = [
  {
    text: "“The hamper was beautifully curated and every detail felt so thoughtful. It made our celebration truly special.”",
    author: "PRIYA SHARMA",
  },
  {
    text: "“Wrap & Wow made our corporate gifting effortless. The presentation was elegant, premium, and perfectly executed.”",
    author: "ARJUN MEHTA",
  },
  {
    text: "“Every little detail was beautifully done. The packaging, quality, and presentation were simply exceptional.”",
    author: "NEHA KAPOOR",
  },
  {
    text: "“A perfect gifting experience from start to finish. Our guests absolutely loved the thoughtful hampers.”",
    author: "RIYA & KUNAL",
  },
  {
    text: "“The attention to detail is what stood out the most. It felt personal, luxurious, and beautifully presented.”",
    author: "ANANYA SINGH",
  },
  {
    text: "“The hamper was beautifully curated and every detail felt so thoughtful. It made our celebration truly special.”",
    author: "PRIYA SHARMA",
  },
];

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>WHAT OUR CLIENTS SAY</span>

        <h2>Wrapped With Love.</h2>

        <p>
          Thoughtful words from the people who trusted Wrap &amp; Wow to make
          their moments memorable.
        </p>
      </div>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <article
            key={index}
            className={`${styles.card} ${
              index % 2 === 0 ? styles.cardUp : styles.cardDown
            }`}
          >
            <p className={styles.reviewText}>{review.text}</p>

            <div className={styles.author}>
              <span className={styles.line}></span>
              <span>{review.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
