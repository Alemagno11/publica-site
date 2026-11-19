import Link from "next/link";
import { withBrand } from "./Wordmark";

type Props = {
  label: string;
  href: string;
  className?: string;
  /** Cor do preenchimento que sobe no hover. */
  variant?: "ink" | "brand";
};

/**
 * Botão de contorno: no hover a etiqueta sobe e uma duplicata preenchida
 * entra por baixo. Mesma mecânica do site de referência.
 */
export default function SlideButton({
  label,
  href,
  className = "",
  variant = "ink",
}: Props) {
  const fill =
    variant === "brand" ? "bg-brand text-paper" : "bg-ink text-paper";
  const external = href.startsWith("http") || href.startsWith("mailto:");

  const inner = (
    <>
      <span className="flex items-center justify-center overflow-hidden">
        <span className="inline-block transition-transform duration-400 ease-wipe group-hover:-translate-y-full">
          {withBrand(label)}
        </span>
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-400 ease-wipe group-hover:translate-y-0 ${fill}`}
      >
        {withBrand(label)}
      </span>
    </>
  );

  const classes = `group relative inline-block w-fit cursor-pointer overflow-hidden border border-ink px-6 py-3 text-lg tracking-wide uppercase ${className}`;

  if (external) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
