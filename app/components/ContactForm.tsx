"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>WE WOULD LOVE TO HEAR FROM YOU</span>

          <h1>Say Hello!</h1>

          <p>
            Questions, gifting ideas, or something special in mind? Let&apos;s
            make it memorable.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.intro}>
            <span className={styles.decorativeIcon} aria-hidden="true">
              ♡
            </span>

            <h2>Every thoughtful gift starts with a conversation.</h2>

            <p>
              Tell us about your occasion, your ideas, or your gifting
              requirements. We&apos;ll be happy to help.
            </p>

            <a href="mailto:hello@wrapandwow.com">hello@wrapandwow.com</a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">Contact number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                inputMode="tel"
                maxLength={25}
                pattern="[+]?[0-9 ()-]{7,20}"
                title="Enter a valid phone number."
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">How can we help?</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your occasion, budget, or gifting ideas..."
                rows={5}
                maxLength={5000}
                required
              />
            </div>

            {status && (
              <p
                className={
                  status.type === "success" ? styles.success : styles.error
                }
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              className={styles.submitButton}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <span aria-hidden="true"> </span>}
            </button>

            {/* <p className={styles.privacyNote}>
              Your details will only be used to respond to your enquiry.
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
