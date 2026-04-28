"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Newsletter
          </span>
          <h2 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight tracking-tighter">
            Minute Clart&eacute;
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-10 leading-relaxed font-light max-w-xl mx-auto">
            Re&ccedil;ois des id&eacute;es claires, concr&egrave;tes et
            directement applicables pour structurer ton business et avancer sans
            perdre ta cr&eacute;ativit&eacute;.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="ton@email.com"
              className="flex-1 bg-surface border border-outline-variant/30 px-6 py-4 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary/60 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-shimmer text-on-primary px-8 py-4 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 shrink-0"
            >
              Je m&apos;inscris
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
