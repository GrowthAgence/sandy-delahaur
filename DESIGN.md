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
- Fixed top, backdrop-blur, liens : Wake, Shift, Shine, Événements, Entreprises, Sandy
- CTA "Réserver" doré shimmer
- Menu mobile hamburger

### Hero Section (pattern standardisé)
```
section.min-h-dvh.flex.items-center.pt-24.overflow-hidden.bg-surface
  div.container.mx-auto.px-6.md:px-12.relative.z-10
    div.max-w-4xl
      RevealOnScroll → span.label
      RevealOnScroll → h1.font-headline.font-black (accent dans span.text-gold-gradient.italic)
      RevealOnScroll → p.subtitle
```

### RevealOnScroll
Composant d'animation scroll-triggered (motion/react `whileInView`). Accepte `delay` et `className`.

### WordReveal
Animation mot par mot scroll-triggered. Chaque mot apparaît avec slide-up + blur qui se dissipe, en cascade (stagger). Props : `children` (string), `delay`, `stagger` (défaut 0.08s), `wordClassName`. Utilisé sur tous les titres et boutons des sections CTA de fin de page.

### Footer
Composant global partagé entre toutes les pages.

## Layout

### Containers
- Standard : `container mx-auto px-6 md:px-12`
- Content max : `max-w-4xl` (heroes, texte), `max-w-3xl` (storytelling), `max-w-screen-2xl` (grilles)

### Espacements sections
- Standard : `py-24 md:py-32`
- Hero : `min-h-dvh` avec `pt-24` pour la navbar

### Grilles
- Cards : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Bento : `grid grid-cols-1 md:grid-cols-12` avec spans variables
- 4 colonnes : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`

## Patterns de contenu

### Citation visuelle
Bloc isolé avec fond `surface-container-high`, bordure `gold-border-subtle`, padding large, texte `font-headline font-black italic` centré.

### Chiffres clés
Grille 2x2 ou 4 colonnes, chiffre en `font-headline font-black text-3xl md:text-4xl text-primary`, label en `font-body text-sm uppercase tracking-widest`.

### Blocs distincts (forces, piliers)
Cards avec icône SVG + titre + description, fond `surface` ou `surface-container-high`, bordure `gold-border-subtle`.

### CTA de fin de page
Sections CTA avec WordReveal sur titre + sous-titre + bouton(s). Le titre se révèle mot par mot au scroll, le sous-titre suit, puis le bouton slide-up (RevealOnScroll) avec texte WordReveal. Présent sur 14 pages (homepage, wake/*, shift/*, shine/*, a-propos).

### Alternance fond
Alterner `bg-surface` → `bg-surface-container-low` → `bg-surface-container-lowest` pour la rupture visuelle entre sections.

## Médias

### Images
- Répertoire : `/public/images/`
- Format : PNG/WebP optimisé
- Hero : `object-cover` en position absolute avec overlay gradient

### Vidéos
- Répertoire : `/public/videos/`
- Compression : ffmpeg CRF 23, preset slow, 720px, sans audio, faststart
- Intégration : `<video autoPlay loop muted playsInline className="object-cover">`
