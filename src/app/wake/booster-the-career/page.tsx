import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Booster The Career — \u00c0 partir de 2\u00a0800\u20ac | SDL Agency",
  description:
    "Booster The Career est un bilan d\u2019accompagnement individuel pour faire le point \u2014 sur toi, sur ton projet, sur la direction \u00e0 prendre.",
};

export default function BoosterTheCareerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section: Editorial Header */}
        <section className="relative px-6 md:px-12 lg:px-24 mb-32 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-[1920px] mx-auto">
            <RevealOnScroll className="lg:col-span-7 z-10 relative">
              <span className="block font-body uppercase text-[10px] tracking-[0.4em] text-primary mb-8">
                PROGRAMME D&apos;&Eacute;LITE
              </span>
              <h1 className="font-headline text-5xl lg:text-7xl leading-tight mb-8 max-w-2xl">
                Tu sais que{" "}
                <span className="italic">quelque chose</span> doit changer.{" "}
                <br />
                <span className="text-gold-gradient">
                  Mais quoi, exactement?
                </span>
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
                Booster The Career est un bilan d&apos;accompagnement individuel
                pour faire le point &mdash; sur toi, sur ton projet, sur la
                direction &agrave; prendre.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container px-10 py-5 text-on-primary font-body font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
                >
                  Prendre rendez-vous
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
                </Link>
                <a
                  href="#methode"
                  className="border border-outline-variant/30 px-10 py-5 text-white font-body font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all text-center"
                >
                  D&eacute;couvrir la m&eacute;thode
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll
              className="lg:col-span-5 relative mt-12 lg:mt-0"
              delay={0.2}
            >
              <div className="aspect-[4/5] w-full bg-surface-container-low overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-primary/40 hidden lg:block" />
            </RevealOnScroll>
          </div>
        </section>

        {/* Ce que le bilan comprend */}
        <section id="methode" className="bg-surface-container-low py-32">
          <RevealOnScroll className="px-6 md:px-12 lg:px-24 mb-20">
            <h2 className="font-headline text-4xl lg:text-5xl text-white mb-4 italic">
              Ce que le bilan comprend
            </h2>
            <div className="h-px w-24 bg-primary" />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
            {[
              {
                num: "01",
                title: "Analyse de Trajectoire",
                text: "Un audit profond de vos accomplissements pass\u00e9s et de vos aspirations latentes pour identifier le fil conducteur de votre excellence.",
                offset: false,
              },
              {
                num: "02",
                title: "Clart\u00e9 Visionnaire",
                text: "D\u00e9finition d\u2019un projet professionnel align\u00e9 sur votre style de vie et vos ambitions Royales. Pas de compromis.",
                offset: true,
              },
              {
                num: "03",
                title: "Plan de Conqu\u00eate",
                text: "Une feuille de route strat\u00e9gique \u00e9tape par \u00e9tape pour orchestrer votre transition avec la pr\u00e9cision d\u2019une maison de haute couture.",
                offset: false,
              },
            ].map((item, i) => (
              <RevealOnScroll
                key={item.num}
                className={`group ${item.offset ? "pt-16" : ""}`}
                delay={i * 0.15}
              >
                <div className="aspect-[3/4] bg-surface overflow-hidden relative mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-high to-surface-container-low opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-primary font-headline italic text-3xl">
                      {item.num}
                    </span>
                  </div>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-white">
                  {item.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {item.text}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Bento Grid: Pour qui? */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <RevealOnScroll className="text-center mb-24">
            <span className="font-body uppercase text-[10px] tracking-[0.4em] text-primary mb-4 block italic">
              AUDIENCE CIBLE
            </span>
            <h2 className="font-headline text-5xl lg:text-6xl text-white">
              Pour qui?
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-[1920px] mx-auto">
            {/* Large card */}
            <RevealOnScroll className="md:col-span-4 bg-surface-container-high p-12 flex flex-col justify-end min-h-[400px] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/50 to-surface/80 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <h4 className="font-headline text-3xl mb-6 text-primary">
                  La Visionnaire en Transition
                </h4>
                <p className="font-body text-on-surface text-lg leading-relaxed max-w-xl">
                  Vous avez atteint un sommet, mais vous sentez que ce
                  n&apos;est pas le v&ocirc;tre. Vous aspirez &agrave; une
                  carri&egrave;re qui refl&egrave;te enfin votre puissance
                  int&eacute;rieure et vos valeurs profondes.
                </p>
              </div>
            </RevealOnScroll>
            {/* Small Card 1 */}
            <RevealOnScroll
              className="md:col-span-2 bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors"
              delay={0.1}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary mb-6"
              >
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
              </svg>
              <h4 className="font-headline text-2xl mb-4 text-white">
                Leaders Etablies
              </h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Pour celles qui dirigent d&eacute;j&agrave; mais cherchent
                &agrave; red&eacute;finir leur impact et leur h&eacute;ritage
                professionnel.
              </p>
            </RevealOnScroll>
            {/* Small Card 2 */}
            <RevealOnScroll
              className="md:col-span-3 bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors"
              delay={0.15}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary mb-6"
              >
                <path d="M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.9959.9959 0 00-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41l-2.33-2.35z" />
              </svg>
              <h4 className="font-headline text-2xl mb-4 text-white">
                Recherche de Sens
              </h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Si votre quotidien professionnel vous semble vide malgr&eacute;
                le succ&egrave;s, il est temps de r&eacute;aligner votre
                boussole sur ce qui vibre r&eacute;ellement.
              </p>
            </RevealOnScroll>
            {/* Medium Card */}
            <RevealOnScroll
              className="md:col-span-3 bg-primary/5 p-12 border border-primary/20 flex items-center justify-between group"
              delay={0.2}
            >
              <div>
                <h4 className="font-headline text-2xl mb-4 text-white italic">
                  Pr&ecirc;te &agrave; franchir le pas?
                </h4>
                <p className="font-body text-on-surface-variant text-sm">
                  R&eacute;servez votre consultation initiale offerte.
                </p>
              </div>
              <Link
                href="/#contact"
                className="bg-primary text-on-primary p-4 hover:scale-110 transition-transform shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </RevealOnScroll>
          </div>
        </section>

        {/* Pricing: Tarif */}
        <section className="bg-surface py-32 px-6 md:px-12 lg:px-24">
          <RevealOnScroll className="max-w-4xl mx-auto border border-outline-variant/20 relative overflow-hidden">
            {/* Background texture/gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
            <div className="p-12 lg:p-20 text-center relative z-10">
              <span className="font-body uppercase text-[10px] tracking-[0.4em] text-primary mb-8 block">
                INVESTISSEMENT
              </span>
              <h2 className="font-headline text-4xl lg:text-6xl mb-12 text-white italic">
                Booster The Career
              </h2>
              <div className="flex flex-col items-center mb-12">
                <span className="text-sm font-body uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                  &Agrave; partir de
                </span>
                <div className="flex items-start gap-2">
                  <span className="font-headline text-6xl text-gold-gradient">
                    2&nbsp;800
                  </span>
                  <span className="font-headline text-2xl text-primary mt-2">
                    &euro;
                  </span>
                </div>
                <span className="text-xs font-body uppercase tracking-[0.1em] text-on-surface-variant/60 mt-4">
                  Financement personnel ou CPF possible sous conditions
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-left mb-16 border-t border-b border-outline-variant/10 py-12">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-sm font-body">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary shrink-0"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    8 sessions individuelles de 90 min
                  </li>
                  <li className="flex items-center gap-4 text-sm font-body">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary shrink-0"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Tests de personnalit&eacute; premium
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-sm font-body">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary shrink-0"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Acc&egrave;s illimit&eacute; &agrave; l&apos;Atelier digital
                  </li>
                  <li className="flex items-center gap-4 text-sm font-body">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary shrink-0"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Support WhatsApp prioritaire
                  </li>
                </ul>
              </div>
              <Link
                href="/#contact"
                className="flex justify-center items-center gap-4 bg-gradient-to-r from-primary to-primary-container w-full py-6 text-on-primary font-body font-bold uppercase tracking-[0.3em] text-xs hover:opacity-90 transition-all"
              >
                Prendre rendez-vous
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
              </Link>
              <p className="mt-8 text-[10px] font-body uppercase tracking-[0.2em] text-on-surface-variant/40">
                * Places limit&eacute;es &agrave; 3 nouvelles clientes par mois
                pour garantir l&apos;excellence de l&apos;accompagnement.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* CTA Focus Section */}
        <section className="py-40 px-6 md:px-12 lg:px-24 text-center">
          <h2 className="font-headline text-5xl lg:text-8xl mb-12 opacity-10 select-none">
            RENAISSANCE
          </h2>
          <div className="-mt-24 relative z-10">
            <p className="font-headline italic text-3xl text-white mb-12">
              <WordReveal>{"Le premier jour de votre nouvelle ère commence ici."}</WordReveal>
            </p>
            <div className="flex justify-center">
              <div className="w-px h-24 bg-primary/40" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
