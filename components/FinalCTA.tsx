import { PhoneIcon, WhatsAppIcon, CheckIcon } from "./icons";
import Reveal from "./Reveal";
import styles from "./FinalCTA.module.css";

const PROMISES = [
  "Réponse rapide, sans engagement",
  "On vous dit clairement ce qu'on peut faire",
  "Stratégie adaptée à votre activité",
];

export default function FinalCTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.gradient} />
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.card}>
          <span className={styles.eyebrow}>Passons à l'action</span>

          <h2 className={styles.title}>
            Vous voulez plus de clients et plus de{" "}
            <span className={styles.accent}>chiffre d'affaires</span> ?
          </h2>

          <p className={styles.lead}>
            Appelez NHBoost maintenant ou envoyez-nous un message sur WhatsApp. On
            vous dira rapidement ce qu'on peut mettre en place pour votre activité.
          </p>

          <div className={styles.ctas}>
            <a
              href="tel:+32496053286"
              className={styles.ctaPrimary}
              aria-label="Appeler NHBoost au +32 496 05 32 86"
            >
              <PhoneIcon width={22} height={22} />
              <span className={styles.ctaText}>
                <span className={styles.ctaLabel}>Appeler maintenant</span>
                <span className={styles.ctaPhone}>+32 496 05 32 86</span>
              </span>
            </a>

            <a
              href="https://wa.me/32496053286"
              target="_blank"
              rel="noopener"
              className={styles.ctaWhatsapp}
              aria-label="Contacter NHBoost sur WhatsApp"
            >
              <WhatsAppIcon width={22} height={22} />
              <span className={styles.ctaText}>
                <span className={styles.ctaLabel}>WhatsApp</span>
                <span className={styles.ctaPhone}>Message direct</span>
              </span>
            </a>
          </div>

          <ul className={styles.promises}>
            {PROMISES.map((p) => (
              <li key={p} className={styles.promise}>
                <span className={styles.checkWrap}>
                  <CheckIcon width={14} height={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
