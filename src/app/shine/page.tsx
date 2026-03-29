import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "SHINE — SDL Agency | Le sommet du leadership f&eacute;minin",
  description:
    "Phase SHINE : le passage du faire au diriger. Pour les femmes d\u2019affaires qui ne cherchent plus \u00e0 prouver, mais \u00e0 laisser une empreinte ind\u00e9l\u00e9bile.",
};

/* ── Inline SVG check icon ── */
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

/* ── Arrow icon ── */
function ArrowIcon() {
  return (
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
  );
}

export default function ShinePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 overflow-x-hidden">
        {/* ── Hero Section ── */}
        <section className="relative min-h-dvh flex items-center pt-24 overflow-hidden bg-surface">
          {/* Background radial glow */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          </div>

          {/* Lumi&egrave;re bloom effect */}
          <div className="absolute -right-1/4 top-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,202,80,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <div className="max-w-4xl">
              <RevealOnScroll>
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
                  The Pinnacle of Leadership
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <h1 className="font-headline font-black mb-8 leading-[1.1] tracking-tighter text-white text-4xl md:text-6xl lg:text-7xl">
                  Tu n&apos;as plus besoin{" "}
                  <br className="hidden md:block" />
                  <span className="text-gold-gradient italic">d&apos;&ecirc;tre visible.</span>{" "}
                  Tu as besoin{" "}
                  <br className="hidden md:block" />
                  d&apos;impacter.
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <p className="font-body text-on-surface-variant max-w-xl text-lg mb-10 leading-relaxed font-light">
              Le passage du &laquo;&nbsp;faire&nbsp;&raquo; au
              &laquo;&nbsp;diriger&nbsp;&raquo;. Pour les femmes d&apos;affaires
              qui ne cherchent plus &agrave; prouver, mais &agrave; laisser une
              empreinte ind&eacute;l&eacute;bile.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── The Philosophy: Asymmetric Layout ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Editorial image placeholder */}
            <RevealOnScroll className="relative group">
              <div className="absolute -inset-4 border border-primary/10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              <div className="relative z-10 w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
              {/* Quote overlay */}
              <div className="absolute bottom-8 -right-4 md:-right-8 bg-surface px-8 py-10 z-20 border-l-4 border-primary shadow-2xl max-w-xs">
                <p className="font-headline italic text-xl md:text-2xl text-white">
                  &ldquo;L&apos;autorit&eacute; ne se crie pas, elle
                  s&apos;incarne.&rdquo;
                </p>
              </div>
            </RevealOnScroll>

            {/* Right: Text content */}
            <RevealOnScroll className="space-y-12" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-headline text-on-surface">
                  L&apos;Art de la Direction
                </h2>
                <div className="w-24 h-px bg-primary" />
              </div>
              <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed font-light">
                <p>
                  La visibilit&eacute; est une strat&eacute;gie de survie.
                  L&apos;impact est une strat&eacute;gie de r&egrave;gne. SHINE
                  est con&ccedil;u pour les leaders qui ont atteint le sommet
                  op&eacute;rationnel et qui ressentent maintenant l&apos;appel
                  d&apos;une expansion plus profonde.
                </p>
                <p>
                  Ici, nous d&eacute;construisons le besoin d&apos;&ecirc;tre
                  partout pour construire la capacit&eacute; d&apos;&ecirc;tre
                  l&agrave; o&ugrave; &ccedil;a compte. Nous transformons votre
                  leadership en un souffle qui dirige sans effort.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/15">
                  <div>
                    <span className="block text-3xl font-headline text-primary">
                      01.
                    </span>
                    <span className="block font-bold mt-2 text-on-surface">
                      Expansion
                    </span>
                    <p className="text-sm mt-1 text-on-surface-variant/50">
                      Sortir du cadre pour red&eacute;finir les r&egrave;gles de
                      votre industrie.
                    </p>
                  </div>
                  <div>
                    <span className="block text-3xl font-headline text-primary">
                      02.
                    </span>
                    <span className="block font-bold mt-2 text-on-surface">
                      Posture
                    </span>
                    <p className="text-sm mt-1 text-on-surface-variant/50">
                      Incarner une pr&eacute;sence qui commande le respect sans
                      un mot.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Offers: Premium Bento Grid ── */}
        <section id="offres" className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-surface">
          <RevealOnScroll className="text-center mb-16 md:mb-20">
            <h2 className="text-[10px] font-body tracking-[0.4em] uppercase text-primary mb-4">
              The SHINE Portfolio
            </h2>
            <p className="text-4xl md:text-5xl font-headline italic">
              Trois paliers d&apos;ascension leadership
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Offer 1: Wake Shift Monday */}
            <RevealOnScroll className="md:col-span-4" delay={0}>
              <Link
                href="/shine/wake-shift-monday"
                className="block bg-surface-container p-10 border border-outline-variant/10 hover:border-primary/30 transition-all h-full flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Calendar SVG icon */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="0" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-headline mb-2">
                      Wake Shift Monday
                    </h3>
                    <p className="text-on-surface-variant/60 leading-relaxed font-light">
                      Abonnement hebdomadaire. L&apos;alignement
                      strat&eacute;gique et mental pour dominer votre semaine
                      d&egrave;s la premi&egrave;re heure.
                    </p>
                  </div>
                </div>
                <div className="mt-12">
                  <span className="text-3xl font-headline text-white mb-6 block">
                    49&euro;{" "}
                    <span className="text-sm font-body text-on-surface-variant/40">
                      /mois
                    </span>
                  </span>
                  <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Join the Morning Shift <ArrowIcon />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Offer 2: Formations Leadership */}
            <RevealOnScroll className="md:col-span-8" delay={0.1}>
              <Link
                href="/shine/formations-leadership"
                className="block relative overflow-hidden group min-h-[400px]"
              >
                {/* Gradient placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="max-w-md space-y-4">
                    <span className="text-primary font-body text-[10px] tracking-widest uppercase">
                      Intensive Programs
                    </span>
                    <h3 className="text-3xl font-headline text-white">
                      Formations Leadership d&apos;Exception
                    </h3>
                    <p className="text-white/70 font-light">
                      Des modules pointus sur la n&eacute;gociation de haut vol,
                      la gouvernance et l&apos;impact m&eacute;diatique.
                    </p>
                    <span className="mt-4 border-b border-white text-white py-2 font-bold group-hover:text-primary group-hover:border-primary transition-all inline-block">
                      Explore Curriculum
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Offer 3: L'Impact Mastermind */}
            <RevealOnScroll className="md:col-span-12" delay={0.2}>
              <div className="bg-surface-container-highest relative overflow-hidden p-12 lg:p-20 flex flex-col lg:flex-row gap-12 items-center">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
                <div className="relative z-10 flex-1 space-y-8">
                  <div className="inline-block px-4 py-1 border border-primary/40 text-primary text-[10px] tracking-widest uppercase font-body">
                    Elite Mastermind
                  </div>
                  <h3 className="text-4xl md:text-6xl font-headline italic text-white">
                    L&apos;Impact
                  </h3>
                  <p className="text-lg md:text-xl text-on-surface-variant/70 max-w-xl font-light">
                    Un cercle ferm&eacute; de 8 leaders par an. Une immersion
                    totale pour pivoter de la gestion d&apos;entreprise &agrave;
                    la direction de destin&eacute;e. Acc&egrave;s direct et
                    accompagnement sur-mesure.
                  </p>
                  <div className="flex flex-wrap items-center gap-8">
                    <Link
                      href="/shine/l-impact-mastermind"
                      className="btn-shimmer text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-[10px] font-body shadow-xl shadow-primary/10 inline-block"
                    >
                      Candidature Spontan&eacute;e
                    </Link>
                    <span className="text-outline italic font-body">
                      Session 2024 compl&egrave;te.
                    </span>
                  </div>
                </div>
                <div className="relative z-10 shrink-0 w-full lg:w-1/3">
                  <div className="bg-surface p-8 border border-outline-variant/20 space-y-6">
                    <h4 className="font-headline text-xl">
                      L&apos;Exp&eacute;rience L&apos;Impact&nbsp;:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm opacity-80">
                          Retraite annuelle dans un lieu d&apos;exception
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm opacity-80">
                          Conseil strat&eacute;gique 1-on-1 mensuel
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm opacity-80">
                          R&eacute;seau d&apos;influence international
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Final Call to Action ── */}
        <section className="py-32 md:py-40 px-6 md:px-12 text-center relative bg-surface">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline italic text-white leading-tight">
              <WordReveal>{"Votre prochain chapitre ne sera pas écrit."}</WordReveal>
              <br />
              <span className="text-primary">
                <WordReveal delay={0.6} wordClassName="text-primary">{"Il sera dicté."}</WordReveal>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant/60 font-light max-w-2xl mx-auto">
              Pr&ecirc;te &agrave; passer de l&apos;ombre de
              l&apos;op&eacute;rationnel &agrave; la lumi&egrave;re de
              l&apos;influence&nbsp;? R&eacute;servez votre diagnostic de
              posture aujourd&apos;hui.
            </p>
            <RevealOnScroll delay={1.0}>
              <div className="pt-8">
                <Link
                  href="/#contact"
                  className="bg-transparent border-2 border-primary text-primary px-12 md:px-16 py-5 md:py-6 text-lg md:text-xl font-bold font-body hover:bg-primary hover:text-on-primary transition-all duration-500 inline-block"
                >
                  <WordReveal delay={1.2} stagger={0.12}>{"Commencer l\u2019ascension"}</WordReveal>
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
