import "./GiftingCollection.css";

const products = [
  {
    name: "The Festive Luxe Box ",
    description:
      "Festive Candle, Chocolates, Salted Cashews, Salted Almonds, Beautiful Coffee Mug and Coffee Sachets",
    // include:
    //   "Festive Candle, Chocolates, Salted Cashews, Salted Almonds, Beautiful Coffee Mug and Coffee Sachets",
    price: "₹1,499",
    image: "/Festive_Luxe.png",
  },
  {
    name: "The Gentleman’s Box",
    description:
      "Fragrance, Stylish Table Decor, Coffee Mug, Coffee Sachet, Premium Wallet and Classic Belt",
    price: "₹1,999",
    image: "/Gentleman_box.png",
  },
];

export default function GiftingCollection() {
  return (
    <section className="wnw-collection" id="collection">
      <div className="wnw-collection-header">
        <div className="wnw-collection-title">
          <span className="wnw-eyebrow">THE ART OF THOUGHTFUL GIFTING</span>
          <h2>
            LITTLE BOXES.
            <br />
            BIG MOMENTS.
          </h2>
        </div>

        <div className="wnw-collection-intro">
          <p>
            Beautifully curated hampers, premium treats and thoughtful details —
            made to make every occasion unforgettable.
          </p>

          <a href="/products" className="wnw-collection-button">
            DISCOVER OUR COLLECTION
          </a>

          {/* <span className="wnw-collection-note">
            Personalised gifting for every occasion.
          </span> */}
        </div>
      </div>

      <div className="wnw-product-grid">
        {products.map((product, index) => (
          <article
            className={`wnw-product-card ${
              index === 0 ? "wnw-card-first" : "wnw-card-second"
            }`}
            key={product.name}
          >
            <div className="wnw-product-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="wnw-product-image"
                loading="lazy"
              />

              {/* <span className="wnw-product-price">{product.price}</span> */}
            </div>

            <div className="wnw-product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <a
                href="/contact"
                className="wnw-product-link"
                aria-label={`Enquire about ${product.name}`}
              >
                ENQUIRE NOW
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
