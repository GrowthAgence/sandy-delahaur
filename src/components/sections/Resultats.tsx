import RevealOnScroll from "@/components/RevealOnScroll";

const RESULTS = [
  "Activité enfin structurée",
  "Revenus plus lisibles",
  "Décisions prises plus vite",
  "Offre repositionnée et assumée",
  "Visibilité qui génère vraiment",
  "Équipes plus engagées",
  "Nouveaux leviers de croissance activés",
  "Croissance mieux maîtrisée",
];

export default function Resultats() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <RevealOnScroll className="text-center mb-16">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Ce que &ccedil;a change
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl leading-[1.1] tracking-tighter">
            Des r&eacute;sultats concrets pour nos clients.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.map((result, i) => (
            <RevealOnScroll key={result} delay={i * 0.08}>
              <div className="p-6 bg-surface-container-low gold-border-subtle group card-hover-state flex items-center gap-4 min-h-[80px]">
                <span className="text-primary text-lg shrink-0">&#10003;</span>
                <p className="font-body text-on-surface text-sm font-medium leading-snug">
                  {result}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
