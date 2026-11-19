import { Fragment, type ReactNode } from "react";

/** Forma canônica da marca em texto corrido. */
export const BRAND = "PUBLIca.";

type Props = {
  className?: string;
  /** Cor do ponto final. Em contextos com mix-blend-difference deixe indefinido. */
  dotClassName?: string;
  /** Cor do "ca". */
  scriptClassName?: string;
};

/**
 * Lockup PUBLIca.: "PUBLI" grotesca pesada + "ca" serifada itálica + ponto.
 * É a única forma permitida de escrever o nome da agência.
 */
export default function Wordmark({
  className = "",
  dotClassName,
  scriptClassName,
}: Props) {
  // `normal-case` protege o "ca" quando o lockup aparece dentro de um título
  // com `uppercase` — sem isso o itálico sairia como "CA".
  return (
    <span className={`normal-case ${className}`}>
      <span className="font-bold tracking-tight">PUBLI</span>
      <span className={`font-display italic ${scriptClassName ?? ""}`}>ca</span>
      <span className={dotClassName}>.</span>
    </span>
  );
}

/**
 * Substitui cada ocorrência de "PUBLIca." dentro de um texto pelo lockup.
 * Usado em parágrafos comuns; o RevealCopy faz o mesmo por token.
 */
export function withBrand(text: string): ReactNode[] {
  return text.split(BRAND).flatMap((piece, i) =>
    i === 0
      ? [<Fragment key={`t${i}`}>{piece}</Fragment>]
      : [
          <Wordmark key={`b${i}`} />,
          <Fragment key={`t${i}`}>{piece}</Fragment>,
        ],
  );
}
