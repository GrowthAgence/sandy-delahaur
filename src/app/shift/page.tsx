import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "SHIFT — Construis le syst\u00e8me qui vend pour toi | SDL Agency",
  description:
    "Phase de construction : d\u00e9laisse l\u2019artisanat pour l\u2019ing\u00e9nierie. D\u00e9couvre les offres SHIFT pour transformer ta pr\u00e9sence digitale en machine de guerre esth\u00e9tique et performante.",
};

const OFFERS = [
  {
    num: "01",
    title: "Atelier d\u00e9clic visibilit\u00e9",
    description:
      "Red\u00e9finissez votre image de marque pour qu\u2019elle refl\u00e8te enfin l\u2019autorit\u00e9 que vous avez d\u00e9j\u00e0 acquise. Un choc visuel n\u00e9cessaire.",
    features: ["Brand Identity Audit", "Narrative Strategy", "Visual DNA Kit"],
    href: "/shift/atelier-declic-visibilite",
    elevated: false,
  },
  {
    num: "02",
    title: "Queen CEO Builder",
    description:
      "Automatisez vos process pour lib\u00e9rer votre temps. Le syst\u00e8me travaille, vous r\u00e9gnez. La structure au service de la libert\u00e9.",
    features: ["CRM Optimization", "Sales Automation", "Workflow Sculpting"],
    href: "/shift/queen-ceo-builder",
    elevated: true,
  },
  {
    num: "03",
    title: "Accompagnement acc\u00e9l\u00e9ration",
    description:
      "Pour celles qui visent le sommet. Un partenariat strat\u00e9gique sur-mesure pour scaler vos revenus sans sacrifier votre luxe de vivre.",
    features: [
      "Strategic Advisory",
      "Multi-Channel Scale",
      "1:1 Elite Mentoring",
    ],
    href: "/shift/accompagnement-acceleration",
    elevated: false,
  },
];

export default function ShiftPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-dvh flex items-center pt-24 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-surface-container-low via-surface to-surface opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              <RevealOnScroll>
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
                  L&apos;&Eacute;re de la Transformation
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <h1 className="font-headline font-black mb-8 leading-[1.1] tracking-tighter text-white text-4xl md:text-6xl lg:text-7xl">
                  Tu sais ce que{" "}
                  <span className="text-gold-gradient italic">tu vends.</span>
                  <br className="hidden md:block" />
                  Maintenant, construis le syst&egrave;me qui le vend{" "}
                  <span className="italic">pour toi.</span>
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <p className="font-body text-on-surface-variant max-w-xl text-lg mb-10 leading-relaxed font-light">
                  SHIFT, c&apos;est la phase de construction. L&apos;instant
                  o&ugrave; l&apos;on d&eacute;laisse l&apos;artisanat pour
                  l&apos;ing&eacute;nierie. C&apos;est ici que votre vision
                  devient une machine de guerre esth&eacute;tique et performante.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* L'Atelier Digital Section */}
        <section className="bg-surface-container-low py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-20 items-end">
              <RevealOnScroll className="w-full md:w-1/2">
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
              </RevealOnScroll>
              <RevealOnScroll className="w-full md:w-1/2 pb-12" delay={0.2}>
                <h2 className="font-headline text-6xl md:text-8xl lg:text-9xl -ml-0 md:-ml-32 mb-12 text-on-surface leading-none">
                  L&apos;Atelier <br />
                  <span className="text-primary italic">Digital</span>
                </h2>
                <div className="space-y-6 max-w-lg">
                  <p className="text-lg text-on-surface-variant font-body font-light leading-relaxed">
                    Nous ne cr&eacute;ons pas seulement des tunnels de vente;
                    nous sculptons des parcours clients prestigieux qui honorent
                    la valeur de votre expertise.
                  </p>
                  <div className="flex items-center gap-4 text-primary">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 21l6-6m0 0l4-10 4 10m-8 0h8" />
                      <circle cx="12" cy="3" r="1" fill="currentColor" />
                    </svg>
                    <span className="font-body uppercase tracking-widest text-xs font-bold">
                      Architectural Precision
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Offres SHIFT (Bento Grid) */}
        <section className="py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <RevealOnScroll>
              <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <span className="font-body uppercase tracking-widest text-primary text-sm mb-4 block">
                    SERVICES EXCLUSIFS
                  </span>
                  <h2 className="font-headline text-5xl md:text-7xl">
                    Les offres <span className="italic">SHIFT</span>
                  </h2>
                </div>
                <p className="text-on-surface-variant max-w-md font-light font-body">
                  Trois niveaux d&apos;immersion pour transformer votre
                  structure op&eacute;rationnelle et votre pr&eacute;sence
                  digitale.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {OFFERS.map((offer, index) => (
                <RevealOnScroll key={offer.num} delay={index * 0.15}>
                  <Link
                    href={offer.href}
                    className={`group relative block p-12 min-h-[500px] flex flex-col justify-between transition-colors duration-500 ${
                      offer.elevated
                        ? "bg-surface-container-high md:-mt-10 md:mb-10 z-10 shadow-2xl"
                        : `hover:bg-surface-container-low ${
                            index === 0
                              ? "border-r border-white/5"
                              : "border-l border-white/5"
                          }`
                    }`}
                  >
                    <div>
                      <span className="font-headline text-primary text-4xl italic mb-8 block">
                        {offer.num}
                      </span>
                      <h3 className="font-headline text-3xl mb-6">
                        {offer.title}
                      </h3>
                      <p className="text-on-surface-variant font-light leading-relaxed mb-8 font-body">
                        {offer.description}
                      </p>
                      <ul className="space-y-3 font-body text-[0.7rem] uppercase tracking-widest text-on-surface/60">
                        {offer.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {offer.elevated ? (
                      <span className="mt-12 bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-[0.3em] text-[0.7rem] font-body text-center block">
                        S&Eacute;LECTIONNER CE PARCOURS
                      </span>
                    ) : (
                      <span className="mt-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group-hover:text-primary transition-colors font-body">
                        D&Eacute;COUVRIR{" "}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Statement Section */}
        <section className="py-32 bg-surface-container-lowest flex items-center justify-center text-center px-6">
          <RevealOnScroll>
            <div className="max-w-4xl space-y-12">
              <h2 className="font-headline text-4xl md:text-6xl leading-tight">
                &ldquo;La v&eacute;ritable &eacute;l&eacute;gance
                r&eacute;side dans un syst&egrave;me qui{" "}
                <span className="italic">fonctionne impeccablement</span> sans
                que l&apos;on ne voie jamais les rouages.&rdquo;
              </h2>
              <div className="flex flex-col items-center gap-4">
                <div className="w-px h-24 bg-primary" />
                <span className="font-body uppercase tracking-widest text-xs font-bold text-primary">
                  Directrice de l&apos;Atelier SDL
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
