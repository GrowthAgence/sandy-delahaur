import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Masterclass Pitch — 35\u20ac | SDL Agency",
  description:
    "L\u2019art de transformer votre expertise en une \u00e9vidence narrative. Apprenez \u00e0 convaincre sans forcer.",
};

export default function MasterclassPitchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,202,80,0.08)_0%,rgba(19,19,19,0)_70%)]" />
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <RevealOnScroll className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-[10px] tracking-[0.3em] uppercase font-bold bg-primary/5 font-body">
                  Exclusive Workshop
                </span>
                <h1 className="text-6xl md:text-8xl font-headline font-light leading-[1.1] tracking-tight text-on-surface">
                  Masterclass{" "}
                  <br />
                  <span className="italic text-primary">Pitch</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-body text-on-surface-variant/80 max-w-xl leading-relaxed">
                L&apos;art de transformer votre expertise en une &eacute;vidence
                narrative. Apprenez &agrave; convaincre sans forcer.
              </p>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-outline font-body">
                      Every Monday
                    </p>
                    <p className="text-lg font-bold font-body">
                      19:00 (Paris Time)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-outline font-body">
                      Investment
                    </p>
                    <p className="text-lg font-bold font-body">
                      35&euro;{" "}
                      <span className="text-sm font-normal text-outline">
                        incl. taxes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  href="/#contact"
                  className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:scale-105 transition-transform shadow-xl shadow-primary/10 font-body"
                >
                  S&apos;INSCRIRE MAINTENANT
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5 relative group" delay={0.2}>
              <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Section 2: Pain Points */}
        <section className="py-32 px-6 md:px-8 bg-surface-container-low">
          <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-headline italic leading-snug">
              &ldquo;Tu cherches tes mots,{" "}
              <br />
              <span className="text-primary not-italic font-bold">
                tu perds ton interlocuteur.&rdquo;
              </span>
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto" />
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto font-body">
              Le silence qui suit un pitch confus n&apos;est pas de la
              r&eacute;flexion, c&apos;est de l&apos;oubli. Arr&ecirc;tez de
              diluer votre impact dans des explications interminables.
            </p>
          </RevealOnScroll>
        </section>

        {/* Section 3: 4 Blocks (Methodology) */}
        <section className="py-32 px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
            {[
              {
                num: "01",
                title: "Diagnostic",
                text: "Identifier les angles morts de votre communication actuelle et pourquoi elle ne convertit pas.",
                offset: false,
              },
              {
                num: "02",
                title: "Simplifier",
                text: "Extraire l\u2019essence de votre valeur. Si un enfant ne comprend pas, votre client n\u2019ach\u00e8tera pas.",
                offset: true,
              },
              {
                num: "03",
                title: "Structurer",
                text: "B\u00e2tir un squelette narratif solide bas\u00e9 sur les leviers psychologiques de la persuasion.",
                offset: false,
              },
              {
                num: "04",
                title: "Passer \u00e0 l\u2019oral",
                text: "Incarner votre message. La voix, le rythme et la posture qui assoient votre autorit\u00e9 naturelle.",
                offset: true,
              },
            ].map((item, i) => (
              <RevealOnScroll
                key={item.num}
                className={`group p-12 bg-surface-container border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 ${item.offset ? "lg:translate-y-8" : ""}`}
                delay={i * 0.1}
              >
                <span className="text-primary/20 font-headline text-6xl block mb-6 group-hover:text-primary transition-colors">
                  {item.num}
                </span>
                <h3 className="text-xl font-headline font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  {item.text}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Section 4: What you get */}
        <section className="py-32 px-6 md:px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <RevealOnScroll className="space-y-12">
              <h2 className="text-5xl font-headline leading-tight">
                Ce que vous{" "}
                <br />
                <span className="italic text-primary">emportez</span>
              </h2>
              <ul className="space-y-8">
                {[
                  {
                    title: "Votre Pitch de 60 secondes",
                    desc: "Un script cisel\u00e9, pr\u00eat \u00e0 l\u2019emploi pour vos prochains \u00e9v\u00e9nements de networking.",
                  },
                  {
                    title: 'Le Blueprint "SDL"',
                    desc: "Notre m\u00e9thode propri\u00e9taire de structuration de discours haut de gamme.",
                  },
                  {
                    title: "Acc\u00e8s au Replay (7 jours)",
                    desc: "Pour r\u00e9viser chaque nuance et affiner votre pratique \u00e0 votre rythme.",
                  },
                  {
                    title: "Q&A Session en Live",
                    desc: "R\u00e9ponses directes \u00e0 vos blocages sp\u00e9cifiques par Sandy en personne.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-6 items-start group"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary mt-1 shrink-0"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors font-body">
                        {item.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant font-body">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll
              className="bg-surface-container-high p-12 border-l-4 border-primary shadow-2xl"
              delay={0.2}
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl font-headline italic text-on-surface leading-relaxed">
                  &laquo;&nbsp;J&apos;ai multipli&eacute; mes closing par trois
                  apr&egrave;s seulement une session. Sandy m&apos;a
                  aid&eacute; &agrave; retirer tout le &lsquo;bruit&rsquo; pour
                  ne garder que le signal.&nbsp;&raquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
                    <span className="font-headline text-primary text-lg">
                      MA
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm tracking-widest uppercase font-body">
                      Marc-Antoine D.
                    </p>
                    <p className="text-xs text-outline italic font-body">
                      CEO, Tech Frontiers
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-32 px-6 md:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 pointer-events-none" />
          <RevealOnScroll className="max-w-4xl mx-auto space-y-12 relative z-10">
            <h2 className="text-5xl font-headline">
              Pr&ecirc;t &agrave; briller&nbsp;?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-xl mx-auto font-body">
              Places limit&eacute;es &agrave; 12 participants par session pour
              garantir une interaction de haute qualit&eacute;.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/#contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-16 py-6 font-bold text-lg tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(242,202,80,0.2)] transition-all font-body"
              >
                R&Eacute;SERVER MA PLACE &mdash; 35&euro;
              </Link>
              <p className="text-xs text-outline uppercase tracking-widest font-body">
                Paiement s&eacute;curis&eacute; via Stripe
              </p>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
