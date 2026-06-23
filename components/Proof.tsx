import Reveal from "./Reveal";
import { StarIcon, CheckIcon } from "./icons";
import styles from "./Proof.module.css";

const STATS = [
  { value: "+10k", label: "Demandes qualifiées générées" },
  { value: "100+", label: "Campagnes optimisées chaque semaine" },
  { value: "100%", label: "Système clé en main" },
  { value: "1:1", label: "Accompagnement personnalisé" },
];

const TESTIMONIALS = [
  {
    name: "Karim B.",
    sector: "Rénovation & travaux",
    quote:
      "Avant NHBoost, j'attendais les recommandations. Aujourd'hui, je reçois des demandes qualifiées chaque semaine. Mon agenda est plein.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    sector: "Coaching & formation",
    quote:
      "Le système tourne tout seul. Je me concentre sur mes clients pendant qu'ils s'occupent de tout l'amont. Mon CA a doublé en 5 mois.",
    rating: 5,
  },
  {
    name: "Mehdi A.",
    sector: "Services B2B",
    quote:
      "C'est la première agence qui m'a apporté des rendez-vous concrets, pas juste des impressions et des clics. Vrai retour sur investissement.",
    rating: 5,
  },
];

const SECTORS = [
  "Rénovation",
  "Coaching",
  "Santé & bien-être",
  "Immobilier",
  "Services B2B",
  "E-commerce",
  "Restauration",
  "Beauté & esthétique",
];

export default function Proof() {
  return (
    <section className={styles.proof} id="preuves">
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Preuves & résultats</span>
          <h2 className={styles.title}>
            Des résultats <span className={styles.accent}>concrets</span>,<br />
            pas juste de la visibilité.
          </h2>
          <p className={styles.lead}>
            Ce qui compte, ce ne sont pas les vues. Ce sont les appels, les
            rendez-vous et les contrats signés.
          </p>
        </Reveal>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </Reveal>
          ))}
        </div>

        <div className={styles.testimonials}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={styles.testCard}>
              <div className={styles.stars} aria-label={`${t.rating} étoiles sur 5`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <StarIcon key={idx} className={styles.star} />
                ))}
              </div>
              <p className={styles.quote}>« {t.quote} »</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorSector}>{t.sector}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.videoBlock}>
          <figure className={styles.videoCard}>
            <video
              className={styles.testimonialVideo}
              src="https://hamza.nhboost-agency.com/assets/testimonial-2.mp4"
              controls
              playsInline
              preload="none"
            />
            <figcaption className={styles.videoCaption}>
              <span className={styles.videoLabel}>Témoignage client</span>
              <span className={styles.videoName}>
                « Comment NHBoost a transformé mon activité »
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className={styles.sectors}>
          <span className={styles.sectorsLabel}>
            <CheckIcon width={16} height={16} />
            Secteurs accompagnés
          </span>
          <ul className={styles.sectorList}>
            {SECTORS.map((s) => (
              <li key={s} className={styles.sectorPill}>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
