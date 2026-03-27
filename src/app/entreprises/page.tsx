import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Entreprises &mdash; B2B Solutions &amp; Corporate Excellence | SDL Agency",
  description:
    "SDL Agency intervient en entreprise pour des programmes sur mesure alliant strat&eacute;gie de vente, posture de leader et intelligence &eacute;motionnelle.",
};

/* ─── Inline SVG icons ─── */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Intervention data ─── */
const INTERVENTIONS = [
  {
    number: "01.",
    title: "Programmes de Leadership F\u00e9minin",
    description:
      "Un parcours intensif pour briser le plafond de verre, ma\u00eetriser l\u2019art de l\u2019influence et asseoir sa l\u00e9gitimit\u00e9 au sein du CODIR.",
    items: [
      "GESTION DE LA POSTURE",
      "PRISE DE PAROLE \u00c0 IMPACT",
      "R\u00c9SOLUTIONS DE CONFLITS",
    ],
    imageFirst: false,
  },
  {
    number: "02.",
    title: "Performance Commerciale B2B",
    description:
      "Optimisez les cycles de vente complexes. Nous formons vos \u00e9quipes aux techniques de n\u00e9gociation avanc\u00e9es et \u00e0 la psychologie de l\u2019acheteur.",
    items: [
      "SOCIAL SELLING LUXURY",
      "N\u00c9GOCIATION HAUTE VALEUR",
      "GESTION DES GRANDS COMPTES",
    ],
    imageFirst: true,
  },
];

const AUDIENCES = [
  {
    title: "Grands Groupes",
    description:
      "Programmes de mentorat interne et d\u00e9ploiement de strat\u00e9gies de diversit\u00e9 & inclusion \u00e0 l\u2019\u00e9chelle internationale.",
    offset: "",
  },
  {
    title: "ETI & PME",
    description:
      "Accompagnement de la transition manag\u00e9riale et acc\u00e9l\u00e9ration de la croissance par le d\u00e9veloppement des ventes.",
    offset: "md:-translate-y-10",
  },
  {
    title: "R\u00e9seaux de Femmes",
    description:
      "Masterclasses exclusives et s\u00e9minaires d\u2019inspiration pour f\u00e9d\u00e9rer et dynamiser vos communaut\u00e9s professionnelles.",
    offset: "",
  },
];

const LOGOS = ["MAISON V.", "ASTORIA", "LUMI\u00c8RE", "H\u00c9RITAGE"];

