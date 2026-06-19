import Reveal from "./Reveal";
import {
  MegaphoneIcon,
  TargetIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckIcon,
  CompassIcon,
  ZapIcon,
  CalendarIcon,
} from "./icons";
import styles from "./Solution.module.css";

const BLOCKS = [
  {
    icon: <MegaphoneIcon />,
    before: "Vous ne devez pas gérer la publicité",
    after: "On pilote Google Ads, Meta Ads et toutes les plateformes.",
  },
  {
    icon: <TargetIcon />,
    before: "Vous ne devez pas créer les campagnes",
    after: "Visuels, copywriting, ciblage : on construit chaque campagne.",
  },
  {
    icon: <UsersIcon />,
    before: "Vous ne devez pas chercher les clients vous-même",
    after: "Les prospects arrivent directement à vous, prêts à être contactés.",
  },
];

export default function Solution() {
  return (
    <section className={styles.solution} id="solution">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.gradient} />
        <div className={styles.mesh} />
        <div className={styles.gridLines} />
      </div>

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>La solution</span>
          <h2 className={styles.title}>
            On installe pour vous un vrai{" "}
            <span className={styles.accent}>système d'acquisition client.</span>
          </h2>
          <p className={styles.lead}>
            Avec NHBoost, on installe pour vous un système complet qui attire les
            bonnes personnes, les transforme en prospects et vous permet d'avoir
            plus de demandes chaque semaine.
          </p>
        </Reveal>

        <Reveal className={styles.pipelineCard}>
          <div className={styles.pipelineHeader}>
            <span className={styles.pipelineLabel}>
              <CompassIcon width={14} height={14} />
              Le système NHBoost en un schéma
            </span>
            <span className={styles.pipelineStatus}>
              <span className={styles.statusDot} />
              Opérationnel 24/7
            </span>
          </div>

          <div className={styles.pipeline}>
            <div className={styles.stage}>
              <div className={styles.stageHead}>
                <span className={styles.stageNum}>01</span>
                <span className={styles.stageTitle}>
                  Sources publicitaires
                </span>
              </div>
              <div className={styles.stageBody}>
                <div className={styles.sourceRow}>
                  <span className={`${styles.sourceLogo} ${styles.logoGoogle}`}>
                    G
                  </span>
                  <span className={styles.sourceName}>Google Ads</span>
                  <span className={styles.sourceBar}>
                    <span style={{ width: "85%" }} />
                  </span>
                </div>
                <div className={styles.sourceRow}>
                  <span className={`${styles.sourceLogo} ${styles.logoMeta}`}>
                    M
                  </span>
                  <span className={styles.sourceName}>Meta Ads</span>
                  <span className={styles.sourceBar}>
                    <span style={{ width: "72%" }} />
                  </span>
                </div>
                <div className={styles.sourceRow}>
                  <span className={`${styles.sourceLogo} ${styles.logoLi}`}>
                    in
                  </span>
                  <span className={styles.sourceName}>LinkedIn Ads</span>
                  <span className={styles.sourceBar}>
                    <span style={{ width: "48%" }} />
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.connector} aria-hidden="true">
              <span className={styles.connectorLine} />
              <span className={styles.connectorPulse} />
              <span className={styles.connectorPulse2} />
              <span className={styles.connectorArrow}>→</span>
            </div>

            <div className={`${styles.stage} ${styles.stageEngine}`}>
              <div className={styles.engineGlow} aria-hidden="true" />
              <div className={styles.stageHead}>
                <span className={`${styles.stageNum} ${styles.stageNumLight}`}>
                  02
                </span>
                <span className={styles.stageTitle}>NHBoost — moteur</span>
              </div>
              <div className={styles.engineCore}>
                <div className={styles.engineLogo}>
                  <span>NH</span>
                </div>
                <ul className={styles.engineTasks}>
                  <li>
                    <CheckIcon width={12} height={12} /> Stratégie
                  </li>
                  <li>
                    <CheckIcon width={12} height={12} /> Ciblage
                  </li>
                  <li>
                    <CheckIcon width={12} height={12} /> Tracking
                  </li>
                  <li>
                    <CheckIcon width={12} height={12} /> Optimisation
                  </li>
                </ul>
              </div>
              <div className={styles.engineFooter}>
                <ZapIcon width={12} height={12} />
                <span>On gère tout pour vous</span>
              </div>
            </div>

            <div className={styles.connector} aria-hidden="true">
              <span className={styles.connectorLine} />
              <span className={styles.connectorPulse} />
              <span className={styles.connectorPulse2} />
              <span className={styles.connectorArrow}>→</span>
            </div>

            <div className={`${styles.stage} ${styles.stageOutput}`}>
              <div className={styles.stageHead}>
                <span className={styles.stageNum}>03</span>
                <span className={styles.stageTitle}>Vos prospects</span>
              </div>
              <div className={styles.stageBody}>
                <div className={styles.leadRow}>
                  <span className={styles.leadAvatar}>K</span>
                  <span className={styles.leadInfo}>
                    <span className={styles.leadName}>Karim B.</span>
                    <span className={styles.leadMeta}>RDV demain 10h</span>
                  </span>
                  <span className={styles.leadDot} />
                </div>
                <div className={styles.leadRow}>
                  <span className={styles.leadAvatar}>S</span>
                  <span className={styles.leadInfo}>
                    <span className={styles.leadName}>Sophie L.</span>
                    <span className={styles.leadMeta}>Devis demandé</span>
                  </span>
                  <span className={styles.leadDot} />
                </div>
                <div className={styles.leadRow}>
                  <span className={styles.leadAvatar}>M</span>
                  <span className={styles.leadInfo}>
                    <span className={styles.leadName}>Mehdi A.</span>
                    <span className={styles.leadMeta}>Appel à recontacter</span>
                  </span>
                  <span className={styles.leadDot} />
                </div>
              </div>
              <div className={styles.outputFooter}>
                <CalendarIcon width={12} height={12} />
                <span>+47 prospects cette semaine</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.blocks}>
          {BLOCKS.map((b, i) => (
            <Reveal key={b.before} delay={i * 100} className={styles.block}>
              <div className={styles.iconWrap}>{b.icon}</div>
              <div className={styles.blockContent}>
                <span className={styles.blockBefore}>
                  <span className={styles.crossOut}>{b.before}</span>
                </span>
                <span className={styles.blockAfter}>
                  <span className={styles.checkBadge}>
                    <CheckIcon width={12} height={12} />
                  </span>
                  {b.after}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.strong}>
          <div className={styles.strongInner}>
            <span className={styles.strongLabel}>
              <ZapIcon width={12} height={12} />
              Promesse
            </span>
            <p className={styles.strongLine}>
              On le fait <em>pour vous.</em>
            </p>
            <p className={styles.strongSub}>
              Vous gardez votre temps. On vous ramène les clients.
            </p>
            <a href="#contact" className={styles.strongCta}>
              Parlons de votre activité{" "}
              <ArrowRightIcon width={18} height={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
