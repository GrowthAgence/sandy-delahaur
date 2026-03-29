import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";
import CandidatureForm from "./CandidatureForm";

export const metadata: Metadata = {
  title: "L\u2019Impact Mastermind \u00c9lite — SDL Agency | Phase SHINE",
  description:
    "Le cercle ferm\u00e9 des entrepreneures qui jouent vraiment grand. 8 leaders par an, immersion totale, accompagnement sur-mesure. Candidature sur s\u00e9lection.",
};

/* ── Inline SVG icons ── */
function PeersIcon() {
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
      <circle cx="8" cy="6" r="3" />
      <circle cx="16" cy="6" r="3" />
      <path d="M2 20v-1a5 5 0 015-5h2a5 5 0 015 5v1" />
      <path d="M16 11a5 5 0 014 5v4" />
    </svg>
  );
}

function VerifiedIcon() {
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
      <path d="M12 2l2.09 2.09L17 3l1.09 2.91L21 7l-.91 2.91L22 12l-2.09 2.09L21 17l-2.91 1.09L17 21l-2.91-.91L12 22l-2.09-2.09L7 21l-1.09-2.91L3 17l.91-2.91L2 12l2.09-2.09L3 7l2.91-1.09L7 3l2.91.91L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default function LImpactMastermindPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── Hero Section ── */}
        <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface-container to-surface opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface" />
          </div>

          <RevealOnScroll className="relative z-10 max-w-5xl">
            <span className="font-body uppercase tracking-[0.4em] text-primary mb-8 block text-[10px]">
              Phase SHINE
            </span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl mb-12 leading-[1.1] text-on-surface">
              Le cercle des entrepreneures qui{" "}
              <span className="italic font-normal text-primary-container">
                jouent vraiment grand.
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              L&apos;Impact est le mastermind haut niveau de SDL Agency. Un
              groupe ferm&eacute;, une s&eacute;lection exigeante, un niveau
              d&apos;exigence et de bienveillance rare.
            </p>
            <div className="mt-16">
              <a
                href="#candidature"
                className="btn-shimmer text-on-primary px-12 py-5 font-body uppercase tracking-widest text-[10px] font-bold inline-block hover:scale-105 transition-transform duration-300"
              >
                Candidater &agrave; L&apos;Impact
              </a>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── Pour Qui ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
            <RevealOnScroll className="lg:col-span-5 order-2 lg:order-1">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low brightness-75" />
            </RevealOnScroll>

            <RevealOnScroll className="lg:col-span-7 order-1 lg:order-2" delay={0.2}>
              <div className="max-w-xl lg:ml-auto">
                <span className="font-body text-primary uppercase tracking-widest text-[10px] mb-6 block">
                  &mdash; Manifeste d&apos;Excellence
                </span>
                <h2 className="font-headline text-4xl md:text-5xl mb-10 leading-tight">
                  Pour celles qui ne se contentent plus du{" "}
                  <span className="italic font-normal">suffisant</span>.
                </h2>
                <div className="space-y-8 font-body text-lg text-on-surface-variant leading-relaxed font-light">
                  <p>
                    Vous avez d&eacute;j&agrave; b&acirc;ti. Vous avez
                    d&eacute;j&agrave; r&eacute;ussi. Mais la phase{" "}
                    <strong className="text-on-surface font-bold">SHINE</strong>{" "}
                    demande une autre forme de courage&nbsp;: celui de
                    s&apos;entourer de ses pairs pour briser le plafond de verre
                    final.
                  </p>
                  <p>
                    L&apos;Impact n&apos;est pas une formation. C&apos;est un
                    sanctuaire pour les leaders qui veulent s&apos;entourer du
                    &ldquo;Best-in-class&rdquo; pour propulser leur vision sans
                    compromis.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Bento Grid: L'&eacute;cosyst&egrave;me ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
          <RevealOnScroll className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-6 italic">
              L&apos;&eacute;cosyst&egrave;me de votre ascension
            </h2>
            <div className="h-px w-24 bg-primary-container" />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-7xl mx-auto">
            {/* Peers */}
            <RevealOnScroll>
              <div className="bg-surface-container-high p-12 aspect-square flex flex-col justify-between hover:bg-surface-container-highest transition-colors duration-500">
                <PeersIcon />
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl mb-4">
                    Peers with Ambition
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed font-light">
                    Connectez avec des femmes qui partagent votre
                    intensit&eacute; et vos enjeux de croissance complexe.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Co-dev */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-surface-container-low p-12 aspect-square flex flex-col justify-between group">
                <div className="relative overflow-hidden h-48 -mx-12 -mt-12 mb-8">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl mb-4">
                    Co-development Sessions
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed font-light">
                    Des ateliers de r&eacute;solution strat&eacute;gique
                    o&ugrave; l&apos;intelligence collective d&eacute;bloque vos
                    angles morts.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Privileged Access */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-surface-container-high p-12 aspect-square flex flex-col justify-between hover:bg-surface-container-highest transition-colors duration-500">
                <VerifiedIcon />
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl mb-4">
                    Privileged Access
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed font-light">
                    Une ligne directe avec l&apos;&eacute;quipe SDL Agency pour
                    un soutien op&eacute;rationnel et strat&eacute;gique de
                    pointe.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Logistique Section ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <RevealOnScroll className="max-w-7xl mx-auto border border-white/5 bg-surface-container-highest p-12 md:p-24 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl mb-12">
                  Ce que le mastermind comprend
                </h2>
                <ul className="space-y-10">
                  <li className="flex items-start gap-6">
                    <span className="text-primary font-headline text-2xl">
                      01
                    </span>
                    <div>
                      <h4 className="font-body uppercase tracking-widest text-[10px] mb-2 text-on-surface">
                        Fr&eacute;quence &amp; Format
                      </h4>
                      <p className="text-on-surface-variant font-light">
                        Une immersion mensuelle hybride, m&ecirc;lant retraites
                        physiques d&apos;exception et suivis digitaux
                        hebdomadaires.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="text-primary font-headline text-2xl">
                      02
                    </span>
                    <div>
                      <h4 className="font-body uppercase tracking-widest text-[10px] mb-2 text-on-surface">
                        Dur&eacute;e du cycle
                      </h4>
                      <p className="text-on-surface-variant font-light">
                        Un engagement de 12 mois pour garantir une
                        transformation durable de vos structures et de votre
                        posture.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="text-primary font-headline text-2xl">
                      03
                    </span>
                    <div>
                      <h4 className="font-body uppercase tracking-widest text-[10px] mb-2 text-on-surface">
                        Crit&egrave;res d&apos;acc&egrave;s
                      </h4>
                      <p className="text-on-surface-variant font-light">
                        Chiffre d&apos;affaires minimum, taille
                        d&apos;&eacute;quipe et surtout, une ambition
                        align&eacute;e sur nos valeurs d&apos;&eacute;l&eacute;gance
                        et d&apos;impact.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Right: gradient placeholder */}
              <div className="hidden lg:block">
                <div className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-low to-surface brightness-50" />
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── CTA Form ── */}
        <section id="candidature" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
          <RevealOnScroll className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-body text-primary uppercase tracking-[0.3em] text-[10px] mb-4 block">
                S&eacute;lection en cours
              </span>
              <h2 className="font-headline text-5xl md:text-6xl mb-6">
                <WordReveal>{"Rejoindre L\u2019Impact"}</WordReveal>
              </h2>
              <p className="font-body text-on-surface-variant italic font-light">
                La s&eacute;lection est rigoureuse. Elle commence ici.
              </p>
            </div>
            <CandidatureForm />
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
