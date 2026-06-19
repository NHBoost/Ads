import {
  PhoneIcon,
  WhatsAppIcon,
  TrendIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon,
  EyeIcon,
  ClickIcon,
  VideoIcon,
  HeartIcon,
  MegaphoneIcon,
} from "./icons";
import styles from "./Hero.module.css";

const SPARKLINE_GROWTH = "M0,18 L8,14 L16,16 L24,10 L32,12 L40,6 L48,4";

function Sparkline({ d, color = "#22c55e" }: { d: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 20" className={styles.spark} aria-hidden="true">
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.aurora1} />
        <div className={styles.aurora2} />
        <div className={styles.aurora3} />
        <div className={styles.spotlight} />
        <div className={styles.grid} />
        <div className={styles.noise} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.eyebrowRow}>
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} />
              <span>Disponible maintenant</span>
              <span className={styles.liveSep} aria-hidden="true">
                •
              </span>
              <span className={styles.liveSub}>Réponse en moins de 15 min</span>
            </span>
          </div>

          <h1 className={styles.title}>
            Multipliez votre{" "}
            <span className={styles.highlight}>chiffre d'affaires</span>{" "}
            avec un système qui ramène des clients{" "}
            <em className={styles.shine}>tous les jours.</em>
          </h1>

          <p className={styles.subtitle}>
            NHBoost vous génère plus de demandes qualifiées, plus de rendez-vous,
            plus de clients et plus de chiffre d'affaires grâce à un système
            d'acquisition clé en main.
          </p>

          <p className={styles.complement}>
            On s'occupe de tout pour vous : stratégie, publicités, contenus,
            campagnes, optimisation et génération de prospects.
          </p>

          <div className={styles.ctas}>
            <a
              href="tel:+32496053286"
              className={styles.ctaPrimary}
              aria-label="Appeler NHBoost maintenant au +32 496 05 32 86"
            >
              <PhoneIcon width={20} height={20} />
              <span className={styles.ctaInner}>
                <span className={styles.ctaTop}>Appeler maintenant</span>
                <span className={styles.ctaBottom}>+32 496 05 32 86</span>
              </span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="https://wa.me/32496053286"
              target="_blank"
              rel="noopener"
              className={styles.ctaSecondary}
              aria-label="Envoyer un message WhatsApp à NHBoost"
            >
              <WhatsAppIcon width={20} height={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.stars} aria-label="Note clients 4.9 sur 5">
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
                <StarIcon className={styles.starIcon} />
              </span>
              <span className={styles.trustText}>
                <strong>4,9/5</strong> retours clients
              </span>
            </div>
            <span className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustCheck}>
                <CheckIcon width={12} height={12} />
              </span>
              <span className={styles.trustText}>Sans engagement</span>
            </div>
            <span className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustCheck}>
                <CheckIcon width={12} height={12} />
              </span>
              <span className={styles.trustText}>Devis en 24h</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.adPreview} aria-hidden="true">
            <div className={styles.previewChrome}>
              <span className={styles.dot1} />
              <span className={styles.dot2} />
              <span className={styles.dot3} />
              <span className={styles.studioBrand}>
                <VideoIcon width={14} height={14} />
                NHBoost Studio
              </span>
              <span className={styles.liveTag}>
                <span className={styles.liveTagDot} />
                Live
              </span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.videoBlock}>
                <div className={styles.videoLabel}>
                  <MegaphoneIcon width={12} height={12} />
                  Vidéo publicitaire — Campagne active
                </div>
                <div className={styles.videoPlayer}>
                  <div className={styles.videoThumb}>
                    <div className={styles.videoOverlay} />
                    <div className={styles.videoSparkles}>
                      <span style={{ top: "18%", left: "22%" }} />
                      <span style={{ top: "62%", left: "78%" }} />
                      <span style={{ top: "40%", left: "55%" }} />
                    </div>
                    <button
                      type="button"
                      className={styles.playBtn}
                      aria-label="Lire la vidéo"
                    >
                      <PlayIcon width={22} height={22} />
                    </button>
                    <span className={styles.videoSponsored}>Sponsorisé</span>
                    <span className={styles.videoDuration}>0:30</span>
                  </div>
                </div>
                <div className={styles.videoStats}>
                  <span className={styles.vStat}>
                    <EyeIcon width={14} height={14} />
                    <strong>12,4K</strong> vues
                  </span>
                  <span className={styles.vStat}>
                    <HeartIcon width={14} height={14} />
                    <strong>8,2%</strong> engagement
                  </span>
                  <span className={`${styles.vStat} ${styles.vStatHighlight}`}>
                    <ClickIcon width={14} height={14} />
                    <strong>+247</strong> clics
                  </span>
                </div>
              </div>

              <div className={styles.platformsBlock}>
                <span className={styles.platformsLabel}>
                  Diffusion multi-plateformes
                </span>
                <div className={styles.platformsRow}>
                  <span className={`${styles.platformPill} ${styles.platG}`}>
                    <span className={styles.platLogo}>G</span> Google Ads
                  </span>
                  <span className={`${styles.platformPill} ${styles.platM}`}>
                    <span className={styles.platLogo}>M</span> Meta
                  </span>
                  <span className={`${styles.platformPill} ${styles.platL}`}>
                    <span className={styles.platLogo}>in</span> LinkedIn
                  </span>
                  <span className={`${styles.platformPill} ${styles.platT}`}>
                    <span className={styles.platLogo}>♪</span> TikTok
                  </span>
                </div>
              </div>

              <div className={styles.leadsBlock}>
                <div className={styles.leadsHeader}>
                  <span className={styles.leadsTitle}>
                    Leads générés <span className={styles.leadsLiveDot} />
                  </span>
                  <span className={styles.leadsTotal}>+47 cette semaine</span>
                </div>
                <ul className={styles.leadsList}>
                  <li className={styles.leadItem}>
                    <span className={styles.leadAv}>M</span>
                    <span className={styles.leadDetail}>
                      <span className={styles.leadName}>Marie D.</span>
                      <span className={styles.leadMeta}>
                        Formulaire complété
                      </span>
                    </span>
                    <span className={styles.leadTime}>il y a 2 min</span>
                  </li>
                  <li className={styles.leadItem}>
                    <span className={styles.leadAv}>K</span>
                    <span className={styles.leadDetail}>
                      <span className={styles.leadName}>Karim B.</span>
                      <span className={styles.leadMeta}>
                        Appel demandé
                      </span>
                    </span>
                    <span className={styles.leadTime}>il y a 4 min</span>
                  </li>
                  <li className={styles.leadItem}>
                    <span className={styles.leadAv}>S</span>
                    <span className={styles.leadDetail}>
                      <span className={styles.leadName}>Sophie L.</span>
                      <span className={styles.leadMeta}>Devis demandé</span>
                    </span>
                    <span className={styles.leadTime}>il y a 8 min</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.mobilePreview} aria-hidden="true">
            <div className={styles.mobileChrome}>
              <span className={styles.mobileTab}>
                <PhoneIcon width={12} height={12} />
                Mobile
              </span>
            </div>
            <div className={styles.mobileBody}>
              <div className={styles.mobileVideo}>
                <div className={styles.mobileVideoOverlay} />
                <button
                  type="button"
                  className={styles.mobilePlay}
                  aria-label="Lire la vidéo"
                >
                  <PlayIcon width={16} height={16} />
                </button>
                <span className={styles.mobileSponsored}>Sponsorisé</span>
              </div>
              <h4 className={styles.mobileTitle}>
                Multipliez vos clients avec NHBoost
              </h4>
              <p className={styles.mobileDesc}>
                Vidéo, pub, génération de leads — on s'occupe de tout pour vous.
              </p>
              <button className={styles.mobileCta} type="button">
                <PhoneIcon width={14} height={14} />
                Appelez-nous directement
              </button>
            </div>
          </div>

          <div className={styles.floatGrowth} aria-hidden="true">
            <div className={styles.floatGrowthHead}>
              <span className={styles.floatBig}>+38%</span>
              <Sparkline d={SPARKLINE_GROWTH} />
            </div>
            <span className={styles.floatSmall}>demandes / semaine</span>
            <TrendIcon
              className={styles.floatTrendIcon}
              width={14}
              height={14}
            />
          </div>
        </div>
      </div>

      <div className={styles.partners}>
        <div className={`container ${styles.partnersInner}`}>
          <span className={styles.partnersLabel}>
            Conçu pour les secteurs qui veulent grandir
          </span>
          <ul className={styles.partnerList}>
            <li>Rénovation</li>
            <li>Coaching</li>
            <li>Santé</li>
            <li>Immobilier</li>
            <li>B2B</li>
            <li>E-commerce</li>
            <li>Restauration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
