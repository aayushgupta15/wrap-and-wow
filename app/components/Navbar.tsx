'use client';

import { useState } from 'react';

const links = [
  ['About Us', '#about'],
  ['Our Products', '#products'],
  ['Corporate Gifting', '#corporate'],
  ['Custom Hampers', '#custom'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Wrap & Wow home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span className="brand-name">WRAP &amp; WOW</span>
        </a>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta mobile-cta" href="#contact" onClick={() => setOpen(false)}>Get in Touch <span>↗</span></a>
        </div>

        <a className="nav-cta desktop-cta" href="#contact">Get in Touch <span>↗</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
