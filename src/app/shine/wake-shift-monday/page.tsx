import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Wake Shift Monday — SDL Agency | Abonnement hebdomadaire SHINE",
  description:
    "Le rendez-vous hebdomadaire de la communaut\u00e9 SDL. Un format live court pour d\u00e9marrer la semaine avec les bonnes intentions, les bons outils, et les bonnes personnes. 49\u20ac/mois.",
};

/* ── Inline SVG check icon ── */
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="text-primary shrink-0 mt-0.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function WakeShiftMondayPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── Hero Section ── */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-surface">
          {/* Background glow */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          </div>

          <RevealOnScroll className="relative z-10 max-w-5xl w-full text-center md:text-left">
            <p className="font-body uppercase tracking-[0.4em] text-primary text-[10px] mb-6">
              Subscription Phase&nbsp;: SHINE
            </p>
            <h1 className="font-headline italic text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 text-on-surface">
              Chaque lundi,
              <br />
              <span className="text-primary">une dose d&apos;&eacute;lan</span>
              <br />
              pour ta semaine.
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
              <p className="text-lg md:text-xl text-on-surface-variant/70 max-w-2xl leading-relaxed font-light">
                Wake Shift Monday, c&apos;est le rendez-vous hebdomadaire de la
                communaut&eacute; SDL. Un format live court pour d&eacute;marrer
                la semaine avec les bonnes intentions, les bons outils, et les
                bonnes personnes autour de toi.
              </p>
              <div className="mt-4 md:mt-0 shrink-0">
                <a
                  href="#pricing"
                  className="btn-shimmer text-on-primary px-10 py-5 font-body tracking-[0.2em] uppercase text-[10px] font-bold inline-block hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                  Je rejoins Wake Shift Monday
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ── What You Get Each Week ── */}
        <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-12 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-7xl mx-auto">
            {/* Left: gradient placeholder */}
            <RevealOnScroll className="w-full md:w-1/2 relative">
              <div className="absolute -top-12 -left-12 z-0 hidden md:block">
                <span className="font-headline text-[10rem] lg:text-[12rem] text-white/5 leading-none select-none">
                  ELITE
                </span>
              </div>
              <div className="relative z-10 w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
            </RevealOnScroll>

            {/* Right: Weekly benefits */}
            <RevealOnScroll className="w-full md:w-1/2" delay={0.2}>
              <h2 className="font-body uppercase tracking-[0.3em] text-primary text-[10px] mb-12">
                Ce que tu re&ccedil;ois chaque semaine
              </h2>
              <div className="space-y-16">
                <div className="group border-l border-white/10 pl-8 hover:border-primary transition-colors duration-500">
                  <h3 className="font-headline text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                    Un th&egrave;me business/mindset actionnable
                  </h3>
                  <p className="text-on-surface-variant/50 leading-relaxed font-light">
                    Pas de th&eacute;orie superflue. Juste l&apos;essence de ce
                    qui propulse une entreprise en phase SHINE vers
                    l&apos;excellence op&eacute;rationnelle et
                    l&apos;&eacute;panouissement personnel.
                  </p>
                </div>
                <div className="group border-l border-white/10 pl-8 hover:border-primary transition-colors duration-500">
                  <h3 className="font-headline text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                    Un espace d&apos;&eacute;change privil&eacute;gi&eacute;
                  </h3>
                  <p className="text-on-surface-variant/50 leading-relaxed font-light">
                    Connecte-toi avec d&apos;autres membres qui partagent tes
                    ambitions. L&apos;intelligence collective au service de ton
                    &eacute;lan hebdomadaire.
                  </p>
                </div>
                <div className="group border-l border-white/10 pl-8 hover:border-primary transition-colors duration-500">
                  <h3 className="font-headline text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                    Des ressources exclusives
                  </h3>
                  <p className="text-on-surface-variant/50 leading-relaxed font-light">
                    Workbooks, templates, et archives de sessions
                    r&eacute;serv&eacute;s exclusivement aux abonn&eacute;es de
                    la communaut&eacute; SDL.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Pour Qui ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <RevealOnScroll className="md:col-span-7 order-2 md:order-1">
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
                Pour celles qui ne s&apos;arr&ecirc;tent jamais de{" "}
                <span className="italic text-primary">briller</span>.
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant/60 mb-8 max-w-xl font-light">
                Pour les entrepreneures en phase SHINE qui veulent maintenir
                leur &eacute;lan, rester connect&eacute;es &agrave; une
                communaut&eacute; exigeante et continuer &agrave; grandir.
              </p>
              <p className="text-lg text-on-surface-variant/40 italic font-light">
                &ldquo;La phase Shine demande plus qu&apos;un simple effort,
                elle exige une intention constante.&rdquo;
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="md:col-span-5 order-1 md:order-2" delay={0.15}>
              <div className="bg-surface-container-high p-1 w-full aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-surface-container via-surface-container-low to-surface opacity-80" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Pricing Section ── */}
        <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <RevealOnScroll className="text-center mb-16 md:mb-24">
            <h2 className="font-body uppercase tracking-[0.5em] text-primary text-[10px] mb-6">
              Investissement Personnel
            </h2>
            <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl">
              Choisis ta fr&eacute;quence
            </h3>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {/* Monthly */}
            <RevealOnScroll>
              <div className="bg-surface p-12 md:p-20 flex flex-col justify-between h-full group hover:bg-surface-container-high transition-colors duration-500">
                <div>
                  <span className="font-body uppercase tracking-[0.2em] text-primary text-[10px]">
                    Mensuel
                  </span>
                  <h4 className="font-headline text-5xl mt-6 mb-2">49&euro;</h4>
                  <p className="text-on-surface-variant/40 text-[10px] tracking-widest uppercase mb-12">
                    Sans engagement
                  </p>
                  <ul className="space-y-6 mb-16">
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      Live hebdomadaire chaque lundi
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      Acc&egrave;s au replay (7 jours)
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      Communaut&eacute; active
                    </li>
                  </ul>
                </div>
                <Link
                  href="/#contact"
                  className="w-full border border-white/20 py-5 font-body tracking-[0.2em] uppercase text-[10px] hover:bg-white hover:text-surface transition-all duration-300 block text-center"
                >
                  Souscrire mensuel
                </Link>
              </div>
            </RevealOnScroll>

            {/* Annual */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-surface-container-high p-12 md:p-20 flex flex-col justify-between h-full border-t md:border-t-0 md:border-l border-white/5 relative overflow-hidden">
                <div className="absolute top-8 right-8 btn-shimmer px-4 py-1">
                  <span className="text-[10px] font-bold text-on-primary tracking-widest uppercase">
                    -20% OFF
                  </span>
                </div>
                <div>
                  <span className="font-body uppercase tracking-[0.2em] text-primary text-[10px]">
                    Annuel
                  </span>
                  <h4 className="font-headline text-5xl mt-6 mb-2">
                    470&euro;
                  </h4>
                  <p className="text-on-surface-variant/40 text-[10px] tracking-widest uppercase mb-12">
                    Paiement unique
                  </p>
                  <ul className="space-y-6 mb-16">
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      Tous les avantages Mensuel
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      Acc&egrave;s illimit&eacute; aux archives
                    </li>
                    <li className="flex items-center gap-4 text-on-surface-variant/70">
                      <CheckIcon />
                      2 Sessions strat&eacute;giques bonus
                    </li>
                  </ul>
                </div>
                <Link
                  href="/#contact"
                  className="w-full btn-shimmer text-on-primary py-5 font-body tracking-[0.2em] uppercase text-[10px] font-bold block text-center"
                >
                  Souscrire annuel
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-32 md:py-48 px-6 text-center relative overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
            <span className="font-headline text-[12rem] md:text-[20rem] lg:text-[25rem] text-primary whitespace-nowrap opacity-10 select-none">
              WAKE SHIFT
            </span>
          </div>
          <RevealOnScroll className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-12">
              Pr&ecirc;te pour le prochain lundi&nbsp;?
            </h2>
            <Link
              href="/#contact"
              className="btn-shimmer text-on-primary px-12 md:px-16 py-6 md:py-8 font-body tracking-[0.3em] uppercase text-[10px] font-black inline-block hover:scale-105 transition-transform duration-500 shadow-[0_0_60px_rgba(212,175,55,0.3)]"
            >
              Je rejoins Wake Shift Monday
            </Link>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
