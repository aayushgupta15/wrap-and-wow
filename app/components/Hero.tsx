import Image from 'next/image';

const benefits = [
  ['✦', 'Premium Quality'],
  ['♡', 'Thoughtful Curation'],
  ['☆', 'Custom Hampers'],
  ['⌁', 'Pan India Delivery'],
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-image-wrap">
        <Image src="/hero-banner.png" alt="Premium Wrap & Wow gift hamper" fill priority sizes="100vw" className="hero-image" />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">PREMIUM GIFTING EXPERIENCES</p>
          <h1>Crafted for<br /><em>Life&apos;s Special Moments</em></h1>
          <p className="hero-description">Thoughtfully curated hampers and premium gifts for your corporate and personal celebrations.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">Explore Our Collection <span>→</span></a>
            <a className="button button-secondary" href="#contact">Talk to Us</a>
          </div>
          <div className="benefits" aria-label="Our benefits">
            {benefits.map(([icon, text]) => <div className="benefit" key={text}><span>{icon}</span><small>{text}</small></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
