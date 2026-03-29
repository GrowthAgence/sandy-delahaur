import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Queen CEO Builder \u2014 Le Programme Flagship | SDL Agency",
  description:
    "Passez de l\u2019ombre \u00e0 l\u2019\u00e9vidence. B\u00e2tissez l\u2019empire qui honore votre vision sans sacrifier votre essence. Visibilit\u00e9 magn\u00e9tique et ventes fluides en 30 jours.",
};

const PROBLEMS = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="1.5"
      >
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
    title: "L\u2019invisibilit\u00e9 num\u00e9rique",
    description:
      "Vous \u00eates excellente dans ce que vous faites, mais votre message se perd dans le bruit. Vos clients id\u00e9aux ne vous voient pas.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93" />
      </svg>
    ),
    title: "Les blocages techniques",
    description:
      "Le syndrome de l\u2019usine \u00e0 gaz. Vous vous sentez frein\u00e9e par les outils, les tunnels et la complexit\u00e9 au lieu de cr\u00e9er.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" />
        <path d="M8 2l1 3M16 2l-1 3" />
      </svg>
    ),
    title: "Le doute strat\u00e9gique",
    description:
      "L\u2019incertitude sur la prochaine \u00e9tape. Vous travaillez dur, mais sans la clart\u00e9 n\u00e9cessaire pour scaler sereinement.",
  },
];

const RESULTS = [
  "Une identit\u00e9 de marque qui impose le respect et l\u2019admiration.",
  "Un syst\u00e8me d\u2019acquisition client automatis\u00e9 et pr\u00e9visible.",
  "La capacit\u00e9 de vendre des offres \u00e0 +5 000\u20ac avec aisance.",
  "Une s\u00e9r\u00e9nit\u00e9 totale face \u00e0 votre strat\u00e9gie de croissance.",
];

const TESTIMONIALS = [
  {
    quote:
      "Avant Queen CEO Builder, j\u2019\u00e9tais invisible malgr\u00e9 mes comp\u00e9tences. En 4 semaines, j\u2019ai sign\u00e9 mon premier contrat \u00e0 8k\u20ac.",
    name: "ELENA V.",
    role: "Consultante Strat\u00e9gique",
  },
  {
    quote:
      "La clart\u00e9 que Sandy apporte est chirurgicale. Elle a su mettre des mots sur ma vision l\u00e0 o\u00f9 je pataugeais depuis des mois.",
    name: "MARIE-SOPHIE D.",
    role: "Fondatrice Tech",
  },
];

