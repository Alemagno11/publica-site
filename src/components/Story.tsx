import Image from "next/image";
import { story } from "@/content/site";
import { asset } from "@/lib/asset";
import { withBrand } from "./Wordmark";

/**
 * História da agência. Vem logo depois da lista de serviços: o visitante lê o
 * que a PUBLIca. faz e, na sequência, quem está por trás.
 *
 * O bloco de números (creators agenciados, marcas atendidas, etc.) foi retirado
 * em 17/11 — volta quando a Carol informar os valores reais.
 */
export default function Story() {
  return (
    <section
      id="historia"
      className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-16">
        <div className="relative aspect-3/4 w-full max-w-xs shrink-0 overflow-hidden">
          <Image
            src={asset(story.image)}
            alt={`${story.name}, ${story.role}`}
            fill
            sizes="(max-width: 768px) 100vw, 20rem"
            className="object-cover grayscale"
          />
        </div>

        <div className="flex flex-col">
          <span className="mb-6 text-xs tracking-widest text-neutral-500 uppercase">
            {story.label}
          </span>
          <p className="max-w-3xl text-xl leading-tight tracking-tight md:text-3xl xl:text-4xl">
            {withBrand(story.statement)}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {story.body}
          </p>
          <p className="mt-8 text-sm tracking-widest uppercase">
            {story.name}
            <span className="text-neutral-500"> — {story.role}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
