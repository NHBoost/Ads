# CLAUDE.md — Landing Page Google Ads NHBoost Agency

> Ce fichier guide Claude Code dans la création d'une landing page Google Ads ultra professionnelle pour **NHBoost Agency**. Il constitue la source de vérité du projet et doit être respecté à la lettre.

---

## 🏢 Contexte du projet

| Champ | Détail |
|---|---|
| **Nom de l'agence** | NHBoost Agency |
| **Secteur** | Acquisition client, marketing digital, growth |
| **Type de page** | Landing page Google Ads (single page) |
| **Objectif unique** | Convertir les visiteurs Google Ads en prospects qualifiés via **appel téléphonique** ou **WhatsApp** |
| **Framework recommandé** | HTML / CSS / JS propre ou Next.js / React |
| **Langue du contenu** | Français |
| **Numéro de contact** | +32 496 05 32 86 |

### Activité représentée
NHBoost aide les entreprises à générer **plus de demandes qualifiées, plus de rendez-vous, plus de clients et plus de chiffre d'affaires** grâce à un système d'acquisition clé en main : stratégie, publicités, contenus, campagnes, optimisation et génération de prospects.

---

## 🎨 Identité visuelle

### Direction artistique
Premium, SaaS, moderne, minimaliste, **orientée conversion**.
Inspirations : **Stripe, Linear, Framer, Webflow**, dashboards analytics, CRM, growth agencies.

### Palette de couleurs (stricte)

```css
:root {
  --color-blue-light:  #5A9CC4;  /* bleu clair — accents, CTA secondaires, halos */
  --color-blue-dark:   #2A2E5E;  /* bleu foncé — sections sombres, fonds premium */
  --color-black:       #000000;  /* sections contrastées, profondeur */
  --color-white:       #FFFFFF;  /* fond dominant */

  /* Variantes utiles */
  --color-bg:          #FFFFFF;
  --color-bg-dark:     #2A2E5E;
  --color-bg-black:    #000000;
  --color-text:        #0A0F2C;
  --color-text-muted:  #5C6280;
  --color-text-on-dark:#FFFFFF;
  --color-border:      rgba(90, 156, 196, 0.18);
  --color-glass:       rgba(255, 255, 255, 0.06);
  --color-glow:        rgba(90, 156, 196, 0.35);
}
```

