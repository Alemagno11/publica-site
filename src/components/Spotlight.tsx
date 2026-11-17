import Image from "next/image";
import Link from "next/link";
import { spotlight } from "@/content/site";
import RevealCopy from "./RevealCopy";
import StripReveal from "./StripReveal";
import { sectionCopy, sectionLink } from "./typography";

export default function Spotlight() {
  return (
    <section id="estudio" className="bg-paper">
      <div className="px-6 pt-12 pb-12 md:px-12 md:py-24 xl:py-32">
        <RevealCopy text={spotlight.headline} className={sectionCopy} />
        <Link href={spotlight.cta.href} className={`mt-6 inline-block ${sectionLink}`}>
          {spotlight.cta.label}
        </Link>
      </div>

      <div className="relative flex h-svh w-full items-start justify-center overflow-hidden bg-ink pt-20 md:items-center md:pt-0">
        {/* Fundo full-bleed */}
        <div className="absolute inset-0">
          <Image
            src={spotlight.background}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="scale-125 object-cover brightness-[.55] grayscale"
          />
          {/* Esmaga os meios-tons: sem isso o título em mix-blend-difference some. */}
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        {/* Rótulo + título, atrás do retrato */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-6 text-paper mix-blend-difference md:px-12">
          <span className="text-sm tracking-widest uppercase md:text-base">
            {spotlight.label}
          </span>
          <h2 className="text-4xl tracking-tight uppercase md:text-6xl xl:text-8xl">
            {spotlight.title}
          </h2>
        </div>

        {/* Retrato revelado em faixas */}
        <StripReveal
          src={spotlight.portrait}
          alt={spotlight.title}
          sizes="(max-width: 768px) 20rem, 25rem"
          className="relative z-10 aspect-3/4 w-72 md:w-96 xl:w-100"
        />

        {/* Descrição da edição */}
        <p className="absolute right-6 bottom-10 w-[min(18rem,60vw)] text-sm leading-relaxed text-paper md:top-1/2 md:right-12 md:bottom-auto md:w-56 md:-translate-y-1/2 md:text-base xl:w-72 xl:text-lg">
          {spotlight.description}
        </p>
      </div>
    </section>
  );
}