export default function QueenCeoBuilderPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          {/* Lumiere bloom effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(242, 202, 80, 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
            <div className="lg:col-span-7 space-y-8">
              <RevealOnScroll>
                <span className="inline-block text-primary font-body tracking-[0.3em] text-sm uppercase">
                  The Flagship Experience
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-headline font-light leading-tight text-on-surface">
                  QUEEN{" "}
                  <span className="italic block ml-12 md:ml-24">
                    CEO BUILDER
                  </span>
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-xl md:text-2xl text-on-surface-variant font-headline italic max-w-2xl leading-relaxed">
                  Passez de l&apos;ombre &agrave; l&apos;&eacute;vidence.
                  B&acirc;tissez l&apos;empire qui honore votre vision sans
                  sacrifier votre essence.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a
                    href="#cta"
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 font-body text-base font-bold tracking-widest uppercase shadow-xl hover:scale-[1.02] transition-transform text-center"
                  >
                    Rejoindre l&apos;&eacute;lite
                  </a>
                  <a
                    href="#modules"
                    className="border border-outline-variant/30 text-on-surface px-10 py-5 font-body text-base font-bold tracking-widest uppercase hover:bg-white/5 transition-colors text-center"
                  >
                    D&eacute;couvrir le programme
                  </a>
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-5 relative">
              <RevealOnScroll delay={0.2}>
                <div className="relative w-full aspect-[4/5] overflow-hidden group">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-8 -left-8 p-8 bg-surface-container-high border border-outline-variant/10 shadow-2xl backdrop-blur-md max-w-xs">
                  <p className="text-primary font-headline italic text-lg leading-relaxed">
                    &ldquo;Le succ&egrave;s n&apos;est pas une destination,
                    c&apos;est une posture.&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-body uppercase tracking-widest opacity-60">
                    Sandy &mdash; Fondatrice SDL
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <RevealOnScroll>
              <div className="text-center space-y-6 mb-24">
                <h2 className="text-4xl md:text-5xl font-headline font-light">
                  Le plafond de verre{" "}
                  <span className="italic">invisible</span>
                </h2>
                <div className="w-24 h-px bg-primary/40 mx-auto" />
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {PROBLEMS.map((problem, index) => (
                <RevealOnScroll key={problem.title} delay={index * 0.15}>
                  <div className="space-y-6">
                    {problem.icon}
                    <h3 className="text-xl font-headline italic">
                      {problem.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed font-body font-light">
                      {problem.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[120px]" />
          </div>
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 flex flex-col items-center text-center">
            <RevealOnScroll>
              <div className="max-w-4xl space-y-12">
                <h2 className="text-5xl md:text-7xl font-headline font-light leading-tight">
                  Une visibilit&eacute;{" "}
                  <span className="text-primary italic">magn&eacute;tique</span>{" "}
                  et des ventes fluides en 30 jours.
                </h2>
                <p className="text-xl text-on-surface-variant leading-relaxed font-light font-body">
                  Nous n&apos;ajoutons pas de complexit&eacute;. Nous
                  l&apos;&eacute;liminons. Le syst&egrave;me Queen CEO Builder
                  est con&ccedil;u pour les femmes qui exigent
                  l&apos;excellence et la simplicit&eacute;.
                </p>
                <div className="pt-8">
                  <a
                    href="#modules"
                    className="inline-block bg-surface-container-highest border border-primary/20 text-primary px-12 py-6 font-body tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all"
                  >
                    Voir le plan d&apos;action
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Modules Section (Bento Grid) */}
        <section id="modules" className="py-32 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <RevealOnScroll>
              <div className="mb-20">
                <h2 className="text-4xl font-headline font-light mb-4 text-center md:text-left">
                  Architecture du <span className="italic">Succ&egrave;s</span>
                </h2>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Module 1 — large */}
              <RevealOnScroll className="md:col-span-7">
                <div className="bg-surface-container-high p-12 flex flex-col justify-between border border-outline-variant/5 group hover:border-primary/20 transition-all min-h-[280px]">
                  <div className="space-y-6">
                    <span className="text-primary font-body text-sm tracking-widest">
                      MODULE 01
                    </span>
                    <h3 className="text-3xl font-headline italic">
                      L&apos;Architecture du Message
                    </h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body font-light">
                      Devenez la seule option logique. Nous codons votre ADN de
                      marque pour qu&apos;il r&eacute;sonne
                      instantan&eacute;ment aupr&egrave;s de votre audience
                      premium.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-primary mt-8">
                    <span className="w-12 h-px bg-primary" />
                    <span className="text-xs font-body uppercase tracking-tighter">
                      Clart&eacute; Radicale
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
              {/* Module 2 — small */}
              <RevealOnScroll className="md:col-span-5" delay={0.1}>
                <div className="bg-surface-container p-12 border border-outline-variant/5 flex flex-col justify-center gap-8 relative overflow-hidden group min-h-[280px]">
                  <span className="text-primary font-body text-sm tracking-widest">
                    MODULE 02
                  </span>
                  <h4 className="text-2xl font-headline italic">
                    Pr&eacute;sence Rayonnante
                  </h4>
                  <p className="text-on-surface-variant font-body font-light">
                    Ma&icirc;trisez l&apos;art de l&apos;incarnation. Votre
                    pr&eacute;sence devient votre meilleur outil de marketing.
                  </p>
                </div>
              </RevealOnScroll>
              {/* Module 3 — small */}
              <RevealOnScroll className="md:col-span-5" delay={0.15}>
                <div className="bg-surface-container p-12 border border-outline-variant/5 flex flex-col justify-center gap-8 group min-h-[280px]">
                  <span className="text-primary font-body text-sm tracking-widest">
                    MODULE 03
                  </span>
                  <h4 className="text-2xl font-headline italic">
                    Vente Haute Couture
                  </h4>
                  <p className="text-on-surface-variant font-body font-light">
                    Transformer l&apos;acte de vente en une conversation de
                    service luxueuse et sans friction.
                  </p>
                </div>
              </RevealOnScroll>
              {/* Module 4 — large */}
              <RevealOnScroll className="md:col-span-7" delay={0.2}>
                <div className="bg-surface-container-high p-12 flex flex-col justify-between border border-outline-variant/5 group hover:border-primary/20 transition-all min-h-[280px]">
                  <div className="space-y-6">
                    <span className="text-primary font-body text-sm tracking-widest">
                      MODULE 04
                    </span>
                    <h3 className="text-3xl font-headline italic">
                      Visibilit&eacute; Exponentielle
                    </h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body font-light">
                      Activez les leviers de croissance pour toucher des
                      milliers de personnes sans y passer vos journ&eacute;es.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-primary mt-8">
                    <span className="w-12 h-px bg-primary" />
                    <span className="text-xs font-body uppercase tracking-tighter">
                      Impact Massif
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/10">
                {[
                  {
                    num: "01.",
                    title: "Clarifier",
                    text: "\u00c9laguer le superflu pour ne garder que l\u2019essentiel de votre puissance.",
                  },
                  {
                    num: "02.",
                    title: "Installer",
                    text: "Mettre en place les structures qui travaillent pour vous pendant que vous cr\u00e9ez.",
                  },
                  {
                    num: "03.",
                    title: "Activer",
                    text: "Lancer la machine et r\u00e9colter les fruits d\u2019un positionnement d\u2019\u00e9lite.",
                  },
                ].map((step, index) => (
                  <RevealOnScroll key={step.num} delay={index * 0.15}>
                    <div
                      className={`p-16 text-center space-y-8 group hover:bg-white/5 transition-colors ${
                        index < 2 ? "border-r border-outline-variant/10" : ""
                      }`}
                    >
                      <span className="text-7xl font-headline font-light text-primary/20 group-hover:text-primary transition-colors block">
                        {step.num}
                      </span>
                      <h3 className="text-2xl font-headline">{step.title}</h3>
                      <p className="text-on-surface-variant font-body font-light">
                        {step.text}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <div className="space-y-12">
                <h2 className="text-5xl font-headline font-light">
                  Le Manifeste des{" "}
                  <span className="italic">R&eacute;sultats</span>
                </h2>
                <ul className="space-y-8">
                  {RESULTS.map((result) => (
                    <li key={result} className="flex items-start gap-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f2ca50"
                        strokeWidth="2"
                        className="mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                      <span className="text-lg text-on-surface leading-relaxed font-body">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="relative">
                <div className="p-12 bg-surface border border-outline-variant/20 shadow-2xl relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low mb-8" />
                  <p className="text-2xl font-headline italic text-on-surface">
                    &ldquo;SDL n&apos;est pas une agence, c&apos;est un
                    catalyseur de puissance.&rdquo;
                  </p>
                </div>
                <div className="absolute -top-10 -right-10 w-full h-full border border-primary/10 -z-0" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-32">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {TESTIMONIALS.map((testimonial, index) => (
                <RevealOnScroll key={testimonial.name} delay={index * 0.15}>
                  <div className="p-12 bg-surface-container-high border-l-4 border-primary">
                    <p className="text-lg italic font-headline leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-bold text-primary tracking-wide font-body">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-body uppercase opacity-50">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-40 relative text-center">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10 space-y-12">
            <h2 className="text-5xl md:text-7xl font-headline font-light">
              <WordReveal>{"Prête à bâtir votre"}</WordReveal>{" "}
              <span className="italic">
                <WordReveal delay={0.4} wordClassName="italic">{"Empire\u00a0?"}</WordReveal>
              </span>
            </h2>
            <RevealOnScroll delay={0.15}>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-xl font-body font-light">
                Les places pour la prochaine cohorte sont limit&eacute;es pour
                garantir une proximit&eacute; d&apos;&eacute;lite.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.6}>
              <div className="pt-8">
                <a
                  href="#"
                  className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-16 py-8 font-body text-lg font-bold tracking-widest uppercase shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-all"
                >
                  <WordReveal delay={0.8} stagger={0.12}>{"Postuler au programme"}</WordReveal>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
