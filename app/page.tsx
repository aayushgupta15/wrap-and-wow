import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import LuxeGifting from "./components/LuxeGifting";
import LuxeGifting1 from "./components/LuxeGifting_1";
import FullBanner from "./components/FullBanner";
import Footer from "./components/Footer";

const products = [
  "Premium Dry Fruit Hampers",
  "Royal Nut & Choco Hampers",
  "Corporate Gift Boxes",
  "Festive Gift Hampers",
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* <Hero /> */}
      <HeroSlider />
      <LuxeGifting />
      <LuxeGifting1 />
      <FullBanner />

      <section className="intro container" id="about">
        <p className="eyebrow">ABOUT WRAP &amp; WOW</p>
        <h2>
          Gifting that feels
          <br />
          <em>personal, polished &amp; memorable.</em>
        </h2>
        <p>
          We curate premium gifting experiences for brands, teams and special
          moments. Every hamper is thoughtfully assembled, beautifully presented
          and designed to make an impression.
        </p>
      </section>

      <section className="products container" id="products">
        <div className="section-head">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Thoughtfully Curated Gifts</h2>
          </div>
          <a href="#contact">View All Collections →</a>
        </div>
        <div className="product-grid">
          {products.map((product, i) => (
            <article className="product-card" key={product}>
              <div className={`product-image product-${i + 1}`}>
                <span>WRAP &amp; WOW</span>
              </div>
              <div className="product-info">
                <h3>{product}</h3>
                <p>
                  Premium presentation, carefully selected products and a
                  memorable gifting experience.
                </p>
                <a href="#contact">Enquire →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="corporate" id="corporate">
        <div className="container corporate-inner">
          <div>
            <p className="eyebrow">CORPORATE GIFTING</p>
            <h2>
              Make your brand
              <br />
              <em>part of their story.</em>
            </h2>
          </div>
          <div>
            <p>
              From employee appreciation to client hampers and festive gifting,
              we create thoughtful solutions around your brand, occasion and
              budget.
            </p>
            <a className="button button-light" href="#contact">
              Request a Corporate Enquiry ↗
            </a>
          </div>
        </div>
      </section>
      <section className="custom container" id="custom">
        <p className="eyebrow">CUSTOM HAMPERS</p>
        <h2>
          Your vision.
          <br />
          <em>Our curation.</em>
        </h2>
        <div className="steps">
          <div>
            <b>01</b>
            <h3>Tell Us</h3>
            <p>Share your occasion and requirements.</p>
          </div>
          <div>
            <b>02</b>
            <h3>We Curate</h3>
            <p>We create the right hamper for you.</p>
          </div>
          <div>
            <b>03</b>
            <h3>You Approve</h3>
            <p>Fine-tune the details and presentation.</p>
          </div>
          <div>
            <b>04</b>
            <h3>We Deliver</h3>
            <p>Beautifully packed and delivered.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
