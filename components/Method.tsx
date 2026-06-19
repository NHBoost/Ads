import Reveal from "./Reveal";
import { CompassIcon, TargetIcon, MegaphoneIcon, RocketIcon } from "./icons";
import styles from "./Method.module.css";

const STEPS = [
  {
    icon: <CompassIcon />,
    title: "Analyse de votre activité",
    body: "On comprend votre offre, vos marges, votre marché, votre zone et vos clients idéaux. Sans ça, aucune campagne ne fonctionne durablement.",
  },
  {
    icon: <TargetIcon />,
    title: "Création de la stratégie d'acquisition",
    body: "On choisit les bons canaux, on construit le message, on définit le ciblage et on prépare tout le tunnel de conversion.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Lancement des campagnes publicitaires",
    body: "Visuels, copywriting, tracking, audience : on met tout en ligne et on commence à générer les premiers prospects qualifiés.",
  },
  {
    icon: <RocketIcon />,
    title: "Optimisation continue",
    body: "Chaque semaine, on analyse, on ajuste, on supprime ce qui ne fonctionne pas et on amplifie ce qui marche. Le système s'améliore en permanence.",
  },
];

export default function Method() {
  return (
    <section className={styles.method} id="methode">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Notre méthode</span>
          <h2 className={styles.title}>
            Un système simple, clair et{" "}
            <span className={styles.accent}>orienté résultats.</span>
          </h2>
          <p className={styles.lead}>
            Pas de blabla, pas d'usine à gaz. Quatre étapes claires pour mettre en
            place un vrai moteur d'acquisition.
          </p>
        </Reveal>

        <ol className={styles.timeline}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} as="li" className={styles.step}>
              <div className={styles.stepLine} aria-hidden="true">
                <span className={styles.stepDot}>{i + 1}</span>
                {i < STEPS.length - 1 && <span className={styles.stepConn} />}
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
