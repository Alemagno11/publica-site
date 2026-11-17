"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { lab } from "@/content/site";
import RevealCopy from "./RevealCopy";
import { sectionCopy, sectionLink } from "./typography";

export default function Lab() {
  const [index, setIndex] = useState(0);
  const total = lab.items.length;
  const current = lab.items[index];

  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + total) % total);

  return (
    <section id="lab" className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        <div className="order-2 w-full md:order-1 md:w-1/2 md:max-w-2xl">
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <div
              className="flex h-full w-full transition-transform duration-500 ease-wipe"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {lab.items.map((item) => (
                <div key={item.title} className="relative h-full w-full shrink-0">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.date}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <h3 className="text-xl font-medium tracking-tight uppercase md:text-2xl">
                {current.title}
              </h3>
              <p className="text-xs tracking-widest text-neutral-500 uppercase">
                {current.date}
              </p>
            </div>
            <div className="flex items-baseline gap-4 text-xs tracking-widest uppercase">
              <button
                type="button"
                onClick={() => go(-1)}
                className="cursor-pointer text-neutral-400 transition-colors hover:text-ink"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="cursor-pointer transition-colors hover:text-brand"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 w-full md:order-2 md:w-1/2">
          <RevealCopy
            text={lab.headline}
            className={sectionCopy}
            barColor="#7723fa"
          />
          <Link href={lab.cta.href} className={`mt-6 inline-block ${sectionLink}`}>
            {lab.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
