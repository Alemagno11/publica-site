import Image from "next/image";
import { story } from "@/content/site";
import { asset } from "@/lib/asset";
import { withBrand } from "./Wordmark";

/**
 * História da agência + números. Substituiu o bloco "Fundação" por decisão da
 * reunião de 13/11: o site encurtou e esta seção passou a ser o destino direto
 * de quem vem da área de creators.
 */
export default function Story() {
  return (
    <section
      id="historia"
      className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32"
    >
      <div className="border-t border-rule pt-10 md:pt-16">
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

        {/* Números da agência */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-rule pt-10 md:mt-20 md:grid-cols-4 md:pt-14">
          {story.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-4xl font-medium tracking-tight text-brand md:text-5xl xl:text-6xl">
                {m.value}
              </dd>
              <p
                aria-hidden="true"
                className="mt-2 text-xs tracking-widest text-neutral-500 uppercase md:text-sm"
              >
                {m.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
