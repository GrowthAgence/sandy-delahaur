import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Speed Happy Business — Diagnostic gratuit 1h | SDL Agency",
  description:
    "Speed Happy Business, c\u2019est le point de d\u00e9part. Un format court, intense, 100% actionnable \u2014 pour comprendre o\u00f9 tu en es et ce qui bloque vraiment.",
};

export default function SpeedHappyBusinessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section: Editorial Layout */}
        <section className="relative px-6 md:px-12 lg:px-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <RevealOnScroll className="lg:col-span-7 z-10">
            <span className="inline-block mb-6 text-xs tracking-[0.3em] font-extrabold text-primary uppercase font-body">
              SPEED HAPPY BUSINESS
            </span>
            <h1 className="text-6xl md:text-8xl font-headline leading-tight mb-8">
              Teste la m&eacute;thode SDL{" "}
              <span className="italic text-gold-gradient">en 1 heure.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed mb-12 font-body">
              Speed Happy Business, c&apos;est le point de d&eacute;part. Un
              format court, intense, 100% actionnable &mdash; pour comprendre
              o&ugrave; tu en es et ce qui bloque vraiment.{" "}
              <span className="font-bold text-white italic">
                Sans engagement.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/#contact"
                className="bg-primary-container text-on-primary font-bold tracking-widest px-10 py-5 text-sm uppercase hover:bg-primary transition-all duration-300 text-center font-body"
              >
                Je r&eacute;serve ma place gratuite &rarr;
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="lg:col-span-5 relative" delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-surface-container-high to-surface-container-low">
              <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-low p-8 hidden md:block border-l border-t border-primary/20">
              <p className="font-headline text-2xl italic">
                L&apos;excellence ne prend pas de temps, elle prend de
                l&apos;intention.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* Ce que tu vas vivre: Bento Grid */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1920px] mx-auto">
            <RevealOnScroll>
              <h2 className="text-xs tracking-[0.4em] font-extrabold text-primary uppercase mb-16 text-center font-body">
                CE QUE TU VAS VIVRE
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/15">
              <RevealOnScroll className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/15 hover:bg-surface transition-colors group">
                <span className="text-4xl font-headline text-primary mb-6 block">
                  01.
                </span>
                <h3 className="text-2xl font-headline mb-4">
                  Le Scan Radical
                </h3>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  Une analyse sans concession de ton business model actuel pour
                  identifier la faille syst&eacute;mique qui freine ta
                  croissance.
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z" />
                  </svg>
                </div>
              </RevealOnScroll>
              <RevealOnScroll
                className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/15 bg-surface-container-high z-10 md:scale-105"
                delay={0.1}
              >
                <span className="text-4xl font-headline text-primary mb-6 block">
                  02.
                </span>
                <h3 className="text-2xl font-headline mb-4">
                  L&apos;Alignement SDL
                </h3>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  Exp&eacute;rimente la puissance de la m&eacute;thode
                  Succ&egrave;s - D&eacute;sir - Libert&eacute; pour recalibrer
                  tes priorit&eacute;s imm&eacute;diates.
                </p>
                <div className="mt-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z" />
                  </svg>
                </div>
              </RevealOnScroll>
              <RevealOnScroll
                className="p-12 hover:bg-surface transition-colors group"
                delay={0.2}
              >
                <span className="text-4xl font-headline text-primary mb-6 block">
                  03.
                </span>
                <h3 className="text-2xl font-headline mb-4">
                  Plan d&apos;Action Flash
                </h3>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  Repars avec 3 leviers concrets &agrave; activer d&egrave;s la
                  fin de l&apos;heure pour d&eacute;bloquer ton chiffre
                  d&apos;affaires.
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Pour qui?: Asymmetric Layout */}
        <section className="py-32 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-[1920px] mx-auto">
          <RevealOnScroll className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-surface-container-high to-surface-container" />
              <div className="aspect-square bg-gradient-to-br from-surface-container to-surface-container-low mt-12" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="order-1 lg:order-2" delay={0.1}>
            <h2 className="text-xs tracking-[0.4em] font-extrabold text-primary uppercase mb-8 font-body">
              POUR QUI?
            </h2>
            <h3 className="text-4xl md:text-5xl font-headline leading-tight mb-8">
              Con&ccedil;u exclusivement pour les{" "}
              <span className="italic">femmes entrepreneures</span>{" "}
              visionnaires.
            </h3>
            <ul className="space-y-6 text-lg text-on-surface-variant font-body">
              <li className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary mt-1 shrink-0"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>
                  Tu as d&eacute;j&agrave; un business lanc&eacute; mais tu
                  stagnes au m&ecirc;me palier depuis 6 mois.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary mt-1 shrink-0"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>
                  Tu es d&eacute;bord&eacute;e par l&apos;op&eacute;rationnel et
                  tu as perdu la vision strat&eacute;gique.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary mt-1 shrink-0"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>
                  Tu cherches une m&eacute;thode d&apos;&eacute;lite, loin des
                  conseils g&eacute;n&eacute;riques du web.
                </span>
              </li>
            </ul>
          </RevealOnScroll>
        </section>

        {/* Format & Logistique */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-4xl mx-auto border-t border-outline-variant/30">
            <RevealOnScroll>
              <h2 className="text-xs tracking-[0.4em] font-extrabold text-primary uppercase py-12 text-center font-body">
                FORMAT &amp; LOGISTIQUE
              </h2>
            </RevealOnScroll>
            <div className="space-y-0">
              <RevealOnScroll className="flex flex-col md:flex-row justify-between py-12 border-b border-outline-variant/15">
                <span className="font-headline text-xl italic md:w-1/3">
                  Dur&eacute;e
                </span>
                <span className="text-2xl font-bold md:w-2/3 uppercase tracking-widest font-body">
                  60 Minutes Intenses
                </span>
              </RevealOnScroll>
              <RevealOnScroll
                className="flex flex-col md:flex-row justify-between py-12 border-b border-outline-variant/15"
                delay={0.05}
              >
                <span className="font-headline text-xl italic md:w-1/3">
                  Plateforme
                </span>
                <span className="text-2xl font-bold md:w-2/3 uppercase tracking-widest font-body">
                  Atelier Priv&eacute; Zoom
                </span>
              </RevealOnScroll>
              <RevealOnScroll
                className="flex flex-col md:flex-row justify-between py-12 border-b border-outline-variant/15"
                delay={0.1}
              >
                <span className="font-headline text-xl italic md:w-1/3">
                  Investissement
                </span>
                <span className="text-2xl font-bold md:w-2/3 uppercase tracking-widest text-primary font-body">
                  Gratuit &mdash; Sur S&eacute;lection
                </span>
              </RevealOnScroll>
              <RevealOnScroll
                className="flex flex-col md:flex-row justify-between py-12 border-b border-outline-variant/15"
                delay={0.15}
              >
                <span className="font-headline text-xl italic md:w-1/3">
                  Prochaines Sessions
                </span>
                <div className="md:w-2/3 font-body">
                  <p className="text-xl mb-2">
                    Mardi 14 Mai &bull; 10:00 AM
                  </p>
                  <p className="text-xl">Jeudi 16 Mai &bull; 15:00 PM</p>
                </div>
              </RevealOnScroll>
            </div>
            <RevealOnScroll className="mt-20 text-center" delay={0.2}>
              <Link
                href="/#contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary font-extrabold tracking-[0.2em] px-16 py-6 text-sm uppercase hover:scale-105 transition-transform duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-body"
              >
                Je r&eacute;serve ma place gratuite &rarr;
              </Link>
              <p className="mt-6 text-xs text-white/40 tracking-widest uppercase italic font-body">
                Places limit&eacute;es &agrave; 5 participantes par session pour
                garantir la qualit&eacute;.
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
