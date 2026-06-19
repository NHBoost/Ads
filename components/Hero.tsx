import {
  PhoneIcon,
  WhatsAppIcon,
  TrendIcon,
  StarIcon,
  CheckIcon,
  MonitorIcon,
  SearchGlyph,
  GoogleGIcon,
  ArrowRightIcon,
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
              <span className={styles.previewTab}>
                <MonitorIcon width={14} height={14} />
                Ordinateur
              </span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.searchBar}>
                <GoogleGIcon className={styles.googleG} />
                <span className={styles.searchQuery}>
                  agence google ads bruxelles
                </span>
                <SearchGlyph
                  className={styles.searchGlyph}
                  width={18}
                  height={18}
                />
              </div>

              <div className={styles.adResult}>
                <div className={styles.adTopRow}>
                  <span className={styles.adBadge}>Annonce</span>
                  <ArrowRightIcon
                    className={styles.adRowArrow}
                    width={16}
                    height={16}
                  />
                </div>

                <div className={styles.adUrlRow}>
                  <span className={styles.adFavicon} aria-hidden="true">
                    <span className={styles.faviconLetter}>N</span>
                  </span>
                  <span className={styles.adUrl}>www.nhboost.be</span>
                </div>

                <h3 className={styles.adTitle}>
                  Agence Google Ads Bruxelles | Plus de Clients
                </h3>

                <p className={styles.adDescription}>
                  Multipliez votre chiffre d'affaires avec des campagnes Google
                  Ads optimisées. NHBoost génère plus de demandes qualifiées,
                  plus de rendez-vous et plus de clients.
                </p>

                <div className={styles.adSitelinks}>
                  <span>Google Ads</span>
                  <span className={styles.sitelinkDot}>·</span>
                  <span>Prospects qualifiés</span>
                  <span className={styles.sitelinkDot}>·</span>
                  <span>Campagnes</span>
                  <span className={styles.sitelinkDot}>·</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className={styles.previewMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>1 248</span>
                  <span className={styles.metricLabel}>Leads / mois</span>
                </div>
                <div className={styles.metricSep} />
                <div className={styles.metric}>
                  <span className={styles.metricValue}>312</span>
                  <span className={styles.metricLabel}>Rendez-vous</span>
                </div>
                <div className={styles.metricSep} />
                <div className={styles.metric}>
                  <span className={styles.metricValue}>×3,2</span>
                  <span className={styles.metricLabel}>ROI</span>
                </div>
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
              <span className={styles.mobileAdBadge}>Annonce</span>
              <div className={styles.mobileUrlRow}>
                <span className={styles.mobileFavicon}>N</span>
                <span className={styles.mobileUrl}>nhboost.be</span>
              </div>
              <h4 className={styles.mobileTitle}>
                Agence Google Ads Bruxelles | Prospects Qualifiés
              </h4>
              <p className={styles.mobileDesc}>
                NHBoost crée, gère et optimise vos campagnes Google Ads pour
                générer plus de demandes qualifiées à Bruxelles.
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
