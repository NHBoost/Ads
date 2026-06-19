import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";
import styles from "./Problem.module.css";

const PAINS = [
  {
    title: "Bouche-à-oreille uniquement",
    body: "Vous dépendez de la chance et des recommandations. Quand les gens arrêtent d'en parler, le téléphone arrête de sonner.",
  },
  {
    title: "Demandes irrégulières",
    body: "Une bonne semaine, puis trois semaines de creux. Impossible de planifier votre activité, ni d'embaucher sereinement.",
  },
  {
    title: "Invisible en ligne",
    body: "Vos prospects ne vous trouvent pas avant vos concurrents. Vous perdez chaque jour des clients qui ne sauront jamais que vous existez.",
  },
];

export default function Problem() {
  return (
    <section className={styles.problem} id="probleme">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Le constat</span>
          <h2 className={styles.title}>
            Vous avez une bonne entreprise,
            <br />
            mais pas assez de{" "}
            <span className={styles.accent}>clients réguliers</span> ?
          </h2>
          <p className={styles.lead}>
            Vous dépendez encore trop du bouche-à-oreille, des recommandations
            ou des périodes où les demandes arrivent au hasard.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.visual}>
            <div className={styles.imageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop"
                alt="Dirigeant qui réfléchit à la croissance de son entreprise"
                width={900}
                height={1100}
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className={styles.imageOverlay} aria-hidden="true" />

              <div className={styles.statCard}>
                <div className={styles.statValue}>72 %</div>
                <p className={styles.statText}>
                  des PME estiment dépendre trop du bouche-à-oreille pour
                  trouver de nouveaux clients
                </p>
              </div>

              <div className={styles.quietPhone} aria-hidden="true">
                <div className={styles.phoneRow}>
                  <span className={styles.phoneLabel}>Téléphone</span>
                  <span className={styles.phoneStatus}>
                    <span className={styles.phoneDotIdle} />
                    Silencieux
                  </span>
                </div>
                <div className={styles.phoneBars}>
                  <span style={{ height: "20%" }} />
                  <span style={{ height: "30%" }} />
                  <span style={{ height: "15%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "25%" }} />
                  <span style={{ height: "20%" }} />
                  <span style={{ height: "12%" }} />
                </div>
                <span className={styles.phoneHint}>Appels — 7 derniers jours</span>
              </div>
            </div>
          </Reveal>

          <div className={styles.cardsCol}>
            {PAINS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 100}
                className={styles.card}
              >
                <span className={styles.cardNum}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardBody}>{p.body}</p>
              </Reveal>
            ))}

            <Reveal delay={350} className={styles.transitionLine}>
              <span className={styles.transitionDot} />
              <p>
                <strong>Et si tout ça pouvait s'arrêter ?</strong>{" "}
                <span>Découvrez comment.</span>
              </p>
              <ArrowRightIcon width={16} height={16} className={styles.transitionArrow} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
