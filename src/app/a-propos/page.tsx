import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "À propos de Sandy — Souffle de Lumière | SDL Agency",
  description:
    "Il y a des parcours qu'on construit. Et d'autres qui nous transforment. Découvrez l'histoire de Sandy Delahaur, fondatrice de SDL Agency.",
};

/* ── Inline SVG icons ── */
function CreationIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="19" cy="13" r="2" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="12" cy="19" r="2.5" />
      <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
    </svg>
  );
}

function AccompagnementIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path d="M16 4a4 4 0 01.9 7.9 6 6 0 015.1 5.9V20h-4" />
      <path d="M8 4a4 4 0 00-.9 7.9A6 6 0 002 17.8V20h4" />
      <circle cx="12" cy="10" r="4" />
      <path d="M6 20a6 6 0 0112 0" />
    </svg>
  );
}

function EvenementsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  );
}

function ReculIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function VoirIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PorteIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <path d="M13 4h3a2 2 0 012 2v14" />
      <path d="M2 20h20" />
      <path d="M13 20V6a2 2 0 00-2-2H7a2 2 0 00-2 2v14" />
      <path d="M13 20h-8" />
      <circle cx="10" cy="13" r="1" />
    </svg>
  );
}

function CibleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const PILIERS = [
  {
    icon: <CreationIcon />,
    title: "Cr\u00e9ation",
    description:
      "Concevoir des programmes et des exp\u00e9riences qui transforment",
  },
  {
    icon: <AccompagnementIcon />,
    title: "Accompagnement",
    description:
      "\u00catre pr\u00e9sente, enti\u00e8re, dans chaque relation",
  },
  {
    icon: <EvenementsIcon />,
    title: "\u00c9v\u00e9nements",
    description:
      "Cr\u00e9er des espaces o\u00f9 les femmes basculent vraiment",
  },
  {
    icon: <ReculIcon />,
    title: "Recul",
    description:
      "Prendre le temps de me ressourcer pour mieux donner",
  },
];

const CHIFFRES = [
  { value: "20 ans", label: "d\u2019entrepreneuriat" },
  { value: "Plusieurs", label: "entreprises cr\u00e9\u00e9es" },
  { value: "Des milliers", label: "de femmes accompagn\u00e9es" },
  { value: "Des centaines", label: "d\u2019\u00e9v\u00e9nements \u00e0 fort impact" },
];

