import RevealOnScroll from "@/components/RevealOnScroll";

export default function Probleme() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <RevealOnScroll>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Le constat
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl mb-10 leading-[1.1] tracking-tighter">
            Vous travaillez plus que jamais.{" "}
            <br className="hidden md:block" />
            <span className="text-gold-gradient italic">
              Et pourtant&hellip;
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light mb-6">
            Vous postez, vous cr&eacute;ez, vous networquez. Vous donnez tout.
            Mais les revenus ne suivent pas, les clients n&apos;arrivent pas
            r&eacute;guli&egrave;rement, et vous commencez &agrave; douter
            &mdash; non pas de votre valeur, mais de la direction &agrave;
            prendre.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light mb-6">
            Le probl&egrave;me, c&apos;est rarement le talent. C&apos;est
            l&apos;absence d&apos;un{" "}
            <span className="text-primary font-medium">syst&egrave;me</span>{" "}
            qui transforme votre &eacute;nergie en r&eacute;sultats.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="font-body text-on-surface text-xl leading-relaxed font-medium">
            C&apos;est exactement ce qu&apos;on construit ensemble chez SDL
            Agency.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
