import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title:
    "Atelier D\u00e9clic Visibilit\u00e9 \u2014 490\u20ac | SDL Agency",
  description:
    "Arr\u00eate de publier pour publier. Commence \u00e0 publier pour vendre. L\u2019atelier D\u00e9clic Visibilit\u00e9 : un format court et concret pour transformer ta pr\u00e9sence en ligne en levier de conversion.",
};

export default function AtelierDeclicVisibilitePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 md:px-24 py-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full z-10">
            <div className="md:col-span-7">
              <RevealOnScroll>
                <div className="mb-6">
                  <span className="inline-block py-1 px-4 border border-primary-container/30 text-primary font-body text-[10px] tracking-[0.3em] uppercase">
                    Phase: SHIFT
                  </span>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-bold">
                  Arr&ecirc;te de{" "}
                  <span className="italic text-primary">publier</span> pour
                  publier. <br />
                  Commence &agrave; publier pour{" "}
                  <span className="underline decoration-1 underline-offset-8">
                    vendre
                  </span>
                  .
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light font-body">
                  L&apos;atelier D&eacute;clic Visibilit&eacute;, c&apos;est
                  un format court et concret pour comprendre comment ta
                  pr&eacute;sence en ligne peut devenir un levier de conversion
                  &mdash; pas juste de notori&eacute;t&eacute;.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="#cta"
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 font-body font-extrabold uppercase tracking-widest text-sm shadow-xl text-center"
                  >
                    R&eacute;server ma place
                  </a>
                  <a
                    href="#deliverables"
                    className="border border-outline-variant/30 text-white px-10 py-5 font-body font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors text-center"
                  >
                    D&eacute;couvrir le programme
                  </a>
                </div>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-5 relative">
              <RevealOnScroll delay={0.2}>
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low group">
                  <div className="absolute -bottom-8 -left-8 bg-primary-container p-8 hidden md:block">
                    <span className="font-headline text-4xl text-on-primary block italic">
                      01
                    </span>
                    <span className="font-body text-[10px] tracking-widest uppercase text-on-primary font-bold">
                      Session Intensive
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
          {/* Background Accent */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-surface-container-low/30 -z-0" />
        </section>

        {/* Pour qui: Target Audience */}
        <section className="py-32 px-6 md:px-24 bg-surface-container-low">
          <RevealOnScroll>
            <div className="mb-20">
              <h2 className="font-headline text-4xl md:text-6xl mb-4 font-bold">
                Pour <span className="italic">qui</span> ?
              </h2>
              <div className="w-24 h-1 bg-primary" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <RevealOnScroll>
              <div className="bg-surface p-12 border-r border-b border-white/5 flex flex-col justify-between min-h-[400px]">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f2ca50"
                  strokeWidth="1.5"
                >
                  <path d="M2 20l4-4m0 0l2-8 8 2m-10 6l10-6" />
                  <path d="M18 4l2 2-6 6" />
                </svg>
                <div>
                  <h3 className="font-headline text-3xl mb-4 italic">
                    L&apos;Entrepreneur Actif
                  </h3>
                  <p className="text-on-surface-variant font-light leading-relaxed font-body">
                    Tu publies r&eacute;guli&egrave;rement sur LinkedIn ou
                    Instagram mais ton calendrier de r&eacute;servation reste
                    d&eacute;sesp&eacute;r&eacute;ment calme.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <div className="bg-surface-container-high p-12 border-b border-white/5 md:translate-y-12 flex flex-col justify-between min-h-[400px]">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f2ca50"
                  strokeWidth="1.5"
                >
                  <path d="M4 20V10l4-6h8l4 6v10" />
                  <path d="M9 20v-6h6v6" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
                <div>
                  <h3 className="font-headline text-3xl mb-4 italic">
                    Le Cr&eacute;ateur de Contenu
                  </h3>
                  <p className="text-on-surface-variant font-light leading-relaxed font-body">
                    Tu as une audience engag&eacute;e, des
                    &ldquo;likes&rdquo; &agrave; foison, mais aucun impact
                    r&eacute;el sur ton chiffre d&apos;affaires mensuel.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="bg-surface p-12 border-b border-white/5 flex flex-col justify-between min-h-[400px]">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f2ca50"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                  <path d="M8 2l1 3M16 2l-1 3" />
                </svg>
                <div>
                  <h3 className="font-headline text-3xl mb-4 italic">
                    Le Visionnaire Perdu
                  </h3>
                  <p className="text-on-surface-variant font-light leading-relaxed font-body">
                    Tu sais que tu as une expertise unique mais tu ne trouves
                    pas l&apos;angle &eacute;ditorial pour la
                    mon&eacute;tiser sans para&icirc;tre
                    &ldquo;vendeur&rdquo;.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Ce que tu vas repartir avec: Deliverables */}
        <section
          id="deliverables"
          className="py-32 px-6 md:px-24 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <RevealOnScroll className="md:w-1/3 md:sticky md:top-32">
              <h2 className="font-headline text-4xl md:text-6xl mb-8 leading-tight font-bold">
                Ce que tu vas <br />
                <span className="italic text-primary">repartir</span> avec.
              </h2>
              <p className="text-on-surface-variant font-light mb-8 font-body">
                Plus qu&apos;une simple th&eacute;orie, nous construisons tes
                outils de croissance en temps r&eacute;el.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all" />
                  <span className="font-body text-[10px] tracking-widest uppercase font-bold">
                    01 STRATEGY
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all group-hover:bg-primary" />
                  <span className="font-body text-[10px] tracking-widest uppercase font-bold text-white/40 group-hover:text-white">
                    02 FORMATS
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all group-hover:bg-primary" />
                  <span className="font-body text-[10px] tracking-widest uppercase font-bold text-white/40 group-hover:text-white">
                    03 EDITORIAL
                  </span>
                </div>
              </div>
            </RevealOnScroll>
            <div className="md:w-2/3 space-y-24">
              {/* Deliverable 1 */}
              <RevealOnScroll>
                <div className="group">
                  <div className="aspect-video mb-8 overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                  <h4 className="font-headline text-3xl mb-4 italic">
                    La Strat&eacute;gie de Conversion
                  </h4>
                  <p className="text-on-surface-variant text-lg leading-relaxed font-light font-body">
                    D&eacute;finition de tes 3 piliers de contenu qui
                    transforment un inconnu en prospect qualifi&eacute; en
                    moins de 10 jours de lecture.
                  </p>
                </div>
              </RevealOnScroll>
              {/* Deliverable 2 */}
              <RevealOnScroll>
                <div className="group">
                  <div className="aspect-video mb-8 overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-high" />
                  <h4 className="font-headline text-3xl mb-4 italic">
                    Les Formats &ldquo;High-Impact&rdquo;
                  </h4>
                  <p className="text-on-surface-variant text-lg leading-relaxed font-light font-body">
                    Ta bo&icirc;te &agrave; outils de structures de posts qui
                    arr&ecirc;tent le scroll et forcent l&apos;interaction
                    strat&eacute;gique.
                  </p>
                </div>
              </RevealOnScroll>
              {/* Deliverable 3 */}
              <RevealOnScroll>
                <div className="group">
                  <div className="aspect-video mb-8 overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high" />
                  <h4 className="font-headline text-3xl mb-4 italic">
                    Le Planning &Eacute;ditorial sur 90 jours
                  </h4>
                  <p className="text-on-surface-variant text-lg leading-relaxed font-light font-body">
                    Une feuille de route cl&eacute; en main pour ne plus
                    jamais te demander : &ldquo;Qu&apos;est-ce que je publie
                    demain ?&rdquo;
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-40 px-6 md:px-24 bg-surface-container">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-8 block font-extrabold">
                Acc&egrave;s Exclusif
              </span>
              <h2 className="font-headline text-5xl md:text-8xl mb-12 leading-tight font-bold">
                Pr&ecirc;t pour le{" "}
                <span className="italic text-primary">D&eacute;clic</span> ?
              </h2>
              <a
                href="#"
                className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-16 py-6 font-body font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:brightness-110 transition-all"
              >
                Rejoindre l&apos;Atelier &mdash; 490&euro;
              </a>
              <p className="mt-8 text-on-surface-variant font-light italic font-body">
                Limit&eacute; &agrave; 12 participants par session pour
                garantir un accompagnement sur-mesure.
              </p>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
