import Image from "next/image";
import { creators } from "@/content/site";
import { asset } from "@/lib/asset";
import LeadForm from "./LeadForm";
import { eyebrow, sectionTitle } from "./typography";

/**
 * "Marcas & Creators" — antes chamada Cases. Mostra os segmentos atendidos e
 * leva direto ao formulário de captação, como combinado na reunião de 13/11.
 */
export default function Creators() {
  return (
    <section
      id="creators"
      className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32"
    >
      <div className="mb-10 md:mb-14">
        <span className={eyebrow}>{creators.eyebrow}</span>
        <h2 className={sectionTitle}>{creators.title}</h2>
        <p className="mt-3 text-lg text-neutral-600 md:text-xl">
          {creators.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-6 md:flex-nowrap md:gap-10">
        {creators.items.map((item) => (
          <div key={item.title} className="w-full md:flex-1">
            <div className="group block">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={asset(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 ease-wipe group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-medium tracking-tight uppercase max-md:basis-full md:text-2xl">
                  {item.title}
                </h3>
                <span className="text-xs tracking-widest text-neutral-500 uppercase">
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <LeadForm />
    </section>
  );
}
