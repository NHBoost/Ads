import Logo from "./Logo";
import { PhoneIcon } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand} aria-label="NHBoost Agency — accueil">
          <Logo className={styles.logo} priority />
        </a>

        <a
          href="tel:+32496053286"
          className={styles.phoneCta}
          aria-label="Appeler NHBoost au +32 496 05 32 86"
        >
          <PhoneIcon className={styles.phoneIcon} width={18} height={18} />
          <span className={styles.phoneText}>+32 496 05 32 86</span>
          <span className={styles.phoneShort}>Appeler</span>
        </a>
      </div>
    </header>
  );
}
