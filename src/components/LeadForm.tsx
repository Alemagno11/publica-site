"use client";

import { useState } from "react";
import { leadForm } from "@/content/site";

/**
 * Captação de leads. Sem backend: o envio monta um e-mail pré-preenchido.
 * Quando houver ferramenta de CRM/e-mail, trocar o handler por um POST.
 */
export default function LeadForm() {
  const [role, setRole] = useState(leadForm.roles[0].value);
  const [name, setName] = useState("");
  const [cont, setCont] = useState("");
  const [message, setMessage] = useState("");

  const chosen = leadForm.roles.find((r) => r.value === role);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `[Site] ${chosen?.label ?? role}`;
    const body = [
      `Nome: ${name}`,
      `Contato: ${cont}`,
      `Perfil: ${chosen?.label ?? role}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${leadForm.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="mt-16 border-t border-rule pt-10 md:mt-24 md:pt-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
            {leadForm.title}
          </h3>
          <p className="mt-3 text-base text-neutral-600">{leadForm.intro}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6">
          <fieldset className="flex flex-col gap-3 sm:flex-row">
            <legend className="sr-only">Você é marca ou creator?</legend>
            {leadForm.roles.map((r) => {
              const active = role === r.value;
              return (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  aria-pressed={active}
                  className={`flex-1 cursor-pointer border px-5 py-4 text-left text-sm transition-colors duration-300 md:text-base ${
                    active
                      ? "border-brand bg-brand text-paper"
                      : "border-rule text-ink hover:border-ink"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </fieldset>

          <div className="flex flex-col gap-6 sm:flex-row">
            <label className="flex-1 border-b border-ink">
              <span className="sr-only">{leadForm.fields.name}</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={leadForm.fields.name}
                className="w-full bg-transparent py-2 text-base placeholder:text-neutral-400 focus:outline-none"
              />
            </label>
            <label className="flex-1 border-b border-ink">
              <span className="sr-only">{leadForm.fields.contact}</span>
              <input
                required
                value={cont}
                onChange={(e) => setCont(e.target.value)}
                placeholder={leadForm.fields.contact}
                className="w-full bg-transparent py-2 text-base placeholder:text-neutral-400 focus:outline-none"
              />
            </label>
          </div>

          <label className="border-b border-ink">
            <span className="sr-only">{leadForm.fields.message}</span>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={leadForm.fields.message}
              className="w-full resize-none bg-transparent py-2 text-base placeholder:text-neutral-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="group relative w-fit cursor-pointer overflow-hidden border border-ink px-8 py-3 text-lg tracking-wide uppercase"
          >
            <span className="flex items-center justify-center overflow-hidden">
              <span className="inline-block transition-transform duration-400 ease-wipe group-hover:-translate-y-full">
                {leadForm.submit}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 flex translate-y-full items-center justify-center bg-brand text-paper transition-transform duration-400 ease-wipe group-hover:translate-y-0"
            >
              {leadForm.submit}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
