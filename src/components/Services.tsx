import Link from "next/link";
import { services } from "@/content/site";
import RevealCopy from "./RevealCopy";
import { sectionCopy, sectionLink } from "./typography";

/**
 * Linhas de serviço: uma barra sólida varre da esquerda no hover e o título,
 * em mix-blend-difference, inverte de preto para branco.
 * Linhas ímpares usam roxo, pares usam preto — os dois tons da marca.
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

        {services.items.map((item, i) => (
          <div key={item} className="border-t border-rule last:border-b">
            <div className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden px-6 py-7 md:px-12 md:py-9 xl:justify-between">
              <div
                className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-wipe group-hover:scale-x-100 ${
                  i % 2 === 0 ? "bg-ink" : "bg-brand"
                }`}
              />
              <h2 className="relative text-3xl font-medium tracking-tight text-ink transition-all md:text-4xl xl:text-6xl xl:text-paper xl:mix-blend-difference xl:group-hover:translate-x-2.5">
                {item}
              </h2>
              <span className="relative hidden font-mono text-sm text-ink transition-all xl:block xl:text-paper xl:mix-blend-difference xl:group-hover:-translate-x-2.5">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
