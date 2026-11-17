import Image from "next/image";
import Link from "next/link";
import { cases } from "@/content/site";
import { sectionLink } from "./typography";

export default function Cases() {
  return (
    <section
      id="cases"
      className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32"
    >
      <div className="flex flex-wrap items-start gap-6 md:flex-nowrap md:gap-10">
        {cases.items.map((item) => (
          <div key={item.title} className="w-full md:flex-1">
            <Link href={item.href} className="group block">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 ease-wipe group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-xl font-medium tracking-tight uppercase underline-offset-4 transition-all group-hover:translate-x-1 group-hover:underline max-md:basis-full md:text-2xl">
                  {item.title}
                </h2>
                <span className="text-xs tracking-widest text-neutral-500 uppercase">
                  {item.tag}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <Link href={cases.cta.href} className={sectionLink}>
          {cases.cta.label}
        </Link>
      </div>
    </section>
  );
}
