import RevealOnScroll from "@/components/RevealOnScroll";

export default function LeadMagnet() {
  return (
    <section className="py-20 md:py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Ressource gratuite
          </span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            T&eacute;l&eacute;charge ta Roadmap&nbsp;:{" "}
            <span className="text-gold-gradient italic">
              Passer de 1000 id&eacute;es &agrave; 1 syst&egrave;me rentable.
            </span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-10 leading-relaxed font-light">
            Identifie en 2&nbsp;minutes les angles morts qui freinent ton
            business.
          </p>
          <a
            href="#"
            className="btn-shimmer text-on-primary px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-flex items-center gap-2"
          >
            Recevoir ma Checklist
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
