import Link from "next/link";

const WAKE_LINKS = [
  { label: "Wake Shift Morning", href: "/wake" },
  { label: "Lab Anti-Éparpillement", href: "/wake" },
  { label: "Leader Shift Experience", href: "/wake" },
  { label: "Cercle des 10 Lunes", href: "/wake" },
  { label: "Mentorat Business", href: "/wake" },
];

const SHIFT_LINKS = [
  { label: "Implémentation IA Bot", href: "/shift" },
  { label: "Implémentation IA Agent", href: "/shift" },
  { label: "CRM ERP", href: "/shift" },
  { label: "Consulting Croissance", href: "/shift" },
  { label: "Workshop Pitch", href: "/shift" },
];

const SHINE_LINKS = [
  { label: "Mastermind L1Pact", href: "/shine" },
  { label: "Formation IA", href: "/shine" },
  { label: "Force de vente", href: "/shine" },
  { label: "Prestation Bras droit", href: "/shine" },
  { label: "MSC Events", href: "/evenements" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-low bg-surface">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="font-headline text-2xl text-primary-container mb-4 block breath-accent">
              SDL Agency
            </span>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-2">
              Souffle de Lumi&egrave;re
            </p>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-1">
              Plus qu&apos;un &eacute;cosyst&egrave;me&nbsp;: une activation.
            </p>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              Rallume ce qui est d&eacute;j&agrave; en toi.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-body text-on-surface text-sm font-medium mb-1">
              Sandy &middot; CEO de SDL Agency
            </p>
            <p className="font-body text-on-surface-variant text-sm">
              calendly.com/sandyconsulting
            </p>
          </div>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-4 font-bold">
              Wake
            </p>
            {WAKE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-body text-sm text-outline hover:text-primary-container transition-colors duration-500 mb-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-4 font-bold">
              Shift
            </p>
            {SHIFT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-body text-sm text-outline hover:text-primary-container transition-colors duration-500 mb-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-4 font-bold">
              Shine
            </p>
            {SHINE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-body text-sm text-outline hover:text-primary-container transition-colors duration-500 mb-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-container-low pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] uppercase tracking-[0.15em] text-outline">
            &copy; {new Date().getFullYear()} SDL Agency &mdash; Souffle de
            Lumi&egrave;re. Tous droits r&eacute;serv&eacute;s.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/mentions-legales"
              className="font-body text-[10px] uppercase tracking-[0.15em] text-outline hover:text-primary-container transition-all duration-700"
            >
              Mentions l&eacute;gales
            </Link>
            <Link
              href="/confidentialite"
              className="font-body text-[10px] uppercase tracking-[0.15em] text-outline hover:text-primary-container transition-all duration-700"
            >
              Confidentialit&eacute;
            </Link>
            <Link
              href="/#contact"
              className="font-body text-[10px] uppercase tracking-[0.15em] text-outline hover:text-primary-container transition-all duration-700"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
