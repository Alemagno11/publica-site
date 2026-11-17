import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/site";
import { asset } from "@/lib/asset";
import Newsletter from "./Newsletter";
import Wordmark from "./Wordmark";

/**
 * Footer em "sticky reveal": a seção é recortada e o conteúdo fica grudado
 * acima da dobra, de modo que o painel surge por baixo do corpo da página.
 */
export default function Footer() {
  return (
    <footer
      className="relative h-100 max-h-200 sm:h-150 lg:h-200"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)]">
        <div className="sticky top-[calc(100vh-400px)] h-100 sm:top-[calc(100vh-600px)] sm:h-150 lg:top-[calc(100vh-800px)] lg:h-200">
          <div className="flex h-full w-full flex-col justify-between bg-brand px-6 py-4 text-paper sm:py-6 md:px-12 lg:py-8">
            <div className="flex shrink-0 flex-wrap gap-8 sm:gap-12 lg:gap-20">
              {footer.columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 text-xs uppercase sm:mb-2 sm:text-sm text-paper/50">
                    {col.title}
                  </h3>
                  {col.links.map((link) =>
                    "external" in link && link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-all hover:text-acid sm:text-base"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm transition-all hover:text-acid sm:text-base"
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>
              ))}
              <Newsletter />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
              <Wordmark
                className="mt-4 block pb-[0.12em] text-[18vw] leading-[0.8] sm:mt-6 sm:text-[16vw] lg:mt-10 lg:text-[14vw]"
                dotClassName="text-acid"
              />
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <Image
                  src={asset("/brand/logo-icon.jpg")}
                  alt=""
                  aria-hidden="true"
                  width={160}
                  height={160}
                  className="hidden h-24 w-24 object-cover lg:block"
                />
                <p className="text-sm sm:text-base">
                  © {footer.year} <Wordmark /> {footer.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