export default function EntreprisesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══ Hero ═══ */}
        <header className="relative min-h-dvh flex items-center overflow-hidden bg-surface">
          {/* Background gradient placeholder */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-surface-container-highest via-surface-container to-surface opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-20">
            <RevealOnScroll className="max-w-3xl">
              <span className="inline-block font-body text-[10px] uppercase tracking-[0.3em] text-primary-container mb-6">
                B2B Solutions &amp; Corporate Excellence
              </span>
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8">
                Vous voulez d&eacute;velopper le{" "}
                <span className="italic text-primary">leadership</span> et les
                performances commerciales de vos &eacute;quipes
                f&eacute;minines?
              </h1>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl font-light">
                SDL Agency intervient en entreprise pour des programmes sur
                mesure alliant strat&eacute;gie de vente, posture de leader et
                intelligence &eacute;motionnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="btn-shimmer text-on-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-[10px]">
                  Consulter nos offres
                </button>
                <button className="border border-outline-variant text-white px-10 py-5 font-headline font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
                  Prendre rendez-vous
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </header>

        {/* ═══ Pourquoi SDL Agency? (Bento Grid) ═══ */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                  <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
                    Pourquoi SDL Agency?
                  </h2>
                  <p className="text-on-surface-variant font-light text-lg">
                    Nous red&eacute;finissons les standards du leadership
                    f&eacute;minin en entreprise par une approche holistique et
                    ax&eacute;e sur les r&eacute;sultats tangibles.
                  </p>
                </div>
                <div className="bg-primary h-px w-24 mb-4" />
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-l border-white/5">
              {/* 01 — Expertise Métier */}
              <RevealOnScroll className="md:col-span-8 p-12 bg-surface-container-low border-b border-r border-white/5">
                <span className="font-body text-xs tracking-widest text-primary mb-4 block">
                  01 / EXPERTISE M&Eacute;TIER
                </span>
                <h3 className="font-headline text-3xl mb-6">
                  Une Double Culture Business &amp; Coaching
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-lg font-light">
                  Nos programmes ne sont pas que th&eacute;oriques. Nous
                  fusionnons l&apos;exp&eacute;rience du terrain en direction
                  commerciale avec les derni&egrave;res neurosciences
                  appliqu&eacute;es au leadership.
                </p>
              </RevealOnScroll>

              {/* 02 — Sur-mesure */}
              <RevealOnScroll
                className="md:col-span-4 p-12 bg-surface border-b border-r border-white/5"
                delay={0.1}
              >
                <span className="font-body text-xs tracking-widest text-primary mb-4 block">
                  02 / SUR-MESURE
                </span>
                <h3 className="font-headline text-2xl mb-6">
                  L&apos;Atelier Strat&eacute;gique
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Chaque entreprise est unique. Nous concevons des parcours
                  d&apos;accompagnement qui s&apos;alignent sur vos objectifs
                  KRIs et KPIs sp&eacute;cifiques.
                </p>
              </RevealOnScroll>

              {/* 03 — Impact */}
              <RevealOnScroll
                className="md:col-span-4 p-12 bg-surface border-b border-r border-white/5"
                delay={0.2}
              >
                <span className="font-body text-xs tracking-widest text-primary mb-4 block">
                  03 / IMPACT
                </span>
                <h3 className="font-headline text-2xl mb-6">ROI Mesurable</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Augmentation du taux de conversion, r&eacute;tention des
                  talents f&eacute;minins et am&eacute;lioration du climat
                  social.
                </p>
              </RevealOnScroll>

              {/* Transformer la culture — large card with CTA */}
              <RevealOnScroll
                className="md:col-span-8 p-12 bg-surface-container-low border-b border-r border-white/5 relative overflow-hidden group"
                delay={0.3}
              >
                {/* Gradient background placeholder */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl mb-4">
                    Transformer la culture, <br />
                    un leader &agrave; la fois.
                  </h3>
                  <button className="mt-8 flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase group-hover:gap-6 transition-all">
                    D&eacute;couvrir notre m&eacute;thode{" "}
                    <ArrowIcon className="text-primary" />
                  </button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ Nos Interventions ═══ */}
        <section className="py-32 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-headline text-4xl md:text-5xl text-white mb-24 text-center">
                Nos Interventions
              </h2>
            </RevealOnScroll>

            <div className="space-y-32">
              {INTERVENTIONS.map((item, idx) => (
                <RevealOnScroll key={idx}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${
                      item.imageFirst ? "" : ""
                    }`}
                  >
                    {/* Text column */}
                    <div
                      className={`w-full md:w-1/2 ${
                        item.imageFirst
                          ? "order-2"
                          : "order-2 md:order-1"
                      }`}
                    >
                      <span className="text-primary font-bold text-4xl font-headline mb-4 block opacity-50 italic">
                        {item.number}
                      </span>
                      <h3 className="font-headline text-3xl md:text-4xl text-white mb-6">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-light">
                        {item.description}
                      </p>
                      <ul className="space-y-4 font-body text-sm tracking-wide">
                        {item.items.map((li, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <span className="h-px w-6 bg-primary" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image placeholder column */}
                    <div
                      className={`w-full md:w-1/2 ${
                        item.imageFirst
                          ? "order-1"
                          : "order-1 md:order-2"
                      }`}
                    >
                      <div
                        className={`${
                          item.imageFirst
                            ? "aspect-[16/9]"
                            : "aspect-[4/5]"
                        } bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low`}
                      />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Pour qui? ═══ */}
        <section className="py-32 bg-surface">
          <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
            <RevealOnScroll>
              <div className="mb-20 text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-6 italic">
                  Pour qui?
                </h2>
                <p className="text-on-surface-variant font-light text-lg">
                  Des solutions adapt&eacute;es &agrave; chaque maturit&eacute;
                  d&apos;organisation.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {AUDIENCES.map((audience, i) => (
                <RevealOnScroll
                  key={i}
                  className={`bg-surface-container border border-white/5 p-12 transition-all hover:bg-surface-container-high ${audience.offset}`}
                  delay={i * 0.1}
                >
                  <h4 className="font-headline text-2xl text-primary mb-6">
                    {audience.title}
                  </h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    {audience.description}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Ils nous ont fait confiance ═══ */}
        <section className="py-32 bg-surface-container-low">
          <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <RevealOnScroll className="w-full md:w-1/3">
                <h2 className="font-headline text-4xl text-white mb-6">
                  Ils nous ont <br />
                  fait confiance
                </h2>
                <p className="text-on-surface-variant font-light">
                  Des leaders du secteur luxe, de la tech et de
                  l&apos;industrie ont choisi SDL Agency pour
                  l&apos;excellence de ses programmes.
                </p>
              </RevealOnScroll>

              <RevealOnScroll
                className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale"
                delay={0.2}
              >
                {LOGOS.map((logo, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center font-headline text-xl font-bold border border-white/10 py-8 ${
                      i === 0 || i === 2 ? "italic" : ""
                    } ${i === 2 ? "tracking-widest" : ""}`}
                  >
                    {logo}
                  </div>
                ))}
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
