"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const STRIPS = 22;
const STEP = 100 / STRIPS;

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

/**
 * Revela uma imagem em faixas horizontais conforme a seção sobe na viewport.
 * São N cópias empilhadas, cada uma com clip-path inset() própria — mesma
 * técnica do site de referência.
 */
export default function StripReveal({ src, alt, className = "", sizes }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const strips = Array.from(
      host.querySelectorAll<HTMLElement>("[data-strip]"),
    );

    const paint = (progress: number) => {
      strips.forEach((strip, i) => {
        const top = i * STEP;
        // Overlap de 0.2% elimina as costuras de subpixel quando tudo está aberto.
        const bottom = Math.max(0, 100 - (i + 1) * STEP - 0.2);
        const local = Math.min(
          1,
          Math.max(0, (progress - (i / STRIPS) * 0.55) / 0.45),
        );
        const current = 100 + (bottom - 100) * local;
        strip.style.clipPath = `inset(${top}% 0% ${current}%)`;
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, 1 - (rect.top - vh * 0.1) / (vh * 0.85)));
      paint(progress);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={hostRef} className={`relative overflow-hidden ${className}`}>
      {Array.from({ length: STRIPS }, (_, i) => (
        <div
          key={i}
          data-strip
          className="absolute inset-0"
          style={{ clipPath: `inset(${i * STEP}% 0% 100%)` }}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i === 0 ? undefined : true}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
