import RevealOnScroll from "@/components/RevealOnScroll";

export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="max-w-3xl mx-auto text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Newsletter
          </span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Minute Clart&eacute;
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-10 leading-relaxed font-light max-w-xl mx-auto">
            Re&ccedil;ois mes conseils pour structurer ton business et stabiliser
            tes r&eacute;sultats, sans &eacute;teindre ta cr&eacute;ativit&eacute;.
          </p>
          <a
            href="#"
            className="btn-shimmer text-on-primary px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-flex items-center gap-2"
          >
            Je m&apos;inscris
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
