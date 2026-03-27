import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title:
    "Accompagnement Acc\u00e9l\u00e9ration \u2014 1:1 sur 3 mois | SDL Agency",
  description:
    "Ce n\u2019est pas du coaching. C\u2019est de l\u2019acc\u00e9l\u00e9ration. Un accompagnement sur mesure pour les femmes entrepreneures pr\u00eates \u00e0 aller vite, avec un plan, des jalons, et des r\u00e9sultats mesurables.",
};

const PROTOCOL_STEPS = [
  {
    num: "01",
    title: "Duration",
    description:
      "Un cycle intensif de 3 mois. Suffisamment long pour ancrer des syst\u00e8mes robustes, suffisamment court pour maintenir une tension cr\u00e9ative constante.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    tag: "Fixed Timeline",
    bg: "bg-surface-container",
  },
  {
    num: "02",
    title: "Frequency",
    description:
      "Check-points strat\u00e9giques hebdomadaires. Pas de r\u00e9unions pour le plaisir des r\u00e9unions : on valide les jalons, on d\u00e9bloque les goulots d\u2019\u00e9tranglement, on ex\u00e9cute.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="2"
      >
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
    tag: "Weekly Sprints",
    bg: "bg-surface-container-low",
  },
  {
    num: "03",
    title: "Format",
    description:
      "Hybrid Delivery. Sessions virtuelles de haute intensit\u00e9 coupl\u00e9es \u00e0 un acc\u00e8s asynchrone permanent via notre canal priv\u00e9 \u201cAtelier\u201d.",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2ca50"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    tag: "High Touch Access",
    bg: "bg-surface-container",
  },
];

