"use client";

import {
  createElement,
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import Wordmark, { BRAND } from "./Wordmark";

/** `hl` guarda a ordem do destaque, que define a cor (par = lime, ímpar = roxo). */
type Token = { text: string; bold: boolean; hl: number | null };

/** "PUBLIca." sempre sai no lockup da marca, mesmo no meio de uma frase. */
function renderWord(word: string) {
  if (word !== BRAND) return word;
  return <Wordmark />;
}

/**
 * Divide o texto em tokens:
 *   **trecho**  → peso maior
 *   ==trecho==  → caixa de destaque, alternando lime e roxo na ordem de aparição
 *
 * ATENÇÃO: a medição de linha é feita palavra a palavra, então um destaque com
 * várias palavras vira uma caixa por palavra, não uma caixa só. Destaque
 * palavras isoladas.
 */
function tokenize(text: string): Token[] {
  const out: Token[] = [];
  let bold = false;
  let hlOrder = 0;
  for (const boldChunk of text.split("**")) {
    let inHl = false;
    for (const hlChunk of boldChunk.split("==")) {
      const hl = inHl ? hlOrder : null;
      for (const word of hlChunk.split(/(\s+)/)) {
        if (!word || /^\s+$/.test(word)) continue;
        out.push({ text: word, bold, hl });
      }
      if (inHl) hlOrder += 1;
      inHl = !inHl;
    }
    bold = !bold;
  }
  return out;
}

const HL_BOX =
  "rounded-sm px-2 md:px-3 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]";

/** Classes da palavra: peso e, quando houver, a caixa de destaque. */
function tokenClass(t: Token): string | undefined {
  const parts: string[] = [];
  if (t.bold) parts.push("font-medium");
  if (t.hl !== null) {
    parts.push(HL_BOX);
    parts.push(t.hl % 2 === 0 ? "bg-acid text-ink" : "bg-brand text-paper");
  }
  return parts.length ? parts.join(" ") : undefined;
}

export type RevealCopyProps = {
  text: string;
  /** Tag do título. Default: h2 */
  as?: "h1" | "h2" | "p";
  className?: string;
  /** Cor da barra que varre cada linha. */
  barColor?: string;
  /** Atraso entre linhas, em ms. */
  stagger?: number;
};

const DURATION = 420;
const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";

/**
 * "Block line revealer": cada linha renderizada é varrida por uma barra sólida
 * que entra pela esquerda, revela o texto e sai pela direita.
 * As linhas são medidas em runtime — não há quebras fixas no conteúdo.
 */
export default function RevealCopy({
  text,
  as = "h2",
  className = "",
  barColor,
  stagger = 70,
}: RevealCopyProps) {
  const hostRef = useRef<HTMLElement>(null);
  const [lines, setLines] = useState<Token[][] | null>(null);
  const playedRef = useRef(false);
  const tokens = tokenize(text);

  /** Agrupa as palavras por offsetTop para descobrir as linhas reais. */
  const measure = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;
    const words = Array.from(
      host.querySelectorAll<HTMLElement>("[data-word]"),
    );
    if (!words.length) return;
    const grouped: Token[][] = [];
    let currentTop: number | null = null;
    words.forEach((el) => {
      const top = el.offsetTop;
      if (currentTop === null || Math.abs(top - currentTop) > 2) {
        currentTop = top;
        grouped.push([]);
      }
      const hl = el.dataset.hl;
      grouped[grouped.length - 1].push({
        text: (el.textContent ?? "").trim(),
        bold: el.dataset.bold === "1",
        hl: hl ? Number(hl) - 1 : null,
      });
    });
    setLines(grouped);
  }, []);

  useLayoutEffect(() => {
    if (lines === null) measure();
  }, [lines, measure]);

  // Re-mede quando a largura muda (as quebras de linha mudam junto).
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let width = host.offsetWidth;
    let timer: number;
    const onResize = () => {
      if (host.offsetWidth === width) return;
      width = host.offsetWidth;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setLines(null), 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(timer);
    };
  }, []);

  // Dispara a varredura quando a cópia entra na viewport.
  useEffect(() => {
    const host = hostRef.current;
    if (!host || lines === null) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = () => {
      host
        .querySelectorAll<HTMLElement>(".block-line")
        .forEach((el) => (el.style.opacity = "1"));
    };

    if (reduce) {
      show();
      return;
    }

    if (playedRef.current) {
      show();
      return;
    }

    const play = () => {
      playedRef.current = true;
      const wrappers = Array.from(
        host.querySelectorAll<HTMLElement>(".block-line-wrapper"),
      );
      wrappers.forEach((wrapper, i) => {
        const bar = wrapper.querySelector<HTMLElement>(".block-revealer");
        const line = wrapper.querySelector<HTMLElement>(".block-line");
        if (!bar || !line) return;
        const inAnim = bar.animate(
          [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
          { duration: DURATION, delay: i * stagger, easing: EASE, fill: "forwards" },
        );
        inAnim.finished
          .then(() => {
            line.style.opacity = "1";
            bar.style.transformOrigin = "100% 50%";
            return bar.animate(
              [{ transform: "scaleX(1)" }, { transform: "scaleX(0)" }],
              { duration: DURATION, easing: EASE, fill: "forwards" },
            ).finished;
          })
          .catch(() => {
            line.style.opacity = "1";
          });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [lines, stagger]);

  const barStyle: CSSProperties | undefined = barColor
    ? { backgroundColor: barColor }
    : undefined;

  const children =
    lines === null
      ? // Passo de medição (também é o HTML entregue pelo servidor).
        tokens.map((t, i) => (
          <span
            key={i}
            data-word
            data-bold={t.bold ? "1" : "0"}
            // Guardado com +1 para que "sem destaque" seja string vazia.
            data-hl={t.hl === null ? "" : String(t.hl + 1)}
          >
            <span className={tokenClass(t)}>{renderWord(t.text)}</span>{" "}
          </span>
        ))
      : lines.map((line, i) => (
          <span className="block-line-wrapper" key={i}>
            <span
              className="block-line"
              aria-hidden="true"
              style={{ opacity: playedRef.current ? 1 : 0 }}
            >
              {line.map((t, j) => (
                <Fragment key={j}>
                  <span className={tokenClass(t)}>{renderWord(t.text)}</span>{" "}
                </Fragment>
              ))}
            </span>
            <span className="block-revealer" style={barStyle} />
          </span>
        ));

  return createElement(
    as,
    {
      ref: hostRef,
      className,
      "aria-label": lines === null ? undefined : text,
    },
    children,
  );
}
