import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";
import Link from "next/link";

export default function CtaGlobal() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 bg-surface text-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
          Prochaine &eacute;tape
        </span>

        <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-7xl mb-8 tracking-tighter leading-[1.1]">
          <WordReveal>{"Un \u00e9change strat\u00e9gique."}</WordReveal>
        </h2>

        <p className="font-headline text-xl md:text-2xl italic text-on-surface-variant mb-6">
          <WordReveal delay={0.5} stagger={0.06}>
            {"Pour identifier la prochaine vraie \u00e9tape."}
          </WordReveal>
        </p>

        <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl mb-12 md:mb-16 font-light">
          <WordReveal delay={0.9} stagger={0.04}>
            {"Un rendez-vous pour regarder votre situation, rep\u00e9rer les leviers prioritaires et d\u00e9cider de la suite avec lucidit\u00e9."}
          </WordReveal>
        </p>

        <RevealOnScroll delay={1.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="btn-shimmer text-on-primary px-12 md:px-16 py-5 md:py-6 font-body text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform duration-700 shadow-2xl inline-flex items-center gap-4"
            >
              <WordReveal delay={1.8} stagger={0.1}>
                {"R\u00e9server mon audit strat\u00e9gique"}
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
            <Link
              href="#methode"
              className="border border-primary/30 text-on-surface px-12 md:px-16 py-5 md:py-6 font-body text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary/10 hover:border-primary/60 transition-all duration-700 inline-flex items-center gap-4"
            >
              <WordReveal delay={2.0} stagger={0.1}>
                {"D\u00e9couvrir les univers"}
              </WordReveal>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
