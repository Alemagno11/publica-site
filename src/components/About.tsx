import Image from "next/image";
import { about } from "@/content/site";
import { asset } from "@/lib/asset";
import RevealCopy from "./RevealCopy";
import SlideButton from "./SlideButton";
import { sectionCopy } from "./typography";

export default function About() {
  return (
    <section
      id="sobre"
      className="flex min-h-10 items-center bg-paper px-6 pt-12 md:px-12 md:pt-24 xl:pt-32"
    >
      <div className="w-full">
        <RevealCopy text={about.headline} className={sectionCopy} />

        <div className="mt-12 flex flex-col items-center gap-8 xl:mt-40 xl:flex-row xl:gap-16">
          <div className="relative w-full max-w-3xl shrink-0">
            <Image
              src={asset(about.image)}
              alt="Equipe da PUBLIca. em produção de conteúdo"
              width={1800}
              height={1200}
              sizes="(max-width: 1280px) 100vw, 768px"
              className="h-auto w-full grayscale"
            />
            {/* A logo é um JPEG com fundo preto: em mix-blend-screen o preto some. */}
            <Image
              src={asset("/brand/logo-icon.jpg")}
              alt=""
              aria-hidden="true"
              width={400}
              height={400}
              className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />
          </div>

          <div className="flex h-full flex-col justify-end">
            <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
              {about.body}
            </p>
            <SlideButton
              label={about.cta.label}
              href={about.cta.href}
              className="self-center md:self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
