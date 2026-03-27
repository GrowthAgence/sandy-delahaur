import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Happy Business Leader — Bootcamp 2\u00a0500\u20ac | SDL Agency",
  description:
    "Le bootcamp qui remet ton business sur les rails. Un programme court et immersif pour les entrepreneures qui ont besoin de tout reconstruire.",
};

export default function HappyBusinessLeaderPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-6 md:px-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-[1920px] mx-auto gap-12 items-center">
            <RevealOnScroll className="md:col-span-7 z-10 relative">
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] mb-6 block uppercase font-body">
                LE BOOTCAMP EX&Eacute;CUTIF
              </span>
              <h1 className="text-6xl md:text-8xl font-headline leading-tight mb-8">
                Le bootcamp qui remet ton{" "}
                <span className="italic text-primary">business</span> sur les
                rails.
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl font-light leading-relaxed mb-10 font-body">
                Happy Business Leader, c&apos;est un programme court et immersif
                pour les entrepreneures qui ont besoin de tout reconstruire
                &mdash; l&apos;offre, la posture, le discours &mdash; dans un
                cadre structur&eacute; et bienveillant.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/#contact"
                  className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 font-bold tracking-[0.2em] text-xs hover:brightness-110 transition-all uppercase font-body text-center"
                >
                  Je veux rejoindre le bootcamp &rarr;
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="md:col-span-5 relative" delay={0.2}>
              <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              {/* Overlapping Typography Element */}
              <div className="absolute -left-12 bottom-12 hidden lg:block">
                <span className="font-headline text-9xl text-white/5 select-none pointer-events-none tracking-tighter">
                  ROYALE
                </span>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Pour qui? - Asymmetric Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <RevealOnScroll className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-highest">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-highest to-surface-container opacity-60" />
                </div>
                <div className="aspect-square bg-surface-container-highest mt-12">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-high to-surface-container opacity-60" />
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="order-1 md:order-2" delay={0.1}>
              <h2 className="font-headline text-5xl mb-12">Pour qui?</h2>
              <div className="space-y-12">
                {[
                  {
                    label: "LA D\u00c9CIDEUSE",
                    text: "Pour l\u2019entrepreneure qui sent que son mod\u00e8le actuel plafonne et qui refuse la stagnation.",
                  },
                  {
                    label: "L\u2019ARCHITECTE",
                    text: "Celle qui a besoin de restructurer ses fondations pour soutenir une croissance d\u2019exception.",
                  },
                  {
                    label: "LA VISIONNAIRE",
                    text: "Pour celle qui cherche un cadre bienveillant mais intransigeant sur l\u2019excellence.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group border-l border-white/10 pl-8 hover:border-primary transition-colors"
                  >
                    <span className="text-primary font-bold text-xs tracking-[0.2em] mb-2 block font-body">
                      {item.label}
                    </span>
                    <p className="text-white/60 font-light leading-relaxed font-body">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Le Programme - Bento Grid Style */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1920px] mx-auto">
            <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl mb-6 italic">
                  Le programme
                </h2>
                <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-body">
                  Un curriculum con&ccedil;u pour la transformation radicale.
                </p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
              {[
                {
                  num: "01",
                  title: "Audit & Posture",
                  text: "D\u00e9construire pour mieux reb\u00e2tir. Analyse sans filtre de ton positionnement actuel et alignement de ta posture de leader.",
                  bg: "bg-surface-container-low",
                },
                {
                  num: "02",
                  title: "Ing\u00e9nierie de l\u2019Offre",
                  text: "Cr\u00e9ation d\u2019offres irr\u00e9sistibles, rentables et haut de gamme qui refl\u00e8tent ta v\u00e9ritable valeur sur le march\u00e9.",
                  bg: "bg-surface",
                },
                {
                  num: "03",
                  title: "Discours & Autorit\u00e9",
                  text: "Ma\u00eetriser l\u2019art de la communication magn\u00e9tique pour attirer naturellement tes clients de c\u0153ur.",
                  bg: "bg-surface-container-low",
                },
              ].map((item, i) => (
                <RevealOnScroll
                  key={item.num}
                  className={`p-12 ${item.bg} ${i < 2 ? "border-r border-white/5" : ""} hover:bg-surface-container-high transition-colors`}
                  delay={i * 0.1}
                >
                  <span className="font-headline text-primary text-4xl mb-8 block">
                    {item.num}
                  </span>
                  <h3 className="font-bold tracking-widest text-xs mb-6 uppercase font-body">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-body">
                    {item.text}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que tu repars avec */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <RevealOnScroll className="bg-surface-container-lowest p-16 md:p-24 border-l-4 border-primary relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10">
                <svg
                  width="320"
                  height="320"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-on-surface"
                >
                  <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                </svg>
              </div>
              <h2 className="font-headline text-5xl mb-20 relative z-10">
                Ce que tu repars avec
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                {[
                  {
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                      </svg>
                    ),
                    title: "Une Roadmap Pr\u00e9cise",
                    text: "Plus de flou artistique. Tu sors avec un plan d\u2019action structur\u00e9 pour les 6 prochains mois.",
                  },
                  {
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                      </svg>
                    ),
                    title: "Un Positionnement Signature",
                    text: "Une identit\u00e9 de marque et une offre qui ne ressemblent qu\u2019\u00e0 toi, inimitables et d\u00e9sirables.",
                  },
                  {
                    icon: (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M6.05 4.14l-.39-.39c-.39-.39-1.02-.39-1.41 0l-.01.01c-.39.39-.39 1.02 0 1.41l.39.39c.39.39 1.03.39 1.42 0l-.01-.01c.4-.39.4-1.02.01-1.41zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95C11.45.56 11.02 0 10.51 0h-.02c-.51 0-.93.45-.98.95l-.01.07V2.5c0 .55.44.99.99.99h.01c.55 0 .99-.44.99-.99V.55zM19.76 4.14c-.39-.39-1.02-.39-1.41 0l-.39.39a.9959.9959 0 000 1.41c.39.39 1.02.39 1.41 0l.39-.39c.39-.39.39-1.02 0-1.41zM17.94 18.86l.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39a.9959.9959 0 00-1.41 0c-.39.38-.39 1.02 0 1.41zM21 10.5h-1c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H21c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99zm-9 5.01c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                      </svg>
                    ),
                    title: "Clart\u00e9 & S\u00e9r\u00e9nit\u00e9",
                    text: "La confiance d\u2019une leader qui sait exactement o\u00f9 elle va et comment elle y va.",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-6">
                    {item.icon}
                    <h4 className="font-bold tracking-widest text-xs uppercase font-body">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed font-body">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Tarif */}
        <section className="py-32">
          <RevealOnScroll className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] mb-6 block uppercase font-body">
              INVESTISSEMENT
            </span>
            <h2 className="font-headline text-7xl mb-8">Tarif</h2>
            <div className="bg-surface-container-low p-16 border border-white/5">
              <p className="font-headline text-primary text-5xl mb-4">
                2&nbsp;500&nbsp;&euro;
              </p>
              <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-12 font-body">
                Paiement en plusieurs fois disponible
              </p>
              <ul className="text-left space-y-4 mb-16 max-w-xs mx-auto text-sm text-white/60 font-light font-body">
                {[
                  "3 jours d\u2019immersion totale",
                  "Cahier d\u2019exercices strat\u00e9gique",
                  "Acc\u00e8s \u00e0 vie \u00e0 la communaut\u00e9",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary shrink-0"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="block bg-gradient-to-r from-primary to-primary-container text-on-primary w-full py-5 font-bold tracking-[0.2em] text-xs hover:brightness-110 transition-all uppercase font-body text-center"
              >
                Je veux rejoindre le bootcamp &rarr;
              </Link>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
