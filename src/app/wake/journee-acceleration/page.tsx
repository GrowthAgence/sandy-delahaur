import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Journ\u00e9e d\u2019Acc\u00e9l\u00e9ration — Intensive sur mesure | SDL Agency",
  description:
    "Une journ\u00e9e pour d\u00e9bloquer ce qui bloque depuis des mois. Intensive, cibl\u00e9e, concr\u00e8te. Tu arrives avec un probl\u00e8me, tu repars avec un plan.",
};

export default function JourneeAccelerationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-24 mb-32 overflow-hidden">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <RevealOnScroll className="md:col-span-7 z-10">
              <span className="font-body uppercase text-[10px] tracking-[0.4em] text-primary mb-6 block">
                EXP&Eacute;RIENCE PRIV&Eacute;E
              </span>
              <h1 className="font-headline text-5xl md:text-7xl leading-tight mb-8 max-w-2xl">
                Une journ&eacute;e pour{" "}
                <span className="italic text-primary">d&eacute;bloquer</span> ce
                qui bloque depuis des mois.
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-lg mb-12">
                Intensive, cibl&eacute;e, concr&egrave;te. Tu arrives avec un
                probl&egrave;me. Tu repars avec un plan.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 font-body tracking-[0.2em] uppercase text-sm font-bold active:scale-95 transition-transform"
              >
                R&eacute;server ma journ&eacute;e &rarr;
              </Link>
            </RevealOnScroll>
            <RevealOnScroll className="md:col-span-5 relative" delay={0.2}>
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-2xl border-l border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-primary/20 -z-10" />
            </RevealOnScroll>
          </div>
        </section>

        {/* Ce qu'on fait ensemble */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-[1920px] mx-auto">
            <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-24">
              <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter">
                Ce qu&apos;on fait ensemble
              </h2>
              <div className="h-px bg-outline-variant w-full md:w-1/3 mb-4 hidden md:block" />
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  num: "01.",
                  title: "Diagnostic Radical",
                  text: "Nous plongeons dans les angles morts de votre structure actuelle. Aucun tabou, aucune concession sur la v\u00e9rit\u00e9 op\u00e9rationnelle.",
                  offset: false,
                },
                {
                  num: "02.",
                  title: "Ing\u00e9nierie de Solution",
                  text: "Architecture d\u2019une solution sur-mesure. Nous ne cherchons pas le consensus, nous cherchons l\u2019efficacit\u00e9 absolue.",
                  offset: true,
                },
                {
                  num: "03.",
                  title: "Roadmap Ex\u00e9cutive",
                  text: "Traduction de la vision en actions concr\u00e8tes. Vous repartez avec un s\u00e9quen\u00e7age pr\u00e9cis pour les 90 prochains jours.",
                  offset: false,
                },
              ].map((item, i) => (
                <RevealOnScroll
                  key={item.num}
                  className={`group ${i < 2 ? "border-b md:border-b-0 md:border-r border-outline-variant/20" : ""} p-12 ${item.offset ? "md:translate-y-12" : ""} hover:bg-surface transition-colors duration-500`}
                  delay={i * 0.1}
                >
                  <span className="text-primary text-4xl font-headline mb-8 block">
                    {item.num}
                  </span>
                  <h3 className="font-headline text-2xl mb-6">{item.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui change (Before/After) */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <RevealOnScroll className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-high relative">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-highest to-surface-container opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-[10px] tracking-widest text-white/40 uppercase">
                      Avant
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-primary-container relative translate-y-8">
                  <div className="w-full h-full bg-gradient-to-br from-primary-container to-primary/60" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <span className="font-body text-[10px] tracking-widest text-on-primary uppercase font-bold">
                      Apr&egrave;s
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="order-1 md:order-2" delay={0.1}>
              <h2 className="font-headline text-4xl md:text-6xl mb-12">
                Ce qui change
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-outline-variant mt-1 shrink-0"
                  >
                    <path d="M19 13H5v-2h14v2z" />
                  </svg>
                  <div>
                    <h4 className="font-body text-xs tracking-widest text-outline-variant uppercase mb-2">
                      &Eacute;tat Initial
                    </h4>
                    <p className="font-body text-lg italic text-white/60">
                      Confusion, stagnation strat&eacute;gique, cycles de
                      d&eacute;cision interminables et perte d&apos;&eacute;nergie
                      vitale.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary mt-1 shrink-0"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                  <div>
                    <h4 className="font-body text-xs tracking-widest text-primary uppercase mb-2">
                      &Eacute;tat Final
                    </h4>
                    <p className="font-body text-lg font-bold text-on-surface">
                      Clart&eacute; chirurgicale, &eacute;lan renouvel&eacute;,
                      syst&egrave;me d&apos;action valid&eacute; et
                      s&eacute;r&eacute;nit&eacute; op&eacute;rationnelle.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Ce que tu repars avec */}
        <section className="bg-surface-container py-32 px-6 md:px-12 border-y border-outline-variant/10">
          <RevealOnScroll className="max-w-[1920px] mx-auto text-center mb-24">
            <h2 className="font-headline text-4xl mb-4">
              Ce que tu repars avec
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto" />
          </RevealOnScroll>
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                ),
                title: "Master Plan 90J",
                desc: "Un document strat\u00e9gique complet d\u00e9taillant chaque \u00e9tape technique et temporelle.",
              },
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                ),
                title: "Souverainet\u00e9 Totale",
                desc: "La fin de la d\u00e9pendance aux incertitudes ext\u00e9rieures par la ma\u00eetrise de vos leviers internes.",
              },
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                ),
                title: "Suivi de Pr\u00e9cision",
                desc: "Deux sessions de d\u00e9briefing apr\u00e8s 15 et 30 jours pour garantir l\u2019ex\u00e9cution sans faille.",
              },
            ].map((item) => (
              <RevealOnScroll key={item.title} className="text-center">
                <div className="w-16 h-16 border border-primary/30 flex items-center justify-center mx-auto mb-8">
                  {item.icon}
                </div>
                <h4 className="font-headline text-xl mb-4">{item.title}</h4>
                <p className="font-body text-sm text-on-surface-variant">
                  {item.desc}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Pour qui? & Format (Bento Grid) */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <RevealOnScroll className="md:col-span-2 bg-surface-container-high p-16 flex flex-col justify-center">
              <h2 className="font-headline text-4xl mb-8">Pour qui?</h2>
              <ul className="space-y-6">
                {[
                  "Dirigeantes en phase de pivot critique",
                  "Entrepreneures face \u00e0 un plafond de verre",
                  "Cr\u00e9atrices cherchant \u00e0 structurer leur empire",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-on-surface-variant font-body"
                  >
                    <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll
              className="md:col-span-2 bg-surface-container-low p-16 flex flex-col justify-center border-l border-primary/10"
              delay={0.1}
            >
              <h2 className="font-headline text-4xl mb-8">Format</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Dur\u00e9e", value: "8 Heures d\u2019immersion" },
                  {
                    label: "Lieu",
                    value: "Atelier Priv\u00e9 (Paris/Visio)",
                  },
                  { label: "Investissement", value: "Sur Devis" },
                  {
                    label: "Disponibilit\u00e9",
                    value: "2 sessions / mois",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-body text-[10px] tracking-widest text-primary uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="font-body text-xl">{item.value}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll
              className="md:col-span-4 aspect-[21/9] overflow-hidden"
              delay={0.2}
            >
              <div className="w-full h-full bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-high" />
            </RevealOnScroll>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 md:px-12 bg-surface text-center">
          <RevealOnScroll className="max-w-3xl mx-auto">
            <h2 className="font-headline text-5xl md:text-6xl mb-12">
              Le temps est la seule ressource que vous ne pouvez pas racheter.
            </h2>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-16 py-6 font-body tracking-[0.3em] uppercase text-sm font-black active:scale-95 transition-transform shadow-xl shadow-primary/20"
            >
              R&eacute;server ma journ&eacute;e &rarr;
            </Link>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
