import { RotateCcw, ShieldCheck, Truck, Headset } from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Easy Returns",
    description: "A hassle-free gifting experience",
    icon: RotateCcw,
  },
  {
    title: "Safe & Secure Payments",
    description: "Your payments are always protected",
    icon: ShieldCheck,
  },
  {
    title: "Careful Delivery",
    description: "Beautifully delivered to your doorstep",
    icon: Truck,
  },
  {
    title: "Personalised Support",
    description: "We're here to help you",
    icon: Headset,
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className={styles.item} key={benefit.title}>
              <Icon
                className={styles.icon}
                size={36}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