### Style graphique demandé
- Design **SaaS premium** très clean
- **Fond blanc dominant** avec sections bleu foncé / noir contrastées
- **Glassmorphism élégant** (cards semi-transparentes, backdrop-filter)
- **Bordures fines et lumineuses** (1px, glow subtil bleu clair)
- **Dégradés bleus subtils** (linear-gradient `#2A2E5E → #5A9CC4`)
- **Ombres douces** (élévation par couches, pas de drop-shadow brut)
- **Icônes modernes** (Lucide, Heroicons ou SVG sur mesure)
- **Effets de flou** (blur d'arrière-plan, formes abstraites)
- **Illustrations / images open source pro** (Unsplash, Pexels)
- Visuels qui représentent : acquisition client, publicité digitale, leads, dashboards, croissance, performance marketing

### Typographie
- **Display** : Inter, Satoshi, ou Geist (700–800) — titres
- **Body** : Inter, Geist Sans (400–500) — corps
- **Mono** : JetBrains Mono ou Geist Mono — chiffres / badges techniques

---

## 🗂️ Architecture du projet

### Option A — HTML/CSS/JS pur (recommandé pour Google Ads, légèreté max)

```
nhboost-landing/
├── index.html
├── assets/
│   ├── images/
│   │   ├── hero-dashboard.webp
│   │   ├── illustration-leads.svg
│   │   └── ...
│   ├── icons/
│   │   └── *.svg
│   └── logo/
│       └── nhboost-logo.svg
├── css/
│   ├── tokens.css       # variables CSS
│   ├── reset.css
│   ├── global.css
│   └── sections.css
├── js/
│   ├── main.js          # interactions, scroll, sticky WhatsApp
│   └── animations.js    # reveal au scroll
└── README.md
```

### Option B — Next.js (si évolutivité future)

```
nhboost-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # toutes les sections importées ici
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Benefits.tsx
│   │   ├── Method.tsx
│   │   ├── Proof.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── StatBadge.tsx
│   │   └── StickyWhatsApp.tsx
│   └── icons/
└── public/images/
```

---

## 📄 Structure de la landing page

### 1. Hero section
**Objectif :** convertir dès le premier écran.

- **Titre principal** :
  > « Multipliez votre chiffre d'affaires avec un système qui ramène des clients tous les jours. »
- **Sous-titre** :
  > « NHBoost vous génère plus de demandes qualifiées, plus de rendez-vous, plus de clients et plus de chiffre d'affaires grâce à un système d'acquisition clé en main. »
- **Texte complémentaire** :
  > « On s'occupe de tout pour vous : stratégie, publicités, contenus, campagnes, optimisation et génération de prospects. »
- **CTA primaire** : 📞 **Appeler maintenant** → `tel:+32496053286`
- **CTA secondaire** : 💬 **Envoyer un message WhatsApp** → `https://wa.me/32496053286`
- **Numéro affiché** : +32 496 05 32 86

**Design Hero :**
- Typographie display très grande (clamp 48–80px)
- Texte clair, direct, hiérarchie forte
- Boutons CTA contrastés (bleu clair sur blanc + bleu foncé)
- Visuel à droite : illustration ou screenshot d'un **dashboard marketing** (open source)
- **Formes abstraites bleues** en arrière-plan (blobs, grilles, particules SVG)
- **Card glassmorphism** flottante avec mini-stats :
  - Leads qualifiés
  - Rendez-vous
  - Croissance
  - Campagnes optimisées

---

### 2. Section problème
**Fond noir ou bleu foncé**, texte blanc, accents bleu clair.

- **Titre** : « Vous avez une bonne entreprise, mais pas assez de clients réguliers ? »
- **Texte** : « Vous dépendez encore trop du bouche-à-oreille, des recommandations ou des périodes où les demandes arrivent au hasard. »
- Cards élégantes illustrant les douleurs (dépendance bouche-à-oreille, flux instable, manque de visibilité)

---

### 3. Section solution
- **Titre** : « On installe pour vous un vrai système d'acquisition client. »
- **Texte** : « Avec NHBoost, on installe pour vous un système complet qui attire les bonnes personnes, les transforme en prospects et vous permet d'avoir plus de demandes chaque semaine. »
- **3 blocs glassmorphism** :
  1. Vous ne devez pas gérer la publicité
  2. Vous ne devez pas créer les campagnes
  3. Vous ne devez pas chercher les clients vous-même
- **Phrase forte conclusive** : « On le fait pour vous. »

Fond avec gradient bleu foncé → noir, icônes modernes.

---

### 4. Section bénéfices
- **Titre** : « Ce que NHBoost apporte à votre activité »
- **Grille de 7 cards** (3×3 ou 4+3), chacune avec icône, titre, hover léger, bordure fine lumineuse :
  - Plus de visibilité
  - Plus de demandes qualifiées
  - Plus de rendez-vous
  - Plus de clients
  - Plus de chiffre d'affaires
  - Plus de stabilité chaque mois
  - Un système fait pour votre activité

---

### 5. Section méthode
- **Titre** : « Un système simple, clair et orienté résultats. »
- **Timeline premium** (verticale sur mobile, horizontale sur desktop) avec **4 étapes** numérotées :
  1. Analyse de votre activité
  2. Création de la stratégie d'acquisition
  3. Lancement des campagnes publicitaires
  4. Optimisation continue pour générer plus de prospects
- Animation légère au scroll (reveal progressif)

---

### 6. Section preuves
- **Titre** : « Des résultats concrets, pas juste de la visibilité. »
- Emplacements à prévoir (avec placeholders propres) :
  - Avis clients (cards témoignages avec photo, nom, secteur)
  - Résultats de campagnes (graphiques / chiffres)
  - Captures de prospects (mockups discrets, anonymisés)
  - Témoignages vidéo (placeholder lecteur)
  - Chiffres clés (stat blocks animés)
  - Secteurs accompagnés (logos / badges)
- **Stat blocks placeholder** :
  - Demandes qualifiées générées
  - Campagnes optimisées chaque semaine
  - Système clé en main
  - Accompagnement personnalisé

---

### 7. Section CTA final
**Fond bleu foncé ou noir avec dégradé bleu**, glassmorphism, boutons contrastés très visibles.

- **Titre** : « Vous voulez plus de clients et plus de chiffre d'affaires ? »
- **Texte** : « Appelez NHBoost maintenant ou envoyez-nous un message sur WhatsApp. On vous dira rapidement ce qu'on peut mettre en place pour votre activité. »
- **CTA primaire** : 📞 Appeler maintenant — **+32 496 05 32 86** → `tel:+32496053286`
- **CTA secondaire** : 💬 Contacter NHBoost sur WhatsApp → `https://wa.me/32496053286`

---

## 🎯 Exigences Google Ads (non négociables)

- ✅ Message clair dès le **premier écran** (above the fold)
- ✅ **CTA visible immédiatement** (Hero + sticky)
- ✅ **Pas de menu de navigation complexe** (ou navigation minimale, ancres uniquement)
- ✅ **Aucune distraction** (pas de liens sortants, pas de pop-up, pas de chat tiers superflu)
- ✅ **Chargement rapide** : LCP < 2.5s, score Lighthouse Perf > 90
- ✅ **Bouton WhatsApp sticky** en bas à droite, présent sur toutes les sections
- ✅ Formulaire / CTA simples, friction minimale
- ✅ Structure claire et imposée : **problème → solution → bénéfices → méthode → preuve → action**
- ✅ Trust signals visibles (numéro, témoignages, chiffres)
- ✅ Conformité Google Ads : page transparente sur l'identité (footer avec mentions légales, contact, lien politique de confidentialité)

---

## 📱 Responsive (obligatoire)

Breakpoints cibles :
- **Mobile** : 360px, 375px, 414px (priorité absolue — la majorité du trafic Google Ads)
- **Tablette** : 768px, 1024px
- **Desktop** : 1280px, 1440px, 1920px

Règles mobile :
- CTA primaire **toujours visible** (Hero + sticky bottom)
- Sections aérées (padding vertical généreux, 64–96px)
- Texte lisible (16px min body, 32px+ pour H1)
- **Bouton WhatsApp sticky** bas à droite, persistant
- Hero compact, CTA dans le premier viewport sans scroll
- Touch targets ≥ 44×44px
- Pas de hover-only (tout fonctionne au tap)

---

## 🖼️ Images & ressources

### Sources autorisées
- [Unsplash](https://unsplash.com) — photos pro
- [Pexels](https://www.pexels.com) — photos pro
- [unDraw](https://undraw.co) — illustrations SVG personnalisables
- [Storyset](https://storyset.com) — illustrations animées
- [Lucide](https://lucide.dev) / [Heroicons](https://heroicons.com) — icônes SVG

### Thèmes visuels à privilégier
- Marketing digital
- Campagnes publicitaires
- Dashboard de performance / analytics
- Acquisition client
- Croissance business (courbes, graphiques)
- Génération de prospects
- Équipe professionnelle

### À éviter
- Images stock trop génériques (poignées de main corporate, business smiles forcés)
- Visuels datés ou trop "agence web 2015"
- Illustrations enfantines / cartoon
- Photos basse qualité

### Format
- **WebP** ou **AVIF** prioritaires
- SVG pour icônes / illustrations
- `loading="lazy"` sauf Hero
- `width` / `height` toujours définis (pas de CLS)

---

## ⚡ Performance & SEO

- Score Lighthouse cible : **≥ 90** sur toutes les métriques
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- CSS critique inliné dans `<head>`
- Polices préchargées (`<link rel="preload">`)
- Pas de JS bloquant
- Images optimisées (WebP/AVIF, srcset, lazy loading)
- **Meta tags complets** : title, description, og:image, og:title, og:description, twitter:card, canonical
- `sitemap.xml` + `robots.txt`
- Données structurées JSON-LD (`LocalBusiness` ou `Organization`)
- Tag Google Ads + conversion tracking (placeholder à intégrer)

---

## ♿ Accessibilité

- Contraste WCAG **AA minimum** (texte sur fond sombre = vigilance particulière)
- Navigation clavier complète
- `aria-label` sur tous les boutons icônes (téléphone, WhatsApp)
- Balises sémantiques : `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`
- `alt` descriptif sur toutes les images
- Focus visible (outline custom, pas `outline: none` sans remplacement)

---

## 🔗 Liens de contact (à intégrer partout)

```html
<!-- Appel -->
<a href="tel:+32496053286">+32 496 05 32 86</a>

<!-- WhatsApp -->
<a href="https://wa.me/32496053286" target="_blank" rel="noopener">
  Contacter sur WhatsApp
</a>
```

### Bouton WhatsApp sticky (mobile + desktop)
- Position : `fixed; bottom: 20px; right: 20px;`
- Z-index élevé
- Icône WhatsApp officielle (SVG)
- Pulsation légère ou halo bleu clair
- `aria-label="Contacter NHBoost sur WhatsApp"`

---

## 🧱 Composants UI clés à créer

| Composant | Description |
|---|---|
| `Button` | Primary (bleu clair plein), Secondary (bleu foncé outline), Ghost. Tailles : sm / md / lg |
| `GlassCard` | Card avec `backdrop-filter: blur(20px)`, bordure 1px lumineuse, fond `rgba(255,255,255,0.06)` |
| `StatBlock` | Chiffre clé + label, animation count-up au scroll |
| `Badge` | Pill avec icône, fond translucide |
| `SectionTitle` | Eyebrow + H2 + sous-titre, cohérent partout |
| `StickyWhatsApp` | FAB persistant bas-droite |
| `TimelineStep` | Étape numérotée avec icône, titre, description |
| `TestimonialCard` | Photo, nom, secteur, citation, étoiles |

---

## 📌 Conventions de code

- **Langue du code** : anglais (variables, classes, commentaires)
- **Langue du contenu visible** : français
- **CSS** : custom properties, BEM ou utility-classes maison (pas de Tailwind sauf demande explicite)
- **JS** : vanilla moderne (ES2022+) ou React/Next selon option choisie, pas de jQuery
- **Nommage composants** : PascalCase
- **Commits** : Conventional Commits (`feat:`, `fix:`, `style:`, `perf:`, `content:`)
- **Pas de dépendances superflues** (la légèreté = condition Google Ads)

---

## ✅ Checklist avant livraison

- [ ] Hero impactant avec CTA visible sans scroll
- [ ] Numéro +32 496 05 32 86 cliquable partout (`tel:`)
- [ ] Lien WhatsApp `wa.me/32496053286` cliquable partout
- [ ] Bouton WhatsApp sticky fonctionnel mobile + desktop
- [ ] Toutes les sections (1 → 7) présentes et dans l'ordre
- [ ] Palette respectée à 100% (#5A9CC4 / #2A2E5E / #000 / #FFF)
- [ ] Glassmorphism + bordures lumineuses appliqués
- [ ] Images open source intégrées, optimisées WebP/AVIF
- [ ] Responsive parfait : 360 / 375 / 768 / 1024 / 1280 / 1440px
- [ ] Lighthouse ≥ 90 (Perf / A11y / SEO / Best Practices)
- [ ] Meta tags + OG image + favicon
- [ ] Tracking conversion Google Ads (placeholder prêt)
- [ ] Mentions légales / politique de confidentialité (footer)
- [ ] Aucun lien sortant qui distrait du CTA
- [ ] Test réel du clic `tel:` sur mobile
- [ ] Test réel du clic WhatsApp sur mobile

---

## 🚀 Livrable attendu

Une **landing page complète** :
- HTML / CSS / JS propre, **ou** React / Next.js
- Code clair, responsive, bien structuré
- Classes nommées proprement
- Facile à modifier (sections isolées, variables CSS centralisées)
- **Optimisée pour une campagne Google Ads** (vitesse, conversion, clarté)
- Prête à être déployée (Vercel, Netlify, hébergement statique)

---

*Source de vérité unique — toute modification de scope passe par une mise à jour de ce fichier.*
*Dernière mise à jour : 2026-06-19.*
