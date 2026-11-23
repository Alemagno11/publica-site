import Link from "next/link";
import { services } from "@/content/site";
import RevealCopy from "./RevealCopy";
import { eyebrow, sectionCopy, sectionLink, sectionTitle } from "./typography";
import { withBrand } from "./Wordmark";

/**
 * Linhas de serviço: uma barra sólida varre da esquerda no hover e o conteúdo,
 * em mix-blend-difference, inverte junto. Linhas pares usam preto, ímpares roxo
 * — e o branco sobre roxo vira exatamente o lime da marca.
 */
export default function Services() {
  return (
    <section
      id="servicos"
      className="relative flex flex-col items-center bg-paper pt-12 md:py-24 xl:py-32"
    >
      <div className="w-full">
        <div className="mb-10 px-6 md:mb-14 md:px-12">
          <RevealCopy text={services.headline} className={sectionCopy} />
          <Link href={services.cta.href} className={`mt-6 inline-block ${sectionLink}`}>
            {services.cta.label} →
          </Link>
        </div>

        <div className="mb-6 px-6 md:mb-8 md:px-12">
          <span className={eyebrow}>{services.eyebrow}</span>
          <h2 className={sectionTitle}>{withBrand(services.title)}</h2>
          <p className="mt-3 text-lg text-neutral-600 md:text-xl">
            {services.subtitle}
          </p>
        </div>

        {services.items.map((item, i) => (
          <div key={item.title} className="border-t border-rule last:border-b">
            <div className="group relative flex w-full cursor-pointer flex-col gap-2 overflow-hidden px-6 py-6 md:px-12 md:py-8 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
              <div
                className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-wipe group-hover:scale-x-100 ${
                  i % 2 === 0 ? "bg-ink" : "bg-brand"
                }`}
              />
              <h3 className="relative text-3xl font-medium tracking-tight text-ink transition-all md:text-4xl xl:shrink-0 xl:text-6xl xl:text-paper xl:mix-blend-difference xl:group-hover:translate-x-2.5">
                {item.title}
              </h3>
              <div className="relative flex items-baseline gap-6 text-ink xl:ml-auto xl:text-paper xl:mix-blend-difference">
                <p className="max-w-md text-sm text-neutral-600 transition-all md:text-base xl:text-right xl:text-inherit xl:group-hover:-translate-x-2.5">
                  {item.description}
                </p>
                <span className="hidden shrink-0 font-mono text-sm transition-all xl:block xl:group-hover:-translate-x-2.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
