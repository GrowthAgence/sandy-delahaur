import RevealOnScroll from "@/components/RevealOnScroll";

export default function LeadMagnet() {
  return (
    <section className="py-20 md:py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Ressource gratuite
          </span>
          <h2 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight tracking-tighter">
            T&eacute;l&eacute;charge ton mini-audit&nbsp;:{" "}
            <span className="text-gold-gradient italic">
              Passer de 1000&nbsp;id&eacute;es &agrave; 1&nbsp;syst&egrave;me
              rentable.
            </span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-4 leading-relaxed font-light">
            Ton business tourne, mais quelque chose bloque. L&apos;offre manque
            de clart&eacute;, le chiffre reste irr&eacute;gulier,
            l&apos;acquisition ne suit pas et tout repose encore trop sur toi.
            Les d&eacute;cisions s&apos;accumulent sans &ecirc;tre prises.
          </p>
          <p className="font-body text-on-surface text-lg mb-10 leading-relaxed font-medium">
            En 2&nbsp;minutes, identifie les angles morts qui freinent ta
            croissance aujourd&apos;hui.
          </p>
          <a
            href="#"
            className="btn-shimmer text-on-primary px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-flex items-center gap-2"
          >
            D&eacute;marrer ton mini-audit
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
