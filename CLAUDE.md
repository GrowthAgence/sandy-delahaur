@AGENTS.md

# Sandy Delahaur

## Stack
- Next.js 16, Tailwind v4, Motion, Vercel
- GitHub: GrowthAgence/sandy-delahaur
- URL: https://sandy-delahaur.vercel.app

## Design System
- Voir `DESIGN.md` pour la source of truth complète (couleurs, typo, composants, patterns)
- Fonts : Playfair Display (headline) + Manrope (body)
- Palette : dark surface (#131313) + gold primary (#f2ca50 / #d4af37)

## Pages
- `/` — Homepage (Hero + Problème + Méthode + Citation + Portes + Réassurance + Témoignages + CTA)
- `/wake` — Phase Wake (index + 5 sous-pages)
- `/shift` — Phase Shift (index + 3 sous-pages)
- `/shine` — Phase Shine (index + 3 sous-pages)
- `/evenements` — Modern Social Club
- `/entreprises` — B2B Solutions
- `/a-propos` — À propos de Sandy (storytelling 8 sections)

## Conventions
- Langue du site : FR
- SSG par défaut (export const dynamic = 'force-static' si besoin)
- Images optimisées dans /public/images/
- Vidéos compressées dans /public/videos/
- Composants réutilisables dans /src/components/
- Sections homepage dans /src/components/sections/
- Jamais de `Co-Authored-By: Claude` dans les commits

## Hero Pattern (IMPORTANT)
Tous les heroes doivent suivre exactement ce pattern :
```
section: min-h-dvh flex items-center pt-24 overflow-hidden bg-surface
container: container mx-auto px-6 md:px-12
wrapper: max-w-4xl
label: font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block
h1: font-headline font-black mb-8 leading-[1.1] tracking-tighter text-white text-4xl md:text-6xl lg:text-7xl
accent: text-gold-gradient italic (sur span uniquement, jamais italic sur le h1)
subtitle: font-body text-on-surface-variant max-w-xl text-lg mb-10 leading-relaxed font-light
```

## Animations
- `RevealOnScroll` : fade-in + slide-up au scroll (motion/react whileInView)
- `WordReveal` : mot par mot avec blur + slide-up au scroll — utilisé sur tous les CTA de fin de page (titre + sous-titre + boutons)
- Ne pas utiliser les deux sur le même élément (WordReveal remplace RevealOnScroll pour le texte)

## ESLint
- Flat config (`eslint.config.mjs`), pas de `.eslintignore`
- `.claude/**` dans globalIgnores pour exclure les worktrees agents
