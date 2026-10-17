import styles from "../LegalPage.module.css";

export const metadata = {
  title: "Privacy Policy | Wrap N Wow",
  description:
    "Learn how Wrap N Wow collects, uses and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>YOUR PRIVACY MATTERS</span>
        <h1>
          Privacy <span>Policy</span>
        </h1>
        <p>
          We value your trust and aim to handle your personal information
          responsibly.
        </p>
      </section>

      <article className={styles.content}>
        <p className={styles.updated}>Last updated: 17 October 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how Wrap N Wow collects, uses, stores
            and protects information when you visit our website, contact us or
            enquire about our gifting products and services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>Depending on how you interact with us, we may collect:</p>
          <ul>
            <li>
              Contact details such as your name, phone number and email address.
            </li>
            <li>
              Enquiry details, including your gifting preferences, budget,
              occasion and customisation requests.
            </li>
            <li>Delivery information, if required to fulfil an order.</li>
            <li>Messages and other information you choose to share with us.</li>
            <li>
              Basic technical information, such as browser type, device
              information and website usage data, where collected by our website
              or service providers.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We may use your information to:</p>
          <ul>
            <li>Respond to enquiries and provide product information.</li>
            <li>Prepare quotations and manage confirmed orders.</li>
            <li>Arrange customisation, delivery and customer support.</li>
            <li>Improve our website, products and customer experience.</li>
            <li>
              Send service-related updates and other communications where
              appropriate and permitted.
            </li>
            <li>
              Meet applicable legal requirements and protect against fraud or
              misuse.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Website Technologies</h2>
          <p>
            Our website or its service providers may use cookies or similar
            technologies to support website functionality, understand usage and
            improve performance. You can manage cookies through your browser
            settings. Disabling certain cookies may affect some website
            features.
          </p>
          <p>
            We will provide any additional notices or choices required for
            analytics, advertising or other tracking technologies that we
            actually use.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share relevant
            information with service providers when necessary to operate our
            website, respond to enquiries, process payments, arrange deliveries
            or provide customer support.
          </p>
          <p>
            We may also disclose information when required by law or when
            reasonably necessary to protect our rights, customers or services.
          </p>
        </section>

        <section>
          <h2>6. Payments</h2>
          <p>
            If payments are accepted through a third-party payment provider,
            that provider may process payment information according to its own
            privacy and security practices. We will not intentionally collect or
            store full payment card details through this website unless a
            secure, appropriate payment arrangement is specifically implemented.
          </p>
        </section>

        <section>
          <h2>7. Data Security and Retention</h2>
          <p>
            We take reasonable steps to protect personal information against
            unauthorised access, loss, misuse or disclosure. However, no online
            transmission or storage system can be guaranteed to be completely
            secure.
          </p>
          <p>
            We retain information for as long as reasonably necessary for the
            purposes described in this policy, including order management,
            customer support and legal obligations.
          </p>
        </section>

        <section>
          <h2>8. Your Choices and Rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of
            or deletion of personal information you have shared with us. You may
            also request that we stop sending promotional communications.
          </p>
          <p>
            We may need to retain certain information where required by law or
            for legitimate business purposes.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may link to third-party websites or services. We are not
            responsible for their privacy practices or content. Please review
            their privacy policies before providing information to them.
          </p>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>
            Our website is intended for general customers and is not designed to
            knowingly collect personal information directly from children
            without appropriate authorisation where required by law.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy when our services or legal
            requirements change. The latest version will be published on this
            page with its updated date.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            For privacy-related questions or requests concerning your personal
            information, please contact us through our website.
          </p>
          <a href="/contact" className={styles.contactLink}>
            Contact Wrap N Wow ↗
          </a>
        </section>
      </article>
    </main>
  );
}
