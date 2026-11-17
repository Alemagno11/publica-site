/**
 * Prefixo de caminho para deploy em subdiretório (GitHub Pages serve o projeto
 * em /<repo>/). `next/link` e `next/image` recebem o basePath automaticamente,
 * mas tags HTML cruas — <video src>, <video poster> — não. Use `asset()` nelas.
 *
 * Em dev NEXT_PUBLIC_BASE_PATH é vazio e tudo continua na raiz.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!basePath) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
