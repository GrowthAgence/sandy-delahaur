# SDL Agency — Design System

Source of truth pour le design du site sandy-delahaur.vercel.app.

## Typographie

| Token | Font | Usage |
|-------|------|-------|
| `font-headline` | Playfair Display | Titres, h1-h3, citations visuelles |
| `font-body` | Manrope | Body text, labels, boutons, navigation |

### Règles typographiques
- **h1 hero** : `font-headline font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter`
- **h2 section** : `font-headline font-black text-3xl md:text-5xl leading-[1.1] tracking-tighter`
- **Labels / surtitre** : `font-body text-[10px] uppercase tracking-[0.3em] text-primary`
- **Body text** : `font-body text-lg leading-relaxed font-light`
- **Boutons** : `font-body text-[10px] uppercase tracking-[0.2em] font-bold`
- **Accent doré** : `text-gold-gradient italic` — toujours sur un `<span>`, jamais italic sur le h1 entier

## Couleurs

### Surface (fond sombre)
| Token | Hex | Usage |
|-------|-----|-------|
| `surface` | `#131313` | Fond principal |
| `surface-dim` | `#131313` | Fond sombre identique |
| `surface-container-lowest` | `#0e0e0e` | Sections rupture visuelle (déclencheur, vision) |
| `surface-container-low` | `#1b1b1b` | Sections alternées |
| `surface-container` | `#1f1f1f` | Cards, blocs citation |
| `surface-container-high` | `#2a2a2a` | Cards élevées, blocs forts |
| `surface-container-highest` | `#353535` | Éléments les plus élevés |

### Gold / Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#f2ca50` | Accents, labels, icônes, texte doré |
| `primary-container` | `#d4af37` | Logo, variante dorée |
| `on-primary` | `#3c2f00` | Texte sur fond doré (boutons shimmer) |

### Texte
| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` | `#e2e2e2` | Texte principal |
| `on-surface-variant` | `#d0c5af` | Texte secondaire, descriptions |
| `outline` | `#99907c` | Liens nav, texte tertiaire |
| `outline-variant` | `#4d4635` | Bordures subtiles |

## Effets CSS

### `.text-gold-gradient`
Gradient doré 135deg avec background-clip text. Padding bottom + right pour éviter le crop des italiques.

### `.btn-shimmer`
Bouton doré avec animation shimmer infinie (gradient 90deg animé sur 4s).

### `.card-depth`
Ombres profondes pour les cards (`box-shadow: 0 30px 60px...`).

### `.gold-border-subtle`
Bordure dorée à 15% opacité (`border: 1px solid rgba(212, 175, 55, 0.15)`).

### `.card-hover-state`
Transition 0.8s avec translateY(-10px), scale(1.02), bordure dorée renforcée.

### `.breath-accent`
Animation respiration 3s pour le logo (opacity + scale).

## Composants

### Navbar
- Fixed top, backdrop-blur, liens : Wake, Shift, Shine, Événements, Mon approche, Contact
- CTA "Réserver mon audit stratégique" doré shimmer
- Menu mobile hamburger

### Hero Section
Photo Sandy positionnée à droite (55% width, `object-cover object-right-top`), overlay gradient minimal (`from-surface to-transparent`). Texte à gauche sur `max-w-4xl`. Dual CTA : outline (Explorer) + shimmer (Réserver).

### Partenaires (bandeau défilant)
Motion animate `x: ["0%", "-50%"]` en boucle 25s, noms dupliqués pour seamless loop, fondu gradient latéral.

### RevealOnScroll
Composant d'animation scroll-triggered (motion/react `whileInView`). Accepte `delay` et `className`.

### WordReveal
Animation mot par mot scroll-triggered. Chaque mot apparaît avec slide-up + blur qui se dissipe, en cascade (stagger). Props : `children` (string), `delay`, `stagger` (défaut 0.08s), `wordClassName`. Utilisé sur Punchline et CTA final.

### Footer
3 colonnes programmes (Wake/Shift/Shine), Sandy CEO, liens légaux.

## Layout

### Containers
- Standard : `container mx-auto px-6 md:px-12`
- Content max : `max-w-4xl` (heroes, texte), `max-w-3xl` (storytelling), `max-w-screen-2xl` (grilles)

### Espacements sections
- Standard : `py-24 md:py-32`
- Hero : `min-h-dvh` avec `pt-24` pour la navbar

### Grilles
- Cards : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Résultats : `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Bento : `grid grid-cols-1 md:grid-cols-12` avec spans variables
- 4 colonnes : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`

## Patterns de contenu

### Citation visuelle / Punchline
Bloc isolé centré, `font-headline italic font-light`, WordReveal, séparateur gold 24px.

### Blocs distincts (forces, piliers)
Cards avec icône SVG + titre + description, fond `surface` ou `surface-container-high`, bordure `gold-border-subtle`.

### Méthode SDL (3 colonnes)
Cards détaillées : phase label, nom uppercase tracking-widest, tagline gold, question italique, contexte, liste items ✓, lien Découvrir. Card centrale élevée (`md:-translate-y-8`).

### Résultats (grille compacte)
Cards `p-6` avec checkmark gold + texte court, `gold-border-subtle`, `card-hover-state`.

### CTA dual
Bouton outline (border primary/30, hover bg-primary/10) + bouton shimmer doré. Flex row avec gap-4.

### CTA de fin de page
Sections CTA avec WordReveal sur titre + sous-titre + bouton(s). Le titre se révèle mot par mot au scroll, le sous-titre suit, puis le bouton slide-up.

### Alternance fond
Alterner `bg-surface` → `bg-surface-container-low` → `bg-surface` pour la rupture visuelle entre sections.

## Médias

### Images
- Répertoire : `/public/images/`
- Format : PNG/WebP optimisé
- Hero : positionnée absolute right, `object-cover object-right-top` avec overlay gradient

### Vidéos
- Répertoire : `/public/videos/`
- Compression : ffmpeg CRF 23, preset slow, 720px, sans audio, faststart
- Intégration : `<video autoPlay loop muted playsInline className="object-cover">`
