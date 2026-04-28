"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: i * 0.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <header className="relative min-h-dvh flex items-center pt-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sandy-hero.png"
          alt="Sandy Delahaur — SDL Agency"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block"
          >
            Mentor business &amp; cr&eacute;atrice d&apos;exp&eacute;riences
            entrepreneuriales
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-headline font-black mb-4 leading-[1.1] tracking-tighter text-white drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl"
          >
            Tu n&apos;as pas besoin de plus{" "}
            <br className="hidden md:block" />
            <span className="text-gold-gradient italic">
              d&apos;id&eacute;es
            </span>
            . Tu as besoin <br className="hidden md:block" />
            d&apos;un syst&egrave;me.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="font-body text-primary/80 text-lg md:text-xl mb-8 font-medium tracking-wide drop-shadow-lg"
          >
            Structure. Croissance. Connexions. D&eacute;cisions.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-body text-on-surface-variant max-w-xl text-lg mb-4 leading-relaxed font-light drop-shadow-lg"
          >
            J&apos;accompagne les entrepreneurs et dirigeants qui ont mille
            id&eacute;es &agrave; la minute &agrave; structurer leur business et
            &agrave; canaliser leur &eacute;nergie pour transformer leur talent
            en impact concret et rentable.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
            className="font-body text-on-surface-variant max-w-xl text-lg mb-10 leading-relaxed font-light drop-shadow-lg"
          >
            J&apos;interviens &eacute;galement aupr&egrave;s des organisations
            qui veulent d&eacute;velopper la posture de leurs &eacute;quipes,
            am&eacute;liorer leur communication terrain et transformer leurs
            collaborateurs en ambassadeurs cr&eacute;dibles et influents.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#methode"
              className="border border-primary/30 text-on-surface px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary/10 hover:border-primary/60 transition-all duration-700 inline-flex items-center gap-2"
            >
              Explorer l&apos;&eacute;cosyst&egrave;me
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-shimmer text-on-primary px-10 py-5 font-body text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-700 inline-flex items-center gap-2"
            >
              R&eacute;server mon audit strat&eacute;gique
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
