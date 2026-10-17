"use client";

import { useState } from "react";
import styles from "./FAQs.module.css";

const faqs = [
  {
    question: "What does Wrap & Wow offer?",
    answer:
      "Wrap & Wow creates thoughtfully curated gift hampers for birthdays, anniversaries, festivals, weddings, special occasions, and corporate gifting. We focus on beautiful presentation and meaningful gifting experiences.",
  },
  {
    question: "Can I customize my gift hamper?",
    answer:
      "Yes! You can customize your hamper based on the occasion, recipient, preferred products, colors, packaging, and budget. Contact us to discuss your ideas, and we’ll help create something special.",
  },
  {
    question: "Do you offer corporate gifting?",
    answer:
      "Absolutely. We offer gifting solutions for employees, clients, business partners, festive celebrations, events, and corporate milestones. Custom branding and bulk gifting options can be discussed with our team.",
  },
  {
    question: "How much does a gift hamper cost?",
    answer:
      "Pricing depends on the products, packaging, customization, quantity, and delivery requirements. Share your budget and preferences with us, and we’ll suggest suitable gifting options.",
  },
  {
    question: "How early should I place my order?",
    answer:
      "We recommend contacting us in advance, especially for customized hampers, bulk orders, weddings, and festive gifting. The preparation time depends on your requirements and order quantity.",
  },
  {
    question: "Do you deliver gifts?",
    answer:
      "Delivery availability, timelines, and charges depend on your location and order requirements. Please contact us with your delivery details so we can confirm the available options.",
  },
  {
    question: "Can I place a bulk or festive order?",
    answer:
      "Yes! We welcome bulk orders for festivals, weddings, employee gifting, events, and business occasions. Contact us early so we can discuss quantities, customization, and timelines.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can contact us through WhatsApp or our contact section. Tell us about the occasion, your budget, preferred hamper, quantity, and delivery location to get started.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faqSection} id="faqs">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headingRow}>
            {/* <span className={styles.headingIcon} aria-hidden="true">
              ?
            </span> */}
            <h2>Before You Ask</h2>
          </div>

          <p>
            Everything you need to know before making your next gifting moment
            special.
          </p>
        </header>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>

                  <span
                    className={`${styles.toggle} ${
                      isOpen ? styles.toggleActive : ""
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.answerOpen : ""
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.button}>
          <p>Still have a question?</p>
          <a
            href="https://wa.me/918810249661?text=Hello%20Wrap%20%26%20Wow!%20I%20have%20a%20question%20about%20your%20gifting%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s talk about gifting
          </a>
        </div>
      </div>
    </section>
  );
}
