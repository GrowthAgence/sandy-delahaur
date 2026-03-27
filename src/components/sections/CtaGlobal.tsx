import RevealOnScroll from "@/components/RevealOnScroll";

export default function CtaGlobal() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-surface-container-low text-center">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
            Pr&ecirc;te &agrave; arr&ecirc;ter de{" "}
            <span className="italic text-primary breath-accent inline-block">
              tourner en rond&nbsp;?
            </span>
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl mb-12 md:mb-16 font-light">
            Un premier pas suffit. R&eacute;serve un appel de 30&nbsp;minutes —
            on identifie ensemble ta prochaine &eacute;tape.
          </p>
          <a
            href="#"
            className="btn-shimmer text-on-primary px-12 md:px-16 py-5 md:py-6 font-body text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform duration-700 shadow-2xl inline-flex items-center gap-4"
          >
            R&eacute;server mon appel
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
