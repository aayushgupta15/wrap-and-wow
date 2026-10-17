import styles from "../LegalPage.module.css";

export const metadata = {
  title: "Terms & Conditions | Wrap N Wow",
  description:
    "Read the terms and conditions for using the Wrap N Wow website and gifting services.",
};

export default function TermsAndConditions() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>WRAP N WOW</span>
        <h1>
          Terms & <span>Conditions</span>
        </h1>
        <p>
          A few important details to help make your gifting experience smooth
          and delightful.
        </p>
      </section>

      <article className={styles.content}>
        <p className={styles.updated}>Last updated: 17 October 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Wrap N Wow. By accessing or using our website, you agree
            to these Terms & Conditions. If you do not agree with these terms,
            please do not use our website.
          </p>
        </section>

        <section>
          <h2>2. Our Products and Services</h2>
          <p>
            Wrap N Wow showcases curated gift hampers, gift boxes and customised
            gifting options. Product images are for illustration purposes.
            Actual colours, packaging, presentation and contents may vary
            depending on availability.
          </p>
          <p>
            Product information, prices and availability may change without
            prior notice.
          </p>
        </section>

        <section>
          <h2>3. Enquiries and Orders</h2>
          <p>
            Submitting an enquiry through our website does not automatically
            confirm an order. Orders are confirmed only after the details,
            pricing, availability, delivery arrangements and payment terms have
            been agreed upon with our team.
          </p>
          <p>
            Please ensure that the contact information and delivery details you
            provide are accurate.
          </p>
        </section>

        <section>
          <h2>4. Pricing and Payments</h2>
          <p>
            Prices displayed on the website are indicative unless specifically
            confirmed by our team. The final price may depend on hamper
            contents, customisation, quantity, packaging, shipping and
            applicable taxes.
          </p>
          <p>
            Payment methods, payment deadlines and any advance payment
            requirements will be communicated before an order is confirmed.
          </p>
        </section>

        <section>
          <h2>5. Customised Gifts</h2>
          <p>
            Custom hampers may be prepared according to the customer's selected
            products, budget, occasion and personalisation requirements. Once
            customisation or preparation has started, changes may not always be
            possible.
          </p>
          <p>
            Please confirm spelling, names, messages and other personalisation
            details before approving a customised order.
          </p>
        </section>

        <section>
          <h2>6. Delivery</h2>
          <p>
            Delivery timelines depend on the order, destination, product
            availability and courier or delivery partner. Any delivery timeline
            provided is an estimate unless expressly confirmed otherwise.
          </p>
          <p>
            Customers should provide a complete and correct delivery address and
            contact number. Delays caused by circumstances beyond our reasonable
            control may occur.
          </p>
        </section>

        <section>
          <h2>7. Cancellation, Returns and Refunds</h2>
          <p>
            Cancellation, return, replacement and refund requests are subject to
            the policy communicated for the specific order. Customised,
            personalised or perishable items may have additional restrictions,
            where permitted by applicable law.
          </p>
          <p>
            If an item arrives damaged or incorrect, contact us promptly with
            your order details and clear photographs so that we can review the
            issue.
          </p>
          <p>
            Nothing in these terms limits any consumer rights that cannot
            legally be excluded.
          </p>
        </section>

        <section>
          <h2>8. Website Use</h2>
          <p>
            You agree not to misuse this website, submit false information,
            interfere with its operation, attempt unauthorised access or use its
            content for unlawful purposes.
          </p>
        </section>

        <section>
          <h2>9. Intellectual Property</h2>
          <p>
            Website content, branding, logos, photographs, text and design
            elements are owned by or licensed to Wrap N Wow unless otherwise
            stated. They may not be copied, reproduced or used commercially
            without prior written permission.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law, Wrap N Wow is not
            responsible for indirect or consequential losses arising from
            website use or circumstances beyond our reasonable control. This
            does not exclude liability that cannot legally be excluded.
          </p>
        </section>

        <section>
          <h2>11. Privacy</h2>
          <p>
            Any personal information you provide through our website will be
            handled according to our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These terms are subject to applicable laws of India. Any disputes
            will be handled by the competent courts with jurisdiction, subject
            to applicable law.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these terms, please contact us through
            our website's contact page.
          </p>
          <a href="/contact" className={styles.contactLink}>
            Contact Wrap N Wow ↗
          </a>
        </section>
      </article>
    </main>
  );
}
