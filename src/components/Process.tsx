import { process } from "@/content/site";
import RevealCopy from "./RevealCopy";
import { sectionCopy, sectionTitle } from "./typography";

/**
 * "Como funciona?" — o passo a passo da arte da Carol. Fica entre a história e
 * o formulário: responde o que acontece depois do contato, logo antes do ponto
 * de conversão.
 */
export default function Process() {
  return (
    <section
      id="como-funciona"
      className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32"
    >
      <h2 className={sectionTitle}>{process.title}</h2>

      <ol className="mt-10 grid gap-px border-t border-rule md:mt-14 md:grid-cols-3">
        {process.steps.map((step, i) => (
          <li
            key={step.title}
            className="border-b border-rule pt-6 pb-8 md:border-b-0 md:pr-8 md:pb-0"
          >
            <span className="font-mono text-sm text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
              {step.title}
            </h3>
            <p className="mt-1 text-lg text-neutral-600 md:text-xl">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 md:mt-16">
        <RevealCopy text={process.closing} className={sectionCopy} />
      </div>
    </section>
  );
}
