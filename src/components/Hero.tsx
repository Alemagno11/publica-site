"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/site";
import { asset } from "@/lib/asset";
import Wordmark from "./Wordmark";

const STRIPS = 25;
const STRIP_H = 1 / STRIPS;

/**
 * Hero: vídeo em tela cheia revelado em persiana por um clipPath SVG de 25 faixas
 * (mesma mecânica do site de referência). Abaixo de xl o vídeo é full-bleed simples.
 * O título fica em mix-blend-difference sobre a imagem.
 */
export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rects = svgRef.current?.querySelectorAll("rect");
    if (!rects?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rects.forEach((r) => r.setAttribute("height", String(STRIP_H)));
      return;
    }

    const DURATION = 1100;
    const STAGGER = 34;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      let running = false;
      rects.forEach((rect, i) => {
        const t = Math.min(1, Math.max(0, (now - start - i * STAGGER) / DURATION));
        if (t < 1) running = true;
        rect.setAttribute("height", String(ease(t) * STRIP_H));
      });
      if (running) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-svh overflow-hidden bg-ink xl:min-h-screen">
      <div className="relative min-h-svh xl:min-h-screen">
        {/* Mobile / tablet — sem recorte */}
        <div className="absolute inset-0 xl:hidden">
          <video
            src={asset(hero.video)}
            poster={asset(hero.poster)}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover brightness-75 grayscale"
          />
        </div>

        {/* Desktop — revelação em persiana */}
        <div className="absolute inset-0 hidden xl:block">
          <svg ref={svgRef} width="0" height="0" aria-hidden="true" className="absolute">
            <defs>
              <clipPath id="hero-strips" clipPathUnits="objectBoundingBox">
                {Array.from({ length: STRIPS }, (_, i) => (
                  <rect key={i} x="0" width="1" height="0" y={i * STRIP_H} />
                ))}
              </clipPath>
            </defs>
          </svg>
          <div className="absolute inset-0" style={{ clipPath: "url(#hero-strips)" }}>
            <video
              src={asset(hero.video)}
              poster={asset(hero.poster)}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover brightness-75 grayscale"
            />
          </div>
        </div>

        {/*
          O título e o menu usam mix-blend-difference. Sobre as áreas claras do
          vídeo (o backdrop branco do estúdio) eles perderiam contraste, então
          escurecemos topo e base — justamente onde esses elementos ficam.
        */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 flex flex-col px-6 pb-12 text-paper mix-blend-difference md:px-12 md:pb-16">
        <h1 className="text-4xl md:text-6xl xl:text-7xl">
          <Wordmark dotClassName="text-acid" />
        </h1>
        <h2 className="text-xl tracking-tight md:text-4xl">
          {hero.lead} <br className="md:hidden" />
          <span className="font-display italic">{hero.accent}</span>
        </h2>
      </div>
    </section>
  );
}
