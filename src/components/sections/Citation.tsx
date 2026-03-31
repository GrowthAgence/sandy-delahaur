import RevealOnScroll from "@/components/RevealOnScroll";
import WordReveal from "@/components/WordReveal";

export default function Citation() {
  return (
    <section className="py-32 md:py-40 bg-surface relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl italic font-light leading-tight max-w-5xl mx-auto">
          <WordReveal>
            {"«\u00a0On ne vend pas sur les réseaux ce qu'on ne sait pas vendre dans la vraie vie.\u00a0»"}
          </WordReveal>
        </h2>
        <RevealOnScroll delay={1.2}>
          <div className="w-24 h-px bg-primary mx-auto mt-12" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
