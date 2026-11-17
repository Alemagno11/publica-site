import Link from "next/link";
import { posts } from "@/content/site";
import { sectionLink, sectionTitle } from "./typography";

/** Lista de posts com barra de hover alternando preto e roxo. */
export default function Posts() {
  return (
    <section id="blog" className="bg-paper px-6 pt-12 md:px-12 md:py-24 xl:py-32">
      <h2 className={`mb-8 ${sectionTitle}`}>{posts.title}</h2>

      <div className="border-t border-neutral-200">
        {posts.items.map((item, i) => {
          const brand = i % 2 === 1;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex w-full items-baseline justify-between overflow-hidden border-b border-neutral-200 py-3 md:py-4"
            >
              <div
                className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-wipe group-hover:scale-x-100 ${
                  brand ? "bg-brand" : "bg-ink"
                }`}
              />
              <div className="relative flex min-w-0 items-baseline gap-4 pr-4 text-ink transition-colors duration-500 group-hover:text-paper md:gap-8">
                <span className="font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium tracking-tight uppercase transition-transform group-hover:translate-x-2 md:text-2xl xl:text-3xl">
                  {item.title}
                </span>
              </div>
              <div className="relative flex shrink-0 items-baseline gap-4 pr-2 text-neutral-400 transition-colors duration-500 group-hover:text-paper/60">
                <span className="hidden text-xs tracking-widest uppercase md:inline md:text-sm">
                  {item.kind}
                </span>
                <span className="text-xs tracking-widest uppercase md:text-sm">
                  {item.date}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 flex justify-end">
        <Link href={posts.cta.href} className={sectionLink}>
          {posts.cta.label}
        </Link>
      </div>
    </section>
  );
}
