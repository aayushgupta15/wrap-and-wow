"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const handleContactClick = (type: "phone" | "email", value: string) => {
    // Mobile/tablet
    if (window.innerWidth <= 768) {
      if (type === "phone") {
        window.location.href = `tel:${value.replace(/\s/g, "")}`;
      } else {
        window.location.href = `mailto:${value}`;
      }

      return;
    }

    // Desktop
    navigator.clipboard.writeText(value);

    // Small notification
    const message = document.createElement("div");

    message.innerText = `${type === "phone" ? "Phone number" : "Email"} copied!`;

    message.className = styles.copyMessage;

    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerMessage}>
          {/* PHONE */}
          <button
            type="button"
            className={styles.contactItem}
            onClick={() => handleContactClick("phone", "+91 98765 43210")}
          >
            <span className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M6.6 3.5l3.1-.7c.5-.1 1 .2 1.2.7l1.2 3c.2.4.1.9-.3 1.2l-1.8 1.5c.9 1.9 2.4 3.5 4.3 4.3l1.5-1.8c.3-.4.8-.5 1.2-.3l3 1.2c.5.2.8.7.7 1.2l-.7 3.1c-.1.5-.6.9-1.1.9C10.5 17.8 6.2 13.5 5.7 7.1c0-.5.4-1 0.9-1.1z" />
              </svg>
            </span>

            <span>+91 98765 43210</span>
          </button>

          {/* EMAIL */}
          <button
            type="button"
            className={styles.contactItem}
            onClick={() => handleContactClick("email", "hello@wrapandwow.com")}
          >
            <span className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>

            <span>hello@wrapandwow.com</span>
          </button>
        </div>
        {/* Social Icons */}
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram" className={styles.social}>
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn" className={styles.social}>
            <svg viewBox="0 0 24 24">
              <path d="M6 8v10" />
              <circle cx="6" cy="5" r="1" fill="currentColor" stroke="none" />
              <path d="M10 18v-6a3 3 0 0 1 6 0v6" />
              <path d="M10 12v6" />
            </svg>
          </a>

          <a href="#" aria-label="X" className={styles.social}>
            <span className={styles.xIcon}>𝕏</span>
          </a>

          <a href="#" aria-label="TikTok" className={styles.social}>
            <span className={styles.tiktok}>♪</span>
          </a>

          <a href="#" aria-label="Facebook" className={styles.social}>
            <span className={styles.facebook}>f</span>
          </a>
        </div>
      </div>

      {/* Large Brand */}
      <div className={styles.brandWrapper}>
        <h2 className={styles.brand}>
          WRAP <span>&amp;</span> WOW
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Wrap &amp; Wow</p>

        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>

          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
