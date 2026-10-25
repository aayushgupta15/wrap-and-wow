import styles from "./ProductsGrid.module.css";

const products = [
  {
    id: 1,
    name: "The Festive Treasure Basket",
    description:
      "Premium Salted Cashews, Almonds, Raisins, Assorted Mixed Seeds",
    price: "₹850",
    image: "/Festive_Treasure.png",
    category: "Luxury Gifting",
  },
  {
    id: 2,
    name: "The Festive Luxe Box",
    description:
      "Festive Candle, Chocolates, Salted Cashews, Salted Almonds, Beautiful Coffee Mug and Coffee Sachets",
    price: "₹1,099",
    image: "/Festive_Luxe.png",
    category: "Festive Collection",
  },
  {
    id: 3,
    name: "The Gentleman’s Box",
    description:
      "Fragrance, Stylish Table Decor, Coffee Mug, Coffee Sachet, Premium Wallet and Classic Belt",
    price: "₹1,250",
    image: "/Gentleman_box.png",
    category: "Corporate Gifting",
  },
  {
    id: 4,
    name: "Premium Dry Fruit Gift Hamper",
    description:
      "Salted Cashews, Salted Almonds, Premium Raisins, Dry Fruit & Seeds Mix",
    price: "₹1,299",
    image: "/Premium_Dry _Fruit.png",
    category: "Premium Gifting",
  },
  {
    id: 5,
    name: "Premium Corporate Gift Box",
    description:
      "Premium leatherette diary, Elegant metal pen, Stylish metal keychain with bottle opener, Sleek insulated copper bottle, Luxurious black velvet-finish gift box",
    price: "₹1,099",
    image: "/corporate.png",
    category: "Premium Gifting",
  },
  {
    id: 6,
    name: "Queen’s Corner",
    description:
      "Coffee Mug with Coffee, Fragrance, Stylish Clutch, Heartfelt Greeting Card, Crochet Keychain, Traditional Wallet and Office Table Decor.",
    price: "₹1,220",
    image: "Queen_box.png",
    category: "Personalised Gifts",
  },
  {
    id: 7,
    name: "Munch & Wow Gift Hamper",
    description:
      "Salted Spinach, Beetroot and Corn mix Chips, Chana Jor Garam, Bhakarwadi and Banana Chips in Coconut Oil. ",
    price: "₹999",
    image: "wow_gift1.png",
    category: "Premium Gifting",
  },
  {
    id: 8,
    name: "Royal Nut & Choco Gift Hamper",
    description:
      "Salted Cashews, Salted Almonds, Dry Fruit & Seed Mix and Premium Chocolates    ",
    price: "₹1,275",
    image: "Royal_Nut.png",
    category: "Premium Gifting",
  },
  {
    id: 9,
    name: "Royal Blush",
    description:
      "premium dry fruits, delectable chocolates, festive namkeen, and decorative accents ",
    price: "₹1,330",
    image: "Royal_Blush.png",
    category: "Festive Collection",
  },
  {
    id: 10,
    name: "Royal Petal Diwali Hamper",
    description:
      "a beautifully crafted pink-and-gold floral accent with delectable treats, delicate fairy lights, and sophisticated transparent packaging with gold detailing.",
    price: "₹699",
    image: "Royal_Petal.png",
    category: "Festive Collection",
  },
];

export default function ProductsGrid() {
  return (
    <section className={styles.products} id="products">
      <div className={styles.header}>
        <span className={styles.eyebrow}>MADE TO MAKE THEM SMILE</span>

        <h2 className={styles.heading}>
          GIFT A LITTLE
          <br />
          <span>HAPPINESS.</span>
        </h2>

        <p className={styles.intro}>
          Thoughtfully curated hampers, beautifully wrapped and designed to make
          every occasion unforgettable.
        </p>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article className={styles.card} key={product.id}>
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
                loading="lazy"
              />

              <span className={styles.category}>{product.category}</span>

              <span className={styles.price}>{product.price}</span>
            </div>

            <div className={styles.details}>
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <a
                href="/contact"
                className={styles.enquire}
                aria-label={`Enquire about ${product.name}`}
              >
                ENQUIRE NOW
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <p>Have something special in mind?</p>

        <a href="/contact" className={styles.footerLink}>
          CREATE A CUSTOM HAMPER
        </a>
      </div>
    </section>
  );
}
