"use client";

import { motion } from "motion/react";

const PARTNERS = [
  "Lumière Conseil",
  "Nexora Group",
  "Altitude Partners",
  "Vektor Studio",
  "Arcane Ventures",
  "Prism Advisory",
  "Orbite Collective",
  "Élara Coaching",
  "Strata Business School",
  "Novéa Formation",
];

export default function Partenaires() {
  return (
    <section className="py-8 md:py-10 bg-surface-container-low overflow-hidden">
      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-outline text-center mb-6">
        Ils nous font confiance
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10" />
        <motion.div
          className="flex gap-12 md:gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <span
              key={i}
              className="font-headline text-lg md:text-xl text-on-surface-variant/60 tracking-wider shrink-0"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
