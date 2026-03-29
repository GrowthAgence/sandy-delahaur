"use client";

import { motion } from "motion/react";

interface WordRevealProps {
  /** The text to animate word by word */
  children: string;
  /** Extra classes on the wrapper */
  className?: string;
  /** Extra classes applied to each word span */
  wordClassName?: string;
  /** Stagger delay between words (seconds) */
  stagger?: number;
  /** Base delay before the first word (seconds) */
  delay?: number;
}

export default function WordReveal({
  children,
  className = "",
  wordClassName = "",
  stagger = 0.08,
  delay = 0,
}: WordRevealProps) {
  const words = children.split(" ");

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${wordClassName}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.85,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
