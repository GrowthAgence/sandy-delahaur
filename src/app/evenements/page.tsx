import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import HorizontalScroll from "./HorizontalScroll";

export const metadata: Metadata = {
  title: "Modern Social Club &mdash; &Eacute;v&egrave;nements | SDL Agency",
  description:
    "Le club o&ugrave; les femmes ambitieuses se retrouvent. D&eacute;couvrez nos &eacute;v&egrave;nements exclusifs : ateliers priv&eacute;s, soir&eacute;es networking et SDL Summits.",
};

/* ─── Inline SVG icons (no external library) ─── */
function DiamondIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary mb-6"
    >
      <path d="M2.7 10.3l8.6 11.4a.9.9 0 001.4 0l8.6-11.4a.9.9 0 00.1-1L18.6 3a.9.9 0 00-.8-.5H6.2a.9.9 0 00-.8.5L2.6 9.3a.9.9 0 00.1 1z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="mb-6"
    >
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary mb-6"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
    </svg>
  );
}


/* ─── Events data ─── */
const EVENTS = [
  {
    date: "12.10",
    location: "PARIS \u00b7 H\u00d4TEL DE CRILLON",
    title: "D\u00eener des Fondatrices",
    description: "Un banquet confidentiel pour 12 femmes leaders.",
    cta: "R\u00e9server",
    primary: true,
  },
  {
    date: "04.11",
    location: "GEN\u00c8VE \u00b7 RIVAGE",
    title: "Workshop: L\u2019Architecture du Luxe",
    description:
      "Ma\u00eetriser les codes de l\u2019excellence op\u00e9rationnelle.",
    cta: "Liste d\u2019attente",
    primary: false,
  },
  {
    date: "20.12",
    location: "MONACO \u00b7 YACHT CLUB",
    title: "SDL Winter Gala",
    description:
      "C\u00e9l\u00e9bration annuelle du r\u00e9seau Modern Social Club.",
    cta: "R\u00e9server",
    primary: true,
  },
];