export default function AccompagnementAccelerationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-screen-2xl mx-auto">
          <div className="md:col-span-7 z-10">
            <RevealOnScroll>
              <span className="font-body uppercase tracking-[0.5em] text-primary text-[10px] mb-8 block font-semibold">
                Phase d&apos;ex&eacute;cution
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 tracking-tight">
                Un accompagnement sur mesure, quand tu es pr&ecirc;te
                &agrave; aller <span className="italic">vite</span>.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                Ce n&apos;est pas du coaching. C&apos;est de
                l&apos;acc&eacute;l&eacute;ration. On travaille ensemble sur ta
                situation pr&eacute;cise, avec un plan, des jalons, et des
                r&eacute;sultats mesurables.
              </p>
            </RevealOnScroll>
          </div>
          <div className="md:col-span-5 relative">
            <RevealOnScroll delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low border border-white/5" />
              <div className="absolute -bottom-10 -left-10 bg-primary-container p-10 md:p-14 shadow-2xl max-w-[80%]">
                <p className="font-headline italic text-on-primary text-2xl md:text-3xl leading-snug">
                  L&apos;excellence ne n&eacute;gocie pas.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Pour Qui Section */}
        <section className="bg-surface-container-low px-6 md:px-12 py-40">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div>
              <RevealOnScroll>
                <h2 className="font-headline text-4xl md:text-5xl mb-14 uppercase tracking-[0.2em] border-l-4 border-primary pl-8">
                  Pour Qui
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="font-body text-xl text-on-surface-variant mb-16 leading-relaxed font-light">
                  SHIFT est r&eacute;serv&eacute; aux femmes entrepreneures qui
                  ont d&eacute;j&agrave; valid&eacute; leur offre mais qui
                  stagnent face au plafond de verre de
                  l&apos;ex&eacute;cution. C&apos;est pour celles qui ne
                  cherchent pas des conseils th&eacute;oriques, mais un bras
                  droit strat&eacute;gique.
                </p>
              </RevealOnScroll>
              <div className="space-y-10">
                <RevealOnScroll delay={0.2}>
                  <div className="flex items-start gap-8 group">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <path d="M2 20l4-4m0 0l2-8 8 2m-10 6l10-6" />
                      <path d="M18 4l2 2-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-body uppercase tracking-[0.2em] text-sm mb-3 font-bold text-white">
                        Ambitious Entrepreneurs
                      </h4>
                      <p className="text-base text-on-surface-variant leading-relaxed font-body">
                        Pr&ecirc;tes &agrave; briser les codes et &agrave;
                        assumer une croissance agressive.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}>
                  <div className="flex items-start gap-8 group">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M12 12h.01" />
                      <path d="M17 12h.01" />
                      <path d="M7 12h.01" />
                    </svg>
                    <div>
                      <h4 className="font-body uppercase tracking-[0.2em] text-sm mb-3 font-bold text-white">
                        Investment Ready
                      </h4>
                      <p className="text-base text-on-surface-variant leading-relaxed font-body">
                        Conscientes que le temps est la ressource la plus
                        ch&egrave;re et pr&ecirc;tes &agrave; investir pour
                        l&apos;acheter.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
            <RevealOnScroll delay={0.15}>
              <div className="flex flex-col justify-center h-full">
                <div className="bg-surface-container-highest p-16 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-16 translate-x-16 rotate-45" />
                  <span className="font-headline text-[12rem] text-primary/10 absolute -top-16 -left-4 leading-none pointer-events-none">
                    &ldquo;
                  </span>
                  <p className="font-headline text-2xl md:text-3xl italic leading-relaxed mb-10 relative z-10 text-white/90">
                    &ldquo;Si tu cherches quelqu&apos;un pour
                    t&apos;&eacute;couter parler de tes doutes, prends un
                    coach. Si tu cherches quelqu&apos;un pour construire la
                    machine de guerre qui va porter ton ambition, rejoins
                    SHIFT.&rdquo;
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="h-[1px] w-12 bg-primary" />
                    <p className="font-body uppercase tracking-[0.3em] text-xs text-primary font-bold">
                      Directrice, SDL Agency
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Comment ca se passe Section */}
        <section className="px-6 md:px-12 py-40 max-w-screen-2xl mx-auto">
          <RevealOnScroll>
            <div className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-[0.2em]">
                Le Protocole
              </h2>
              <span className="font-body text-[10px] tracking-[0.6em] text-primary uppercase font-bold border-b border-primary/30 pb-2">
                Processus d&apos;Atelier
              </span>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {PROTOCOL_STEPS.map((step, index) => (
              <RevealOnScroll key={step.num} delay={index * 0.15}>
                <div
                  className={`${step.bg} p-16 min-h-[480px] flex flex-col justify-between hover:bg-surface-container-low transition-all duration-700 border border-white/5`}
                >
                  <div>
                    <span className="font-headline text-primary text-6xl block mb-10 font-light opacity-50">
                      {step.num}
                    </span>
                    <h3 className="font-headline text-3xl mb-8 uppercase tracking-widest text-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-on-surface-variant leading-relaxed text-lg font-light">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-12 flex items-center gap-3">
                    {step.icon}
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                      {step.tag}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 py-40 bg-surface border-y border-white/5">
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-headline text-5xl md:text-7xl mb-12 leading-tight tracking-tight">
                Pr&ecirc;te &agrave; passer en phase{" "}
                <span className="italic text-primary">SHIFT</span> ?
              </h2>
              <p className="font-body text-on-surface-variant mb-16 text-xl max-w-2xl mx-auto font-light">
                Les places sont limit&eacute;es &agrave; 3 dossiers par
                trimestre pour garantir une immersion totale.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a
                  href="#"
                  className="bg-primary-container text-on-primary px-16 py-6 font-body uppercase tracking-[0.2em] text-xs font-black hover:brightness-110 transition-all min-w-[280px] text-center"
                >
                  Postuler maintenant
                </a>
                <a
                  href="#"
                  className="border border-primary/30 text-white px-16 py-6 font-body uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/5 transition-all min-w-[280px] text-center"
                >
                  Consulter le B2B
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
