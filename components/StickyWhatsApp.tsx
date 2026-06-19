import { WhatsAppIcon } from "./icons";
import styles from "./StickyWhatsApp.module.css";

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/32496053286"
      target="_blank"
      rel="noopener"
      className={styles.fab}
      aria-label="Contacter NHBoost sur WhatsApp"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <span className={styles.icon}>
        <WhatsAppIcon width={28} height={28} />
      </span>
      <span className={styles.label}>Discutons</span>
    </a>
  );
}
