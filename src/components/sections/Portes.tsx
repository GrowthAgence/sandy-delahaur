import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const TILES = [
  {
    label: "WAKE",
    title: "Je clarifie mon offre et ma posture",
    href: "/wake",
    cta: "Découvrir",
    wide: false,
  },
  {
    label: "SHIFT",
    title: "Je construis ma visibilité et ma structure",
    href: "/shift",
    cta: "Découvrir",
    wide: false,
  },
  {
    label: "SHINE",
    title: "Je passe à l'échelle et j'impacte",
    href: "/shine",
    cta: "Découvrir",
    wide: false,
  },
  {
    label: "ÉVÉNEMENTS",
    title: "Je rejoins la communauté Modern Social Club",
    href: "/evenements",
    cta: "Explorer le club",
    wide: true,
  },
  {
    label: "ENTREPRISES",
    title: "Je cherche un accompagnement B2B",
    href: "/entreprises",
    cta: "Contact Pro",
    wide: false,
  },
];

export default function Portes() {
  return (
    <section id="acces" className="py-24 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-16 md:mb-20 text-center">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Par o&ugrave; veux-tu commencer&nbsp;?
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            Chaque parcours est diff&eacute;rent. Choisis la porte qui te
            correspond aujourd&apos;hui.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TILES.map((tile, i) => (
            <RevealOnScroll
              key={tile.label}
              delay={i * 0.1}
              className={tile.wide ? "lg:col-span-2" : ""}
            >
              <Link
                href={tile.href}
                className="block bg-surface p-12 gold-border-subtle card-depth card-hover-state h-full"
              >
                <span className="font-body text-[10px] uppercase tracking-widest text-primary mb-4 block">
                  {tile.label}
                </span>
                <h3 className="font-headline text-2xl mb-8">{tile.title}</h3>
                <span className="text-[10px] uppercase tracking-widest font-bold border-b border-primary/30 pb-1 hover:border-primary transition-colors font-body">
                  {tile.cta}
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