export default function EvenementsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ═══ Hero ═══ */}
        <header className="relative min-h-dvh flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-surface">
          {/* Background gradient placeholder */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="w-full h-full bg-gradient-to-br from-surface-container-highest via-surface-container to-surface opacity-50" />
          </div>

          <RevealOnScroll className="relative z-10 max-w-5xl mt-24">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <span className="font-body uppercase tracking-[0.3em] text-[10px] text-primary">
                Modern Social Club
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl mb-12 leading-none italic font-black">
              Le club o&ugrave; les <br />
              <span
                className="not-italic"
                style={{
                  WebkitTextStroke: "1px #D4AF37",
                  color: "transparent",
                }}
              >
                femmes
              </span>{" "}
              <br />
              ambitieuses se retrouvent.
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
              Modern Social Club, c&apos;est l&apos;entr&eacute;e dans
              l&apos;univers SDL par l&apos;exp&eacute;rience... Un espace
              o&ugrave; l&apos;influence rencontre l&apos;&eacute;l&eacute;gance.
            </p>
          </RevealOnScroll>
        </header>

        {/* ═══ Pourquoi des événements? ═══ */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
              {/* Left: image placeholder + quote */}
              <RevealOnScroll className="md:w-1/2 relative">
                <div className="absolute -top-10 -left-10 text-9xl font-headline opacity-5 text-on-surface select-none">
                  01
                </div>
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                <div className="absolute -bottom-8 -right-8 p-12 bg-surface-container-low max-w-xs">
                  <p className="font-headline italic text-2xl text-primary">
                    &ldquo;L&apos;ambition n&apos;est rien sans le bon
                    r&eacute;seau.&rdquo;
                  </p>
                </div>
              </RevealOnScroll>

              {/* Right: text */}
              <RevealOnScroll className="md:w-1/2" delay={0.2}>
                <h2 className="font-headline text-4xl md:text-5xl mb-8">
                  Pourquoi des &eacute;v&eacute;nements?
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-loose text-lg font-light">
                  <p>
                    Parce que le digital a ses limites. Nous croyons en la
                    puissance de la rencontre physique, du regard
                    &eacute;chang&eacute; et de la poign&eacute;e de main ferme.
                    Nos &eacute;v&eacute;nements sont con&ccedil;us comme des
                    catalyseurs d&apos;opportunit&eacute;s.
                  </p>
                  <p>
                    Dans un monde qui va trop vite, nous cr&eacute;ons des
                    parenth&egrave;ses de prestige pour celles qui fa&ccedil;onnent
                    demain. C&apos;est ici que les collaborations les plus
                    audacieuses prennent racine.
                  </p>
                </div>
                <button className="mt-12 border border-outline/30 px-10 py-4 font-body uppercase tracking-widest text-[10px] hover:bg-white/5 transition-colors">
                  D&eacute;couvrir la vision
                </button>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ Le Format (Horizontal Scroll) ═══ */}
        <section className="py-32 bg-surface-container-low overflow-hidden">
          <div className="px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <RevealOnScroll>
              <span className="font-body uppercase tracking-[0.2em] text-[10px] text-primary block mb-4">
                L&apos;exp&eacute;rience
              </span>
              <h2 className="font-headline text-4xl md:text-5xl italic">
                Le Format
              </h2>
            </RevealOnScroll>
            <div className="hidden md:block text-right max-w-sm">
              <p className="text-sm opacity-60 font-body font-light">
                Chaque d&eacute;tail est orchestr&eacute; pour favoriser
                l&apos;&eacute;veil des sens et de l&apos;intellect.
              </p>
            </div>
          </div>
          <HorizontalScroll />
        </section>

        {/* ═══ Ce que tu vas y trouver (Bento) ═══ */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <h2 className="font-headline text-4xl md:text-5xl mb-16 text-center">
                Ce que tu vas y trouver
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Accès Exclusif — large card */}
              <RevealOnScroll className="md:col-span-2 bg-surface-container-low p-12 flex flex-col justify-between">
                <div>
                  <DiamondIcon />
                  <h4 className="font-headline text-3xl mb-4">
                    Acc&egrave;s Exclusif
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed font-light">
                    P&eacute;n&eacute;trez dans des lieux inaccessibles au grand
                    public et c&ocirc;toyez des personnalit&eacute;s influentes du
                    monde des affaires et de la mode.
                  </p>
                </div>
                <div className="mt-12 h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                </div>
              </RevealOnScroll>

              {/* Inspiration — gold card */}
              <RevealOnScroll
                className="bg-primary text-on-primary p-12"
                delay={0.1}
              >
                <SparkleIcon />
                <h4 className="font-headline text-3xl mb-4">Inspiration</h4>
                <p className="leading-relaxed opacity-90 font-light">
                  Repartez avec une vision renouvel&eacute;e de votre potentiel et
                  des strat&eacute;gies concr&egrave;tes pour passer au niveau
                  sup&eacute;rieur.
                </p>
              </RevealOnScroll>

              {/* Sœur d'Armes */}
              <RevealOnScroll
                className="bg-surface-container-highest p-12 flex flex-col justify-center border-l-4 border-primary"
                delay={0.2}
              >
                <GroupIcon />
                <h4 className="font-headline text-3xl mb-4">
                  S&oelig;ur d&apos;Armes
                </h4>
                <p className="text-on-surface-variant leading-relaxed font-light">
                  Trouvez votre cercle. Celles qui comprennent vos d&eacute;fis et
                  c&eacute;l&egrave;brent vos victoires.
                </p>
              </RevealOnScroll>

              {/* Expérience Sensorielle — wide card with overlay */}
              <RevealOnScroll
                className="md:col-span-2 relative group overflow-hidden"
                delay={0.3}
              >
                <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low" />
                <div className="absolute inset-0 bg-black/60 flex items-center p-12">
                  <div className="max-w-md">
                    <h4 className="font-headline text-3xl text-white mb-4 italic">
                      Exp&eacute;rience Sensorielle
                    </h4>
                    <p className="text-white/80 font-light">
                      Gastronomie, design sonore et sc&eacute;nographie haute
                      couture.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ Prochains événements ═══ */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                <h2 className="font-headline text-4xl md:text-5xl italic">
                  Prochains <br />
                  &eacute;v&eacute;nements
                </h2>
                <div className="mt-8 md:mt-0">
                  <p className="font-body tracking-widest text-[10px] uppercase border border-outline/30 px-6 py-2">
                    Saison Automne/Hiver 2024
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-0">
              {EVENTS.map((event, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="group py-12 flex flex-col md:flex-row items-center gap-8 border-b border-white/5 hover:bg-white/5 transition-all px-4">
                    <div className="md:w-32 font-headline text-4xl text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                      {event.date}
                    </div>
                    <div className="flex-grow">
                      <span className="font-body text-[10px] uppercase tracking-widest text-outline mb-2 block">
                        {event.location}
                      </span>
                      <h4 className="font-headline text-3xl md:text-4xl">
                        {event.title}
                      </h4>
                    </div>
                    <div className="md:w-64 text-on-surface-variant text-sm italic font-light">
                      {event.description}
                    </div>
                    {event.primary ? (
                      <button className="bg-primary text-on-primary px-8 py-3 font-body text-[10px] uppercase tracking-widest font-bold">
                        {event.cta}
                      </button>
                    ) : (
                      <button className="border border-outline/50 text-white px-8 py-3 font-body text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-colors">
                        {event.cta}
                      </button>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
