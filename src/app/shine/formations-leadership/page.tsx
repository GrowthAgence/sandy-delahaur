import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title:
    "Formations Leadership d\u2019Exception — SDL Agency | Phase SHINE",
  description:
    "Programmes approfondis sur les comp\u00e9tences cl\u00e9s du leadership f\u00e9minin : prise de parole, influence, gestion d\u2019\u00e9quipe, incarnation de marque. \u00c0 partir de 2\u00a0450\u20ac.",
};

/* ── Inline SVG icons ── */
function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary shrink-0 mt-0.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0014 0" />
      <path d="M12 18v4M8 22h8" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-on-primary"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M2 21v-1a5 5 0 015-5h4a5 5 0 015 5v1" />
      <path d="M17 14a5 5 0 014 5v2" />
    </svg>
  );
}

export default function FormationsLeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface-container to-surface opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
          </div>
          <RevealOnScroll className="relative z-10 px-6 md:px-12 max-w-5xl">
            <span className="font-body uppercase tracking-[0.3em] text-primary text-[10px] mb-6 block">
              PHASE SHINE
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Devenir une leader, <br />
              <span className="italic font-light">
                &ccedil;a s&apos;apprend.
              </span>
              <br />
              &Ccedil;a se choisit.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant/70 max-w-2xl leading-relaxed mb-12 font-light">
              Les Formations Leadership SDL sont des programmes approfondis sur
              les comp&eacute;tences cl&eacute;s du leadership f&eacute;minin en
              entrepreneuriat&nbsp;: prise de parole, influence, gestion
              d&apos;&eacute;quipe, incarnation de marque.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#pricing"
                className="btn-shimmer text-on-primary px-10 py-5 font-body font-extrabold uppercase tracking-widest text-[10px] inline-block hover:scale-105 transition-transform duration-300"
              >
                Voir les formations disponibles
              </a>
              <a
                href="#thematiques"
                className="border border-white/15 px-10 py-5 font-body font-extrabold uppercase tracking-widest text-[10px] hover:bg-white hover:text-surface transition-all duration-300 inline-block text-center"
              >
                D&eacute;couvrir l&apos;approche
              </a>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── Th&eacute;matiques - Bento Grid ── */}
        <section id="thematiques" className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <RevealOnScroll className="mb-16 md:mb-20">
            <h2 className="font-headline text-4xl md:text-5xl mb-4">
              Les Th&eacute;matiques
            </h2>
            <div className="w-24 h-px bg-primary" />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Module 01: Public Speaking */}
            <RevealOnScroll className="md:col-span-8">
              <div className="bg-surface p-12 group hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden h-full">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[250px]">
                  <div>
                    <span className="font-body text-primary text-[10px] tracking-widest uppercase mb-4 block">
                      Module 01
                    </span>
                    <h3 className="font-headline text-3xl md:text-4xl mb-6">
                      Prise de Parole &amp; &Eacute;loquence
                    </h3>
                    <p className="text-on-surface-variant/60 max-w-md mb-8 font-light">
                      Ma&icirc;trisez l&apos;art de captiver votre audience, que
                      ce soit sur sc&egrave;ne ou lors de r&eacute;unions
                      strat&eacute;giques.
                    </p>
                  </div>
                  <MicIcon />
                </div>
              </div>
            </RevealOnScroll>

            {/* Module 02: Influence - Gold card */}
            <RevealOnScroll className="md:col-span-4" delay={0.1}>
              <div className="bg-primary-container p-12 flex flex-col justify-between group h-full min-h-[250px]">
                <div>
                  <span className="font-body text-on-primary/60 text-[10px] tracking-widest uppercase mb-4 block">
                    Module 02
                  </span>
                  <h3 className="font-headline text-3xl text-on-primary mb-6">
                    Pouvoir &amp; Influence
                  </h3>
                  <p className="text-on-primary/80 font-light">
                    Comprendre les dynamiques de pouvoir pour asseoir votre
                    autorit&eacute; naturelle sans compromis.
                  </p>
                </div>
                <StarIcon />
              </div>
            </RevealOnScroll>

            {/* Module 03: Team Management */}
            <RevealOnScroll className="md:col-span-4" delay={0.15}>
              <div className="bg-surface-container-high p-12 flex flex-col justify-between group h-full min-h-[250px]">
                <div>
                  <span className="font-body text-primary text-[10px] tracking-widest uppercase mb-4 block">
                    Module 03
                  </span>
                  <h3 className="font-headline text-3xl mb-6">
                    Gestion d&apos;&Eacute;quipe
                  </h3>
                  <p className="text-on-surface-variant/60 font-light">
                    Passer du statut de solopreneure &agrave; celui de CEO.
                    Savoir d&eacute;l&eacute;guer et inspirer son &eacute;quipe.
                  </p>
                </div>
                <GroupIcon />
              </div>
            </RevealOnScroll>

            {/* Module 04: Personal Brand */}
            <RevealOnScroll className="md:col-span-8" delay={0.2}>
              <div className="bg-surface p-12 flex flex-col md:flex-row gap-12 items-center group h-full">
                <div className="flex-1">
                  <span className="font-body text-primary text-[10px] tracking-widest uppercase mb-4 block">
                    Module 04
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl mb-6">
                    Incarnation de Marque
                  </h3>
                  <p className="text-on-surface-variant/60 font-light">
                    Alignez votre identit&eacute; personnelle avec la vision de
                    votre entreprise pour une image de marque inoubliable.
                  </p>
                </div>
                <div className="w-full md:w-64 h-64 bg-surface-container-low relative overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-low to-surface" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Pour Qui Section ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
          <div className="flex flex-col md:flex-row gap-16 items-center max-w-7xl mx-auto">
            <RevealOnScroll className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 z-0" />
              <div className="relative z-10 w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </RevealOnScroll>

            <RevealOnScroll className="w-full md:w-1/2" delay={0.2}>
              <span className="font-body uppercase tracking-[0.3em] text-primary text-[10px] mb-6 block">
                DESTINATION
              </span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8">
                Pour qui est-ce&nbsp;?
              </h2>
              <p className="font-body text-lg text-on-surface-variant/70 mb-10 leading-relaxed font-light">
                Ce programme a &eacute;t&eacute; con&ccedil;u exclusivement pour
                les{" "}
                <span className="text-on-surface font-bold">
                  entrepreneures
                </span>{" "}
                qui ressentent que leur expertise technique d&eacute;passe leur
                aisance &agrave; diriger. Pour celles qui veulent passer du
                &ldquo;faire&rdquo; &agrave; l&apos;&ldquo;&ecirc;tre&rdquo;
                leader de fa&ccedil;on structur&eacute;e et
                &eacute;l&eacute;gante.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-on-surface-variant/80">
                    Entrepreneures en phase de croissance (Scale-up)
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-on-surface-variant/80">
                    Solopreneures pr&ecirc;tes &agrave; recruter leur
                    premi&egrave;re &eacute;quipe
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckIcon />
                  <span className="text-on-surface-variant/80">
                    Leaders souhaitant affiner leur posture publique
                  </span>
                </li>
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Format and Pricing ── */}
        <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <RevealOnScroll className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">
              Investissement &amp; Format
            </h2>
            <p className="text-on-surface-variant/60 font-light">
              Une exp&eacute;rience immersive con&ccedil;ue pour
              s&apos;int&eacute;grer dans votre emploi du temps de CEO.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 max-w-6xl mx-auto">
            {/* Format Details */}
            <RevealOnScroll>
              <div className="bg-surface p-12 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-body text-primary text-[10px] tracking-widest uppercase mb-12">
                    L&apos;EXP&Eacute;RIENCE
                  </h4>
                  <div className="space-y-12">
                    <div className="flex gap-8">
                      <span className="text-4xl font-headline text-white/20">
                        01.
                      </span>
                      <div>
                        <h5 className="font-bold mb-2">Sessions Live</h5>
                        <p className="text-sm text-on-surface-variant/50 font-light">
                          8 Masterclasses interactives avec coaching en direct.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-4xl font-headline text-white/20">
                        02.
                      </span>
                      <div>
                        <h5 className="font-bold mb-2">Atelier Physique</h5>
                        <p className="text-sm text-on-surface-variant/50 font-light">
                          Une journ&eacute;e d&apos;immersion dans un
                          h&ocirc;tel particulier &agrave; Paris.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-4xl font-headline text-white/20">
                        03.
                      </span>
                      <div>
                        <h5 className="font-bold mb-2">
                          Acc&egrave;s Illimit&eacute;
                        </h5>
                        <p className="text-sm text-on-surface-variant/50 font-light">
                          Vid&eacute;os de cours et cahiers d&apos;exercices
                          premium &agrave; vie.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Pricing Details */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-surface p-12 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-white/5 h-full">
                <span className="font-body text-primary text-[10px] tracking-widest uppercase mb-6">
                  TARIFICATION
                </span>
                <div className="mb-12">
                  <span className="text-on-surface-variant/40 text-sm uppercase">
                    &Agrave; partir de
                  </span>
                  <div className="text-6xl md:text-7xl font-headline text-gold-gradient my-2">
                    2.450&euro;
                  </div>
                  <p className="text-on-surface-variant/40 text-[10px] tracking-widest uppercase">
                    TTC &bull; Financement CPF possible
                  </p>
                </div>
                <div className="w-full space-y-4">
                  <Link
                    href="/#contact"
                    className="w-full btn-shimmer text-on-primary py-6 font-body font-extrabold uppercase tracking-widest text-[10px] block text-center"
                  >
                    Candidater maintenant
                  </Link>
                  <p className="text-[10px] text-on-surface-variant/30 uppercase tracking-[0.1em]">
                    S&eacute;lection sur dossier pour garantir
                    l&apos;homog&eacute;n&eacute;it&eacute; du groupe
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-32 md:py-40 px-6 md:px-12 relative overflow-hidden text-center bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
          </div>
          <RevealOnScroll className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight italic">
              Pr&ecirc;te &agrave; incarner <br />
              votre pleine puissance&nbsp;?
            </h2>
            <a
              href="#pricing"
              className="border-b-2 border-primary text-primary px-2 py-4 font-body font-extrabold uppercase tracking-[0.3em] text-lg md:text-xl hover:text-white hover:border-white transition-all duration-500 inline-block"
            >
              Voir les formations disponibles
            </a>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
