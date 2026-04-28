import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const PHASES = [
  {
    number: "01",
    name: "Wake",
    tagline: "Clarifier pour mieux piloter.",
    question:
      "Vous travaillez beaucoup\u2026 mais vous ne savez plus quoi prioriser\u00a0?",
    context:
      "Vous avancez sur tout un peu. Mais rien n\u2019avance vraiment. L\u2019offre bouge. Les id\u00e9es changent. Les d\u00e9cisions attendent.",
    items: [
      "Le bon focus maintenant",
      "L\u2019offre claire \u00e0 vendre",
      "Les d\u00e9cisions qui relancent la croissance",
    ],
    href: "/wake",
    elevated: false,
  },
  {
    number: "02",
    name: "Shift",
    tagline:
      "Pr\u00e9parer une croissance plus rentable et mieux structur\u00e9e.",
    question:
      "Votre activit\u00e9 avance\u2026 mais tout repose encore sur vous\u00a0?",
    context:
      "Quand le business avance mais reste manuel, il est temps d\u2019automatiser la suite.",
    items: [
      "D\u00e9veloppement commercial structur\u00e9",
      "Une croissance moderne gr\u00e2ce \u00e0 l\u2019IA et au marketing digital",
      "Une organisation qui ne repose plus uniquement sur vous",
    ],
    href: "/shift",
    elevated: true,
  },
  {
    number: "03",
    name: "Shine",
    tagline: "Incarner le niveau suivant.",
    question:
      "Votre business a \u00e9volu\u00e9, mais votre posture suit-elle vraiment\u00a0?",
    context:
      "Quand le business \u00e9volue, que l\u2019exposition augmente et que les enjeux changent\u2026 Rester au m\u00eame niveau de posture devient un frein. Il faut parler et d\u00e9cider autrement, puis prendre sa place dans les bons environnements.",
    items: [
      "Leadership & posture dirigeante",
      "Communication d\u2019influence",
      "R\u00e9seau strat\u00e9gique & positionnement march\u00e9",
    ],
    href: "/shine",
    elevated: false,
  },
];

export default function Methode() {
  return (
    <section id="methode" className="py-32 md:py-48 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            La M&eacute;thode SDL
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter mb-6">
            Trois &eacute;tapes. Un m&ecirc;me objectif&nbsp;:{" "}
            <span className="text-gold-gradient italic">
              prendre les bonnes d&eacute;cisions au bon moment.
            </span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg font-light">
            Votre chemin commence ici.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHASES.map((phase, i) => (
            <RevealOnScroll key={phase.name} delay={i * 0.2}>
              <div
                className={`p-10 md:p-14 gold-border-subtle card-depth group card-hover-state flex flex-col justify-between min-h-[580px] md:min-h-[620px] ${
                  phase.elevated
                    ? "bg-surface-container md:-translate-y-8"
                    : "bg-surface"
                }`}
              >
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-2 block">
                    Phase {phase.number}
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl mb-3 tracking-widest uppercase">
                    {phase.name}
                  </h3>
                  <p className="font-body text-primary text-sm font-medium mb-6">
                    {phase.tagline}
                  </p>

                  <p className="font-headline text-lg italic text-on-surface mb-4 leading-snug">
                    {phase.question}
                  </p>
                  <p className="font-body text-on-surface-variant text-base leading-relaxed mb-6">
                    {phase.context}
                  </p>

                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-outline mb-4 font-bold">
                    Concr&egrave;tement, on {i === 0 ? "clarifie" : i === 1 ? "met en place" : "construit"}&nbsp;:
                  </p>
                  <ul className="space-y-2 mb-8">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-on-surface-variant text-base"
                      >
                        <span className="text-primary mt-1 shrink-0">
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={phase.href}
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-primary/30 pb-1 hover:border-primary transition-colors font-body text-primary inline-block"
                >
                  D&eacute;couvrir {phase.name}
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
