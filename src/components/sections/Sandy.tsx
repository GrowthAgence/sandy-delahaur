import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export default function Sandy() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <RevealOnScroll>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            La fondatrice
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl mb-10 leading-[1.1] tracking-tighter">
            Sandy.{" "}
            <span className="text-gold-gradient italic">
              Fondatrice de SDL&nbsp;Agency.
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light mb-6">
            Plus de 20&nbsp;ans de terrain entre serial-entrepreneuriat, business
            exigeant et accompagnement premium&hellip;
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed font-light mb-10">
            Des entreprises au service d&apos;entrepreneurs, de dirigeants et
            d&apos;organisations qui aspirent &agrave; structurer leur croissance
            avec plus de clart&eacute;, de strat&eacute;gie et de meilleurs
            r&eacute;sultats.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="p-8 md:p-12 bg-surface-container-low gold-border-subtle mb-10">
            <p className="font-headline text-xl md:text-2xl italic leading-relaxed text-on-surface">
              &laquo;&nbsp;Ce n&apos;est pas l&apos;information qui change une
              vie mais la transformation.&nbsp;&raquo;
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <Link
            href="/a-propos"
            className="text-[10px] uppercase tracking-widest font-bold border-b border-primary/30 pb-1 hover:border-primary transition-colors font-body text-primary inline-flex items-center gap-2"
          >
            D&eacute;couvrir mon approche
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
