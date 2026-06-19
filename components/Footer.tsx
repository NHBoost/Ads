import Logo from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Logo variant="light" className={styles.logo} />
          </div>
          <p className={styles.tagline}>
            Système d'acquisition client clé en main.
            Plus de demandes, plus de rendez-vous, plus de clients.
          </p>
        </div>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact direct</h4>
          <a href="tel:+32496053286" className={styles.link}>
            <PhoneIcon width={16} height={16} />
            +32 496 05 32 86
          </a>
          <a
            href="https://wa.me/32496053286"
            target="_blank"
            rel="noopener"
            className={styles.link}
          >
            <WhatsAppIcon width={16} height={16} />
            WhatsApp
          </a>
        </div>

        <div className={styles.legalCol}>
          <h4 className={styles.colTitle}>Informations</h4>
          <a href="#" className={styles.link}>
            Mentions légales
          </a>
          <a href="#" className={styles.link}>
            Politique de confidentialité
          </a>
          <a href="#" className={styles.link}>
            CGV
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {YEAR} NHBoost Agency — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
