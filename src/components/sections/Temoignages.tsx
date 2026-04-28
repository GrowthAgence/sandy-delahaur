import RevealOnScroll from "@/components/RevealOnScroll";

const TESTIMONIALS = [
  {
    quote:
      "Gr\u00e2ce \u00e0 Sandy, j\u2019ai r\u00e9ussi \u00e0 reconna\u00eetre mes comp\u00e9tences et mes valeurs. J\u2019ai pu trouver un projet en lien avec mes valeurs et ma finalit\u00e9. Je me sens motiv\u00e9e, plus sereine et tr\u00e8s impatiente de cr\u00e9er la suite\u00a0!",
    name: "Valentine P.",
    role: "Entrepreneure",
  },
  {
    quote:
      "Sandy est une coach formidable. \u00c0 l\u2019\u00e9coute et inspirante, son approche tr\u00e8s compl\u00e8te est parfaite pour se questionner, r\u00e9fl\u00e9chir et avancer dans la bonne direction. Merci \u00e0 elle de m\u2019avoir aid\u00e9e \u00e0 trouver ma voie\u00a0!",
    name: "Alix R.",
    role: "En reconversion",
  },
  {
    quote:
      "C\u2019est agr\u00e9able d\u2019avoir quelqu\u2019un qui croit en nous et nous montre que \u00ab\u00a0tout est possible\u00a0\u00bb. \u00c7a m\u2019a bien aid\u00e9e \u00e0 l\u00e2cher des peurs et \u00e0 gagner davantage confiance en moi. J\u2019y vois d\u00e9sormais plus clair sur ce que je peux et veux faire.",
    name: "Blandine O. R.",
    role: "Entrepreneure",
  },
  {
    quote:
      "Je retiens 4 grands piliers\u00a0: Clart\u00e9, Exploration, M\u00e9thodologie et Confiance. Nos \u00e9changes m\u2019ont permis de poser des mots clairs sur mes aspirations, mes valeurs, pour avancer dans la bonne direction.",
    name: "Alice",
    role: "En recherche de clart\u00e9",
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16 md:mb-20">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">
            Ils &amp; elles l&apos;ont v&eacute;cu
          </span>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter leading-[1.1]">
            Ce que &ccedil;a change.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.15}>
              <div className="p-10 md:p-12 bg-surface gold-border-subtle h-full flex flex-col justify-between">
                <div>
                  <div className="text-primary text-sm mb-6">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p className="font-headline text-lg md:text-xl italic leading-relaxed mb-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-surface-container-highest gold-border-subtle flex items-center justify-center">
                    <span className="font-headline text-primary text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-widest font-bold">
                      {t.name}
                    </p>
                    <p className="font-body text-[8px] uppercase tracking-widest text-outline">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
