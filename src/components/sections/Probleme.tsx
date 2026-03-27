import RevealOnScroll from "@/components/RevealOnScroll";

export default function Probleme() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <RevealOnScroll>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Le Constat
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
            Tu travailles plus que jamais.{" "}
            <br />
            <span className="text-outline italic">Et pourtant&hellip;</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-body text-on-surface-variant text-xl leading-relaxed font-light">
            Tu postes, tu cr&eacute;es, tu networktes. Tu donnes tout. Mais les
            revenus ne suivent pas, les clients n&apos;arrivent pas
            r&eacute;guli&egrave;rement, et tu commences &agrave; douter — de
            toi, pas de ta m&eacute;thode.
            <br />
            <br />
            <span className="text-on-surface font-medium">
              Le probl&egrave;me, c&apos;est rarement le talent. C&apos;est
              l&apos;absence d&apos;un syst&egrave;me qui transforme ton
              &eacute;nergie en r&eacute;sultats.
            </span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
