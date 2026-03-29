import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";

export default function CtaGlobal() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 bg-surface-container-low text-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
          <WordReveal>{"Prête à arrêter de"}</WordReveal>{" "}
          <span className="italic text-primary breath-accent inline-block">
            <WordReveal delay={0.5} wordClassName="text-primary italic">
              {"tourner en rond\u00a0?"}
            </WordReveal>
          </span>
        </h2>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl mb-12 md:mb-16 font-light">
          <WordReveal delay={0.9} stagger={0.05}>
            {"Un premier pas suffit. Réserve un appel de 30\u00a0minutes — on identifie ensemble ta prochaine étape."}
          </WordReveal>
        </p>
        <RevealOnScroll delay={1.6}>
          <a
            href="#"
            className="btn-shimmer text-on-primary px-12 md:px-16 py-5 md:py-6 font-body text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform duration-700 shadow-2xl inline-flex items-center gap-4"
          >
            <WordReveal delay={1.8} stagger={0.1}>
              {"Réserver mon appel"}
            </WordReveal>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="0" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
