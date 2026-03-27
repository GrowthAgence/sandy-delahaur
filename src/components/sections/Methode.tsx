import RevealOnScroll from "@/components/RevealOnScroll";

const PHASES = [
  {
    number: "01",
    name: "Wake",
    description:
      "Tu te repositionnes. Tu clarifies ce que tu vends, à qui, et pourquoi ça marche dans la vraie vie avant d'aller sur les réseaux.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    elevated: false,
  },
  {
    number: "02",
    name: "Shift",
    description:
      "Tu construis. Tu installes la structure, la visibilité et l'offre qui tourne sans que tout repose sur toi.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
    elevated: true,
  },
  {
    number: "03",
    name: "Shine",
    description:
      "Tu passes à l'échelle. Tu prends ta place de leader, tu impactes, tu inspires.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 16l-1 4 4-1 12-12-3-3L5 16zM12 2l1.5 3H17l-2.5 2 1 3L12 8l-3.5 2 1-3L7 5h3.5z" />
      </svg>
    ),
    elevated: false,
  },
];

export default function Methode() {
  return (
    <section id="methode" className="py-32 md:py-48 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="mb-24 md:mb-32 text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            La M&eacute;thode SDL
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black italic">
            Une progression en 3 phases, pens&eacute;e pour toi
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHASES.map((phase, i) => (
            <RevealOnScroll key={phase.name} delay={i * 0.2}>
              <div
                className={`p-12 md:p-16 gold-border-subtle card-depth group card-hover-state flex flex-col justify-between min-h-[450px] md:min-h-[500px] ${
                  phase.elevated
                    ? "bg-surface-container md:-translate-y-12"
                    : "bg-surface"
                }`}
              >
                <div>
                  <span className="font-headline text-7xl text-outline-variant/10 mb-8 block group-hover:text-primary/40 transition-colors duration-700">
                    {phase.number}
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl mb-6 tracking-widest uppercase">
                    {phase.name}
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg">
                    {phase.description}
                  </p>
                </div>
                <div className="pt-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                  {phase.icon}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
