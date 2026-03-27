import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "WAKE — Phase de Repositionnement Strat&eacute;gique | SDL Agency",
  description:
    "WAKE, c\u2019est la phase de repositionnement strat\u00e9gique. Nous d\u00e9construisons pour mieux reb\u00e2tir votre autorit\u00e9 sur le march\u00e9.",
};

const OFFERS = [
  {
    title: "Speed Happy Business",
    label: "Focus Intensif",
    description:
      "L\u2019acc\u00e9l\u00e9ration tactique pour d\u00e9bloquer votre positionnement en un temps record. Une immersion brute dans votre mod\u00e8le d\u2019affaires.",
    href: "/wake/speed-happy-business",
    price: "Gratuit",
    span: "md:col-span-8",
    height: "md:h-[600px]",
    bg: "bg-surface-container",
    featured: true,
  },
  {
    title: "Masterclass Pitch",
    label: null,
    description:
      "L\u2019art de l\u2019\u00e9loquence business. Apprenez \u00e0 articuler votre valeur avec la pr\u00e9cision d\u2019un couturier.",
    href: "/wake/masterclass-pitch",
    price: "35\u00a0\u20ac",
    span: "md:col-span-4",
    height: "min-h-[400px]",
    bg: "bg-surface-container-high",
    featured: false,
  },
  {
    title: "Journ\u00e9e d\u2019acc\u00e9l\u00e9ration",
    label: "Acc\u00e9l\u00e9ration Imm\u00e9diate",
    description:
      "24 heures pour transformer votre vision en plan d\u2019action chirurgical.",
    href: "/wake/journee-acceleration",
    price: "Sur devis",
    span: "md:col-span-4",
    height: "min-h-[400px]",
    bg: "bg-surface-container-low",
    featured: false,
  },
  {
    title: "Happy Business Leader",
    label: null,
    description:
      "\u00abLe leadership n\u2019est pas un titre, c\u2019est une posture.\u00bb",
    href: "/wake/happy-business-leader",
    price: "2\u00a0500\u00a0\u20ac",
    span: "md:col-span-4",
    height: "min-h-[400px]",
    bg: "bg-surface-container-low",
    featured: false,
  },
  {
    title: "Booster The Career",
    label: null,
    description:
      "Propulsez votre trajectoire professionnelle vers de nouveaux sommets de prestige et d\u2019influence.",
    href: "/wake/booster-the-career",
    price: "\u00c0 partir de 2\u00a0800\u00a0\u20ac",
    span: "md:col-span-4",
    height: "min-h-[400px]",
    bg: "bg-surface-container-highest",
    featured: false,
  },
];

export default function WakePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-surface-container-low via-surface to-surface" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>
          <RevealOnScroll className="relative z-10 px-6 md:px-12 max-w-5xl">
            <span className="font-body text-[0.75rem] uppercase tracking-[0.3em] text-primary mb-6 block">
              The Digital Atelier &mdash; Wake
            </span>
            <h1 className="font-headline text-5xl md:text-8xl font-black leading-tight mb-8">
              Avant de vendre, il faut savoir{" "}
              <span className="italic font-light text-primary">quoi</span>{" "}
              vendre &mdash; et &agrave; qui.
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              WAKE, c&apos;est la phase de repositionnement strat&eacute;gique.
              Nous d&eacute;construisons pour mieux reb&acirc;tir votre
              autorit&eacute; sur le march&eacute;.
            </p>
          </RevealOnScroll>
        </section>

        {/* Signature Quote */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-low border-y border-white/5">
          <div className="max-w-[1280px] mx-auto text-center">
            <RevealOnScroll>
              <div className="flex justify-center mb-10">
                {/* Quote icon SVG */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary"
                >
                  <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                </svg>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl italic font-medium leading-relaxed max-w-4xl mx-auto">
                &laquo;&nbsp;On ne vend pas sur les r&eacute;seaux ce qu&apos;on
                ne sait pas vendre dans la vraie vie.&nbsp;&raquo;
              </h2>
              <div className="mt-12 h-px w-24 bg-primary mx-auto" />
            </RevealOnScroll>
          </div>
        </section>

        {/* The Offers Section */}
        <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="font-body text-[0.7rem] uppercase tracking-widest text-outline mb-4 block">
                  Collection Strat&eacute;gique
                </span>
                <h2 className="font-headline text-5xl md:text-7xl">
                  Les offres WAKE
                </h2>
              </div>
              <p className="font-body text-on-surface-variant max-w-md text-right border-r-2 border-primary pr-6">
                Cinq piliers con&ccedil;us pour aligner votre vision, votre
                offre et votre communication avec l&apos;excellence de votre
                savoir-faire.
              </p>
            </div>
          </RevealOnScroll>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {OFFERS.map((offer, i) => (
              <RevealOnScroll
                key={offer.href}
                className={`${offer.span} group relative ${offer.height} overflow-hidden ${offer.bg}`}
                delay={i * 0.1}
              >
                <Link
                  href={offer.href}
                  className="absolute inset-0 z-20"
                  aria-label={offer.title}
                />
                {offer.featured ? (
                  /* Large Featured Card */
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/30 to-surface-container/80" />
                ) : null}
                <div
                  className={`absolute inset-0 ${offer.featured ? "p-12 flex flex-col justify-end bg-gradient-to-t from-surface via-transparent to-transparent" : offer.title === "Happy Business Leader" ? "p-10 flex flex-col justify-center text-center border border-primary/10" : "p-10 flex flex-col"}`}
                >
                  {offer.label && (
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                      {offer.label}
                    </span>
                  )}
                  <h3
                    className={`font-headline ${offer.featured ? "text-4xl mb-6" : "text-3xl mb-4"}`}
                  >
                    {offer.title}
                  </h3>
                  <p
                    className={`text-on-surface-variant ${offer.featured ? "max-w-lg mb-8 font-light" : "text-sm leading-relaxed"} ${offer.title === "Happy Business Leader" ? "italic mb-8" : ""}`}
                  >
                    {offer.description}
                  </p>
                  {/* Price badge */}
                  <div
                    className={`${offer.featured ? "" : "mt-auto"} pt-6 ${offer.title === "Happy Business Leader" ? "flex justify-center" : ""}`}
                  >
                    <span
                      className={`inline-block ${offer.title === "Happy Business Leader" ? "bg-primary text-on-primary px-8 py-4 text-xs tracking-widest uppercase font-bold" : "text-xs tracking-[0.2em] uppercase text-primary font-bold"}`}
                    >
                      {offer.title === "Happy Business Leader"
                        ? "Rejoindre le Cercle"
                        : offer.price}
                    </span>
                    {offer.title !== "Happy Business Leader" && (
                      <span className="ml-3 inline-block text-primary transition-transform group-hover:translate-x-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 bg-surface">
          <RevealOnScroll className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-headline text-4xl md:text-6xl mb-12">
              Pr&ecirc;te &agrave; r&eacute;veiller votre potentiel&nbsp;?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="bg-primary text-on-primary px-12 py-5 text-xs tracking-[0.3em] font-bold uppercase transition-transform active:scale-95 text-center"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/"
                className="border border-outline px-12 py-5 text-xs tracking-[0.3em] font-bold uppercase hover:bg-white/5 transition-all active:scale-95 text-center"
              >
                Voir les autres phases
              </Link>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
