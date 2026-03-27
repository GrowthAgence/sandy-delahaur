import RevealOnScroll from "@/components/RevealOnScroll";

const TESTIMONIALS = [
  {
    quote:
      "SDL Agency m'a apporté la structure qui me manquait pour enfin monétiser mon expertise à sa juste valeur. Le système est implacable.",
    name: "Sarah L.",
    role: "Consultante Stratégique",
  },
  {
    quote:
      "J'ai arrêté de courir après chaque nouvelle idée pour me concentrer sur ce qui fonctionne. Mon business tourne enfin sans que je sois épuisée.",
    name: "Julie D.",
    role: "Fondatrice Creative Studio",
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16 md:mb-20">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            T&eacute;moignages
          </span>
          <h2 className="font-headline text-4xl md:text-5xl">
            Elles l&apos;ont fait. Elles en parlent.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.2}>
              <div className="p-10 md:p-12 bg-surface-container-low gold-border-subtle h-full flex flex-col justify-between">
                <p className="font-headline text-lg md:text-xl italic leading-relaxed mb-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-surface-container-highest gold-border-subtle flex items-center justify-center">
                    <span className="font-headline text-primary text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-widest font-bold">
                      {t.name}
                    </p>
                    <p className="font-body text-[8px] uppercase tracking-widest text-outline">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
