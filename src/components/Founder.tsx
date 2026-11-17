import Image from "next/image";
import { founder } from "@/content/site";
import { withBrand } from "./Wordmark";

/**
 * Bloco da fundadora. Não existe no site de referência — foi acrescentado
 * porque a foto da fundadora faz parte do material enviado.
 */
export default function Founder() {
  return (
    <section className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32">
      <div className="border-t border-rule pt-10 md:pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-16">
          <div className="relative aspect-3/4 w-full max-w-xs shrink-0 overflow-hidden">
            <Image
              src={founder.image}
              alt={`${founder.name}, ${founder.role}`}
              fill
              sizes="(max-width: 768px) 100vw, 20rem"
              className="object-cover grayscale"
            />
          </div>

          <div className="flex flex-col">
            <span className="mb-6 text-xs tracking-widest text-neutral-500 uppercase">
              {founder.label}
            </span>
            <p className="max-w-3xl text-xl leading-tight tracking-tight md:text-3xl xl:text-4xl">
              {withBrand(founder.statement)}
            </p>
            <p className="mt-8 text-sm tracking-widest uppercase">
              {founder.name}
              <span className="text-neutral-500"> — {founder.role}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
