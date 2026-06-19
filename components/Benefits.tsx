import Reveal from "./Reveal";
import {
  TrendIcon,
  TargetIcon,
  CalendarIcon,
  UsersIcon,
  ChartIcon,
  ShieldIcon,
  ZapIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "./icons";
import styles from "./Benefits.module.css";

const KPIS = [
  { value: "+250%", label: "demandes qualifiées en moyenne" },
  { value: "×3,2", label: "de retour sur investissement" },
  { value: "97%", label: "de campagnes optimisées en continu" },
  { value: "< 24h", label: "pour lancer votre stratégie" },
];

const FEATURED = {
  icon: <ChartIcon />,
  title: "Plus de chiffre d'affaires, chaque mois",
  body: "Le bénéfice qui résume tout : un volume constant de nouveaux clients qui transforme votre activité. Un ROI mesurable, mois après mois, sans dépendre du hasard.",
  tags: ["ROI mesurable", "Croissance prévisible", "Système qui scale"],
};

const BENEFITS = [
  {
    icon: <TargetIcon />,
    title: "Plus de visibilité",
    body: "Vous apparaissez devant les bonnes personnes, sur les bons canaux, au bon moment.",
  },
  {
    icon: <UsersIcon />,
    title: "Plus de demandes qualifiées",
    body: "Fini les curieux. Des prospects qui ont besoin de vos services et sont prêts à acheter.",
  },
  {
    icon: <CalendarIcon />,
    title: "Plus de rendez-vous",
    body: "Vos leads qualifiés deviennent des appels et des rendez-vous concrets dans votre agenda.",
  },
  {
    icon: <TrendIcon />,
    title: "Plus de clients",
    body: "Un flux constant de nouveaux clients chaque mois, sans courir après les recommandations.",
  },
  {
    icon: <ShieldIcon />,
    title: "Plus de stabilité",
    body: "Vous arrêtez les montagnes russes. Vous savez d'où viennent vos clients et combien attendre.",
  },
  {
    icon: <ZapIcon />,
    title: "Un système sur-mesure",
    body: "Pas de modèle générique. On adapte tout : marché, zone, offre, marges.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefices">
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>
            <SparkleIcon width={14} height={14} />
            Bénéfices concrets
          </span>
          <h2 className={styles.title}>
            Ce que NHBoost apporte à votre{" "}
            <span className={styles.accent}>activité</span>
          </h2>
          <p className={styles.lead}>
            Un système d'acquisition n'est pas un coût, c'est un moteur de
            croissance. Voici concrètement ce que vous gagnez.
          </p>
        </Reveal>

        <Reveal className={styles.kpiBar}>
          {KPIS.map((kpi, i) => (
            <div key={kpi.label} className={styles.kpi}>
              <span className={styles.kpiValue}>{kpi.value}</span>
              <span className={styles.kpiLabel}>{kpi.label}</span>
              {i < KPIS.length - 1 && (
                <span className={styles.kpiSep} aria-hidden="true" />
              )}
            </div>
          ))}
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.featured}>
            <div className={styles.featuredGlow} aria-hidden="true" />
            <div className={styles.featuredHeader}>
              <div className={styles.featuredIcon}>{FEATURED.icon}</div>
              <span className={styles.featuredBadge}>Bénéfice clé</span>
            </div>
            <h3 className={styles.featuredTitle}>{FEATURED.title}</h3>
            <p className={styles.featuredBody}>{FEATURED.body}</p>
            <ul className={styles.featuredTags}>
              {FEATURED.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className={styles.featuredChart} aria-hidden="true">
              <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="benGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5A9CC4" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#5A9CC4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,68 C25,64 50,58 75,52 C100,46 125,42 150,34 C175,26 200,22 225,16 C250,10 275,6 300,2 L300,80 L0,80 Z"
                  fill="url(#benGrad)"
                />
                <path
                  d="M0,68 C25,64 50,58 75,52 C100,46 125,42 150,34 C175,26 200,22 225,16 C250,10 275,6 300,2"
                  fill="none"
                  stroke="#5A9CC4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.featuredChartLabel}>
                Évolution du CA — exemple client
              </span>
            </div>
          </Reveal>

          <div className={styles.grid}>
            {BENEFITS.map((b, i) => (
              <Reveal
                key={b.title}
                delay={(i % 3) * 80}
                className={styles.card}
              >
                <div className={styles.cardIcon}>{b.icon}</div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardBody}>{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className={styles.bottomCta}>
          <p>
            Et ce n'est qu'une partie de ce que NHBoost change concrètement.
          </p>
          <a href="#contact" className={styles.bottomCtaLink}>
            Voir si NHBoost peut booster votre activité{" "}
            <ArrowRightIcon width={16} height={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
