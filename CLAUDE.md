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
- `/` — Homepage (Hero + Partenaires + Constat + Lead Magnet + Méthode SDL + Résultats + Audit & Analyse + Punchline + Newsletter + Sandy + Témoignages + CTA)
- `/wake` — Phase Wake (index + 5 sous-pages)
- `/shift` — Phase Shift (index + 3 sous-pages)
- `/shine` — Phase Shine (index + 3 sous-pages)
- `/evenements` — Modern Social Club
- `/entreprises` — B2B Solutions
- `/a-propos` — À propos de Sandy (storytelling 8 sections)

## Homepage (refonte 28/04/2026)
### Sections (ordre)
1. **Hero** — photo Sandy calée à droite (55% width, overlay gradient minimal), dual CTA (Explorer l'écosystème + Réserver mon audit stratégique), subtitle "Structure. Croissance. Connexions. Décisions.", 2 paragraphes (entrepreneurs/dirigeants + organisations)
2. **Partenaires** — bandeau défilant automatique (motion animate x loop), 10 noms partenaires, fondu latéral
3. **Constat** — vouvoiement, 3 paragraphes, mot "système" en gold
4. **Lead Magnet** — mini-audit "Passer de 1000 idées → 1 système rentable", CTA "Démarrer ton mini-audit" (placeholder #)
5. **Méthode SDL** — 3 colonnes détaillées (Wake/Shift/Shine), chaque colonne : phase label, tagline, question italique, contexte, items ✓, lien Découvrir. Shift élevé (-translate-y-8)
6. **Résultats** — grille 4 colonnes, 8 items avec checkmarks
7. **Audit & Analyse** — argumentaire + bloc citation encadré + CTA audit stratégique
8. **Punchline** — citation WordReveal "Ce n'est pas toujours une question d'effort. C'est souvent une question de système."
9. **Newsletter** — Minute Clarté, champ email + bouton "Je m'inscris"
10. **Sandy** — fondatrice, bio, citation encadrée, lien "Découvrir mon approche"
11. **Témoignages** — label "Ils & elles l'ont vécu", titre "Ce que ça change.", 4 avis Google (Valentine P., Alix R., Blandine O. R., Alice)
12. **CTA final** — "Un échange stratégique", dual CTA (Réserver mon audit stratégique + Découvrir les univers)

### Navbar
- Liens : Wake, Shift, Shine, Événements, Mon approche, Contact
- CTA : "Réserver mon audit stratégique"

### Footer
- SDL Agency / Souffle de Lumière + Sandy CEO
- 3 colonnes programmes : Wake (5 items), Shift (5 items), Shine (5 items)
- Liens légaux : Mentions légales, Confidentialité, Contact

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
- `WordReveal` : mot par mot avec blur + slide-up au scroll — utilisé sur Punchline et CTA final
- Ne pas utiliser les deux sur le même élément (WordReveal remplace RevealOnScroll pour le texte)

## ESLint
- Flat config (`eslint.config.mjs`), pas de `.eslintignore`
- `.claude/**` dans globalIgnores pour exclure les worktrees agents
