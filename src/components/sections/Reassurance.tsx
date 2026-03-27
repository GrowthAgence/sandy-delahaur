import RevealOnScroll from "@/components/RevealOnScroll";

export default function Reassurance() {
  return (
    <section className="py-20 md:py-24 bg-surface text-center">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <p className="font-headline text-xl md:text-2xl lg:text-3xl font-light text-on-surface-variant max-w-4xl mx-auto italic">
            Vous n&apos;avez pas besoin de tout faire. Vous avez juste besoin
            d&apos;entrer par la bonne porte.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
