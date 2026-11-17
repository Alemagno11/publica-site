import type { NextConfig } from "next";

/**
 * O site é publicado como export estático no GitHub Pages, que serve o projeto
 * em https://<user>.github.io/<repo>/. O workflow de deploy define
 * NEXT_PUBLIC_BASE_PATH=/<repo>; em dev a variável fica vazia e tudo roda na raiz.
 *
 * `output: "export"` desliga o otimizador de imagens (precisa de servidor),
 * por isso `images.unoptimized`.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
