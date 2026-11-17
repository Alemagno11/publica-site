"use client";

import { useState } from "react";
import { footer } from "@/content/site";

/**
 * Sem backend: o envio abre o cliente de e-mail com a inscrição preenchida.
 * Trocar por uma chamada à ferramenta de e-mail marketing quando existir.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex w-full flex-col gap-1 sm:w-56 sm:gap-2 lg:ml-auto lg:w-80">
      <h3 className="mb-1 text-xs uppercase sm:mb-2 sm:text-sm text-paper/50">
        {footer.newsletter.title}
      </h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email) return;
          window.location.href = `mailto:contato@publica.ag?subject=${encodeURIComponent(
            "Inscrição na newsletter",
          )}&body=${encodeURIComponent(`Quero receber a newsletter: ${email}`)}`;
        }}
      >
        <div className="flex items-center border-b border-paper">
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={footer.newsletter.placeholder}
            aria-label="Seu e-mail"
            className="w-full bg-transparent py-1 text-sm text-paper placeholder:text-paper/40 focus:outline-none sm:text-base"
          />
          <button
            type="submit"
            aria-label="Inscrever"
            className="shrink-0 cursor-pointer px-1 text-acid transition-transform hover:translate-x-0.5"
          >
            →
          </button>
        </div>
        <p className="text-xs text-paper/70">{footer.newsletter.note}</p>
      </form>
    </div>
  );
}
