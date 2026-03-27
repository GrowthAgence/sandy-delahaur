"use client";

import { useState, type FormEvent } from "react";

export default function CandidatureForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-headline text-3xl mb-4 text-primary">
          Merci pour votre candidature.
        </h3>
        <p className="font-body text-on-surface-variant">
          Notre &eacute;quipe reviendra vers vous sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group border-b border-outline/20 focus-within:border-primary transition-colors duration-300">
          <label className="font-body text-[10px] uppercase tracking-widest text-outline block mb-1">
            Nom Complet
          </label>
          <input
            className="w-full bg-transparent border-none px-0 py-4 focus:ring-0 focus:outline-none text-on-surface placeholder:text-surface-container-highest font-body"
            placeholder="Alexandra de Silva"
            type="text"
            required
          />
        </div>
        <div className="group border-b border-outline/20 focus-within:border-primary transition-colors duration-300">
          <label className="font-body text-[10px] uppercase tracking-widest text-outline block mb-1">
            Email Professionnel
          </label>
          <input
            className="w-full bg-transparent border-none px-0 py-4 focus:ring-0 focus:outline-none text-on-surface placeholder:text-surface-container-highest font-body"
            placeholder="contact@votreempire.com"
            type="email"
            required
          />
        </div>
      </div>
      <div className="group border-b border-outline/20 focus-within:border-primary transition-colors duration-300">
        <label className="font-body text-[10px] uppercase tracking-widest text-outline block mb-1">
          Votre Entreprise (Phase actuelle)
        </label>
        <select
          className="w-full bg-transparent border-none px-0 py-4 focus:ring-0 focus:outline-none text-on-surface appearance-none font-body"
          required
        >
          <option className="bg-surface" value="">
            S&eacute;lectionnez...
          </option>
          <option className="bg-surface" value="shine">
            Phase SHINE (&gt; 1M&euro; CA)
          </option>
          <option className="bg-surface" value="growth">
            Phase GROWTH (250k&euro; - 1M&euro; CA)
          </option>
          <option className="bg-surface" value="autre">
            Autre
          </option>
        </select>
      </div>
      <div className="group border-b border-outline/20 focus-within:border-primary transition-colors duration-300">
        <label className="font-body text-[10px] uppercase tracking-widest text-outline block mb-1">
          Pourquoi L&apos;Impact&nbsp;?
        </label>
        <textarea
          className="w-full bg-transparent border-none px-0 py-4 focus:ring-0 focus:outline-none text-on-surface placeholder:text-surface-container-highest font-body resize-none"
          placeholder="Dites-nous ce qui vous motive &agrave; franchir cette &eacute;tape..."
          rows={4}
          required
        />
      </div>
      <div className="pt-8 text-center">
        <button
          type="submit"
          className="btn-shimmer text-on-primary w-full md:w-auto px-20 py-6 font-body uppercase tracking-widest text-[10px] font-bold shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-300"
        >
          Soumettre ma candidature
        </button>
      </div>
    </form>
  );
}
