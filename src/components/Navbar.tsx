"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "La Méthode", href: "/#methode" },
  { label: "Accès", href: "/#acces" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-tighter text-primary-container breath-accent"
        >
          SDL Agency
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-outline text-[10px] uppercase tracking-[0.2em] font-body hover:text-primary transition-colors duration-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden md:block btn-shimmer text-on-primary px-8 py-2 text-[10px] uppercase tracking-[0.2em] font-bold font-body"
        >
          Réserver
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-on-surface"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-container-low px-6 pb-8 pt-4 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-on-surface-variant text-sm uppercase tracking-[0.15em] font-body"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-shimmer text-on-primary px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold font-body text-center"
          >
            Réserver
          </Link>
        </div>
      )}

      {/* Bottom separator */}
      <div className="bg-surface-container-low h-px w-full absolute bottom-0" />
    </nav>
  );
}
