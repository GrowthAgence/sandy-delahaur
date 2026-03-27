import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-low bg-surface">
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <span className="font-headline text-xl text-primary-container mb-4 block breath-accent">
          SDL Agency
        </span>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[10px] uppercase tracking-[0.15em] text-outline hover:text-primary-container transition-all duration-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="text-primary-container/60 font-body text-[10px] uppercase tracking-[0.2em] mb-4">
          L&apos;Excellence au F&eacute;minin.
        </div>
        <div className="font-body text-[10px] uppercase tracking-[0.15em] text-outline">
          &copy; {new Date().getFullYear()} SDL Agency.
        </div>
      </div>
    </footer>
  );
}