const FORCES = [
  {
    icon: <VoirIcon />,
    text: "Voir ce que les autres ne voient pas",
  },
  {
    icon: <PorteIcon />,
    text: "Aller l\u00e0 o\u00f9 les autres n\u2019osent pas aller",
  },
  {
    icon: <CibleIcon />,
    text: "Dire ce qui doit \u00eatre dit",
  },
];

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── SECTION 1 — Hero ── */}
        <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sandy-hero.png"
              alt="Sandy Delahaur"
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/40" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center pt-24">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
                  Souffle de Lumi&egrave;re
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <h1 className="font-headline font-black leading-[1.1] tracking-tighter text-white text-4xl md:text-6xl lg:text-7xl">
                  Il y a des parcours qu&apos;on{" "}
                  <span className="text-gold-gradient italic">construit.</span>
                  <br className="hidden md:block" /> Et d&apos;autres qui nous
                  transforment.
                  <br className="hidden md:block" /> Le mien a fait les deux.
                </h1>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — Avant ── */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl mb-12 leading-[1.1] tracking-tighter">
                  Construire, performer&hellip;{" "}
                  <span className="text-gold-gradient italic">
                    mais pas encore s&apos;habiter.
                  </span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    J&apos;ai toujours &eacute;t&eacute; une femme
                    d&apos;action.
                  </p>
                  <p>
                    Cr&eacute;er, organiser, d&eacute;velopper, structurer
                    &colon; c&apos;&eacute;tait naturel pour moi.
                  </p>
                  <p>
                    Plusieurs entreprises mont&eacute;es.
                    L&apos;&eacute;v&eacute;nementiel. Des projets
                    d&apos;envergure. Des environnements exigeants.
                  </p>
                  <p>
                    Ext&eacute;rieurement, tout fonctionnait. Je savais faire.
                    Je savais vendre. Je savais tenir.
                  </p>
                  <p className="text-primary font-headline italic text-2xl md:text-3xl py-4">
                    Mais int&eacute;rieurement&hellip;
                  </p>
                  <p>
                    Il y avait ce l&eacute;ger d&eacute;calage. Presque
                    imperceptible. Mais constant.
                  </p>
                  <p>
                    Comme si je construisais une vie sans encore m&apos;habiter
                    pleinement &agrave; l&apos;int&eacute;rieur.
                  </p>
                  <p>
                    Ce n&apos;&eacute;tait pas un burn-out. Pas une chute.
                    C&apos;&eacute;tait plus subtil que &ccedil;a.
                  </p>
                  <p>
                    Une sensation de potentiel inexploit&eacute;. De profondeur
                    non exprim&eacute;e. D&apos;impact encore retenu.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — Le Déclencheur ── */}
        <section className="py-24 md:py-32 bg-surface-container-lowest">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl lg:text-6xl mb-12 leading-[1.1] tracking-tighter text-white text-center">
                  Il y a des &eacute;v&eacute;nements qui te{" "}
                  <span className="text-gold-gradient italic">marquent.</span>
                  <br /> Et il y en a qui te{" "}
                  <span className="text-gold-gradient italic">
                    transforment.
                  </span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p className="text-white font-normal">
                    Le d&eacute;c&egrave;s de mon p&egrave;re a &eacute;t&eacute;
                    ce point de bascule.
                  </p>
                  <p>
                    Tout devient clair. Brutalement.
                  </p>
                  <p>
                    Ce qui compte. Ce qui n&apos;a plus de sens. Ce que tu
                    continues par habitude&hellip; et ce que tu ne peux plus
                    ignorer.
                  </p>
                  <p>
                    &Agrave; ce moment-l&agrave;, tu n&apos;as plus le luxe de
                    te mentir. Tu choisis.
                  </p>
                  <p>
                    J&apos;&eacute;tais d&eacute;j&agrave; dans
                    l&apos;accompagnement, dans la transmission. Mais
                    apr&egrave;s ce moment&hellip;
                  </p>
                  <p className="text-white font-normal">
                    J&apos;ai d&eacute;cid&eacute; de ne plus construire
                    quelque chose qui marche.
                  </p>
                  <p className="text-primary font-headline italic text-2xl md:text-3xl py-4">
                    J&apos;ai d&eacute;cid&eacute; de construire quelque chose
                    qui transforme.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — Naissance de Souffle de Lumière ── */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl mb-12 leading-[1.1] tracking-tighter">
                  Souffle de Lumi&egrave;re n&apos;est pas n&eacute; d&apos;une{" "}
                  <span className="text-gold-gradient italic">id&eacute;e.</span>{" "}
                  C&apos;est n&eacute; d&apos;un constat.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    Trop de femmes comprennent&hellip; mais ne passent pas
                    &agrave; l&apos;action. Trop de femmes
                    s&apos;inspirent&hellip; mais ne se transforment pas.
                  </p>
                  <p>
                    J&apos;ai pass&eacute; des ann&eacute;es sur le terrain
                    &agrave; accompagner, former, structurer, observer. Des
                    centaines, puis des milliers de femmes.
                  </p>
                  <p>Et j&apos;ai compris une chose essentielle&nbsp;:</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Citation visuelle isolée */}
            <RevealOnScroll delay={0.2}>
              <div className="my-16 md:my-24 py-16 md:py-24 px-8 bg-surface-container-high gold-border-subtle text-center max-w-4xl mx-auto">
                <p className="font-headline font-black italic text-2xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tighter">
                  &laquo;&nbsp;Ce n&apos;est pas l&apos;information qui change
                  une vie. C&apos;est le{" "}
                  <span className="text-gold-gradient">passage.</span>
                  &nbsp;&raquo;
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-3xl mx-auto">
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    Alors j&apos;ai cr&eacute;&eacute; une approche
                    diff&eacute;rente. Une approche qui ne se contente pas de
                    parler. Mais qui fait bouger.
                  </p>
                  <p>
                    Qui m&eacute;lange &eacute;nergie, lucidit&eacute;,
                    confrontation douce et mise en action imm&eacute;diate.
                  </p>
                  <p>
                    Pas pour faire du &laquo;&nbsp;bien&nbsp;&raquo;. Pour
                    cr&eacute;er un avant&nbsp;/&nbsp;apr&egrave;s.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — Aujourd'hui ── */}
        <section className="py-24 md:py-32 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto mb-16 md:mb-24">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl mb-12 leading-[1.1] tracking-tighter">
                  Une vie{" "}
                  <span className="text-gold-gradient italic">choisie,</span>{" "}
                  pas subie.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    Aujourd&apos;hui, je vis une vie align&eacute;e. Pas
                    parfaite. Pas lisse. Mais juste.
                  </p>
                  <p>
                    Je choisis mes espaces. Je choisis mes clientes. Je choisis
                    mon rythme.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* 4 piliers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
              {PILIERS.map((pilier, i) => (
                <RevealOnScroll key={pilier.title} delay={i * 0.1}>
                  <div className="bg-surface p-10 gold-border-subtle card-depth h-full">
                    <div className="mb-6">{pilier.icon}</div>
                    <h3 className="font-headline text-xl font-bold mb-4 text-white">
                      {pilier.title}
                    </h3>
                    <p className="font-body text-on-surface-variant text-sm leading-relaxed font-light">
                      {pilier.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    Je ne suis plus dans la performance permanente. Je suis dans
                    l&apos;impact.
                  </p>
                  <p>
                    Je ne cherche plus &agrave; en faire plus. Je cherche
                    &agrave; faire juste.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 6 — Mon Expertise ── */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto mb-16">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl mb-12 leading-[1.1] tracking-tighter">
                  Ce qui me d&eacute;finit{" "}
                  <span className="text-gold-gradient italic">vraiment.</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light">
                  Je pourrais te parler de certifications. Oui, j&apos;en ai.
                  Mais ce qui me d&eacute;finit vraiment, c&apos;est autre
                  chose.
                </p>
              </RevealOnScroll>
            </div>

            {/* Chiffres clés */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
              {CHIFFRES.map((item, i) => (
                <RevealOnScroll key={item.label} delay={i * 0.1}>
                  <div className="text-center p-8">
                    <span className="font-headline font-black text-3xl md:text-4xl text-primary block mb-3">
                      {item.value}
                    </span>
                    <span className="font-body text-on-surface-variant text-sm uppercase tracking-widest font-light">
                      {item.label}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <RevealOnScroll>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light">
                  <p>
                    J&apos;ai &eacute;t&eacute; form&eacute;e,
                    coach&eacute;e, challeng&eacute;e.
                  </p>
                  <p>Mais aujourd&apos;hui, ma vraie force, c&apos;est&nbsp;:</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* 3 points forts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {FORCES.map((force, i) => (
                <RevealOnScroll key={force.text} delay={i * 0.1}>
                  <div className="bg-surface-container-high p-10 gold-border-subtle text-center h-full flex flex-col items-center">
                    <div className="mb-6">{force.icon}</div>
                    <p className="font-headline text-lg text-white leading-snug">
                      {force.text}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light text-center">
                  Et surtout cr&eacute;er des d&eacute;clics qui changent
                  vraiment quelque chose.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 7 — Ma Vision ── */}
        <section className="py-24 md:py-32 bg-surface-container-lowest">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-3xl md:text-5xl lg:text-6xl mb-12 leading-[1.1] tracking-tighter text-white">
                  Je ne suis pas l&agrave; pour{" "}
                  <span className="text-gold-gradient italic">inspirer.</span>
                  <br /> Je suis l&agrave; pour{" "}
                  <span className="text-gold-gradient italic">
                    &eacute;lever.
                  </span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light max-w-2xl mx-auto mb-16">
                  <p>
                    Dans les ann&eacute;es &agrave; venir, je veux
                    changer&nbsp;:
                  </p>
                  <p>
                    Le niveau d&apos;exigence. La mani&egrave;re dont les
                    femmes se positionnent. Leur rapport &agrave; l&apos;action,
                    &agrave; l&apos;argent, &agrave; leur place.
                  </p>
                  <p>
                    Cr&eacute;er des espaces o&ugrave; on arr&ecirc;te de
                    tourner en rond. O&ugrave; on arr&ecirc;te de se raconter
                    des histoires. O&ugrave; on d&eacute;cide. O&ugrave; on
                    avance.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="py-16 px-8 gold-border-subtle bg-surface-container max-w-3xl mx-auto">
                  <p className="font-headline font-black italic text-xl md:text-3xl text-white leading-snug tracking-tighter">
                    Des femmes ancr&eacute;es. Lucides.{" "}
                    <span className="text-gold-gradient">Puissantes.</span> En
                    mouvement.
                    <br />
                    Pas demain.{" "}
                    <span className="text-gold-gradient">Maintenant.</span>
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ── SECTION 8 — CTA Final ── */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="max-w-2xl mx-auto">
              <RevealOnScroll>
                <h2 className="font-headline font-black text-4xl md:text-6xl mb-8 leading-[1.1] tracking-tighter text-white">
                  Et toi&nbsp;?
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed space-y-6 font-light mb-12">
                  <p>
                    Si tu es arriv&eacute;e jusqu&apos;ici, ce n&apos;est pas
                    un hasard. Il y a quelque chose qui r&eacute;sonne.
                  </p>
                  <p>
                    La vraie question, ce n&apos;est pas &laquo;&nbsp;est-ce
                    que &ccedil;a t&apos;a parl&eacute;&nbsp;?&nbsp;&raquo;
                  </p>
                  <p className="text-primary font-headline italic text-2xl md:text-3xl py-4">
                    &laquo;&nbsp;Est-ce que tu es pr&ecirc;te &agrave; passer
                    un cap&nbsp;?&nbsp;&raquo;
                  </p>
                  <p>
                    Parce qu&apos;avec moi — tu ne restes pas dans la
                    r&eacute;flexion. Tu ne consommes pas du contenu.
                  </p>
                  <p className="text-white font-normal">
                    Tu bouges. Tu d&eacute;cides. Tu avances.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <Link
                  href="/#contact"
                  className="btn-shimmer text-on-primary px-12 md:px-16 py-5 md:py-6 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-block"
                >
                  Je prends rendez-vous
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
