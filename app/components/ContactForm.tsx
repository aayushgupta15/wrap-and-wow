"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const CONTACT_PHONE = "+918810249661";
const CONTACT_EMAIL = "wrapnwow2026@gmail.com";

function isMobileDevice() {
  return (
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleContactClick(type: "phone" | "email", value: string) {
    if (isMobileDevice()) {
      window.location.href =
        type === "phone" ? `tel:${value}` : `mailto:${value}`;
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(type);

      window.setTimeout(() => {
        setCopiedItem((current) => (current === type ? null : current));
      }, 2000);
    } catch {
      window.prompt(
        `Copy ${type === "phone" ? "phone number" : "email address"}:`,
        value,
      );
    }
  }

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
        headers: { "Content-Type": "application/json" },
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

            <div className={styles.contactLinks}>
              <button
                type="button"
                className={styles.contactLink}
                onClick={() => handleContactClick("phone", CONTACT_PHONE)}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>
                    {copiedItem === "phone" ? "Number copied!" : "Call Us"}
                  </span>
                  <span className={styles.contactValue}>{CONTACT_PHONE}</span>
                </span>
              </button>

              <button
                type="button"
                className={styles.contactLink}
                onClick={() => handleContactClick("email", CONTACT_EMAIL)}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>
                    {copiedItem === "email" ? "Email copied!" : "Email Us"}
                  </span>
                  <span className={styles.contactValue}>{CONTACT_EMAIL}</span>
                </span>
              </button>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
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

            <div className={styles.fieldGrid}>
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
              {!loading && <span aria-hidden="true"> ↗</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
