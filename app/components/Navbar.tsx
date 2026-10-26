"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";

const PHONE_NUMBER = "+91 88102 49661";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = async () => {
    // Mobile / tablet → open phone app
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
      return;
    }

    // Desktop → copy phone number
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
    } catch {
      // Fallback
      const input = document.createElement("input");

      input.value = PHONE_NUMBER;

      document.body.appendChild(input);

      input.select();
      input.setSelectionRange(0, 99999);

      document.execCommand("copy");

      document.body.removeChild(input);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          {/* ================================
              LEFT NAVIGATION
          ================================= */}

          <nav
            className={`${styles.leftNav} ${menuOpen ? styles.mobileOpen : ""}`}
          >
            <a href="/products" onClick={closeMenu}>
              Products
            </a>

            <a href="/catalog" onClick={closeMenu}>
              Catalog
            </a>

            <a href="/contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          {/* ================================
              CENTER LOGO
          ================================= */}

          <a href="/" className={styles.logo}>
            <Image
              src="/logoone.png"
              alt="Wrap & Wow logo"
              width={120}
              height={120}
              priority
              className={styles.logoImage}
            />

            <span className={styles.logoText}>
              WRAP <b>&amp;</b> WOW
            </span>
          </a>

          {/* ================================
              RIGHT PHONE
          ================================= */}

          <button
            type="button"
            className={styles.phone}
            onClick={handlePhoneClick}
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <span className={styles.phoneIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 3.5l3.1-.7c.5-.1 1 .2 1.2.7l1.2 3c.2.4.1.9-.3 1.2l-1.8 1.5c.9 1.9 2.4 3.5 4.3 4.3l1.5-1.8c.3-.4.8-.5 1.2-.3l3 1.2c.5.2.8.7.7 1.2l-.7 3.1c-.1.5-.6.9-1.1.9C10.5 17.8 6.2 13.5 5.7 7.1c0-.5.4-1 0.9-1.1z" />
              </svg>
            </span>

            <span className={styles.phoneText}>
              <span className={styles.callUs}>Call Us</span>

              <span className={styles.number}>{PHONE_NUMBER}</span>
            </span>
          </button>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ================================
          DESKTOP COPY MESSAGE
      ================================= */}

      {copied && <div className={styles.copyMessage}>Phone number copied!</div>}
    </>
  );
}
