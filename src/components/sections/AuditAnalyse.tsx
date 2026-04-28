import RevealOnScroll from "@/components/RevealOnScroll";

export default function AuditAnalyse() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <RevealOnScroll>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Comment nous proc&eacute;dons
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1] tracking-tighter">
            Audit &amp;{" "}
            <span className="text-gold-gradient italic">Analyse.</span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-6">
          <RevealOnScroll delay={0.15}>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light">
              La plupart des blocages ne sont pas l&agrave; o&ugrave; on le
              croit. Ce n&apos;est pas un probl&egrave;me d&apos;effort.
              C&apos;est un probl&egrave;me de lecture.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light">
              Nous commen&ccedil;ons par un audit&nbsp;: regarder votre
              activit&eacute; telle qu&apos;elle est vraiment. Ce qui
              fonctionne, ce qui d&eacute;pend trop de vous, ce qui freine sans
              que vous le voyiez encore.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p className="font-body text-on-surface text-lg leading-relaxed font-medium">
              Puis nous construisons un plan d&apos;action clair,
              r&eacute;aliste et rentable.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.45}>
            <div className="p-8 md:p-12 bg-surface-container gold-border-subtle mt-8">
              <p className="font-headline text-xl md:text-2xl italic leading-relaxed mb-6">
                Un dirigeant performant ne fonctionne pas &agrave;
                l&apos;&eacute;nergie. Il fonctionne avec de la
                clart&eacute;.
              </p>
              <p className="font-body text-on-surface-variant text-base leading-relaxed mb-6">
                Nos audits servent &agrave; identifier rapidement ce qui freine
                r&eacute;ellement votre croissance, les leviers encore
                inexploit&eacute;s et les d&eacute;cisions repouss&eacute;es
                depuis trop longtemps.
              </p>
              <p className="font-body text-on-surface-variant text-base leading-relaxed">
                Pour savoir o&ugrave; agir, quoi corriger, quoi
                acc&eacute;l&eacute;rer&hellip; et repartir avec une vision
                claire et des priorit&eacute;s concr&egrave;tes.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.55} className="pt-8 text-center md:text-left">
            <a
              href="#contact"
              className="btn-shimmer text-on-primary px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-flex items-center gap-2"
            >
              R&eacute;server mon audit strat&eacute;gique
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
      </div>
    </section>
  );
}
