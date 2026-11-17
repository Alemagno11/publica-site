# PubliCa — site

Site da PubliCa (marketing de influência), construído sobre a estrutura, o layout e as
animações de [researchdesignagency.com](https://researchdesignagency.com/), com identidade,
conteúdo e paleta da PubliCa.

Next.js 16 (App Router) · React 19 · Tailwind v4 · Lenis · TypeScript.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Estrutura

```
src/
  app/
    layout.tsx        fontes, metadata, Header, Footer, smooth scroll
    page.tsx          ordem das seções
    globals.css       tokens da marca + CSS do revealer de linhas
    icon.jpeg         favicon (logo)
  content/site.ts     TODO o texto do site — editar só aqui
  components/
    Hero.tsx          vídeo em tela cheia revelado em persiana (clipPath SVG, 25 faixas)
    RevealCopy.tsx    "block line revealer": barra sólida varre cada linha medida em runtime
    StripReveal.tsx   imagem revelada em 22 faixas horizontais, dirigida por scroll
    SlideButton.tsx   botão de contorno com etiqueta que sobe no hover
    Services.tsx      linhas com wipe + mix-blend-difference
    Posts.tsx         lista com wipe alternando preto/roxo
    Spotlight.tsx     banda "Sala de Criadores"
    Lab.tsx           carrossel de edições
    Founder.tsx       bloco da fundadora
    Footer.tsx        footer roxo em sticky reveal
    SmoothScroll.tsx  Lenis
public/
  brand/              logo e foto enviadas pelo cliente
  media/              vídeo e fotos de stock
docs/research/        extração do site de referência (BEHAVIORS.md) e QA
```

## Paleta

| Token | Valor | Origem |
|---|---|---|
| `ink` | `#000000` | — |
| `paper` | `#ffffff` | — |
| `brand` | `#7723FA` | amostrado da logo |
| `acid` | `#C2F02A` | amostrado da logo |
| `rule` | `#D4D4D4` | réguas, igual ao referência |

Detalhe que vale conhecer: o roxo da marca sob `mix-blend-difference` com texto branco
produz exatamente o verde-limão da marca. É o que acontece no hover das linhas de serviço.

## Nome da marca

A agência é **sempre** escrita `PUBLIca.` — PUBLI em grotesca pesada, *ca* em serifada
itálica, ponto final. Basta escrever a string `PUBLIca.` em `src/content/site.ts`: tanto o
`RevealCopy` quanto o helper `withBrand()` trocam a string pelo lockup automaticamente.
O componente é [`Wordmark.tsx`](src/components/Wordmark.tsx).

## Escala tipográfica

Centralizada em [`src/components/typography.ts`](src/components/typography.ts) —
`sectionCopy`, `closingCopy`, `sectionTitle`, `sectionLink`. Mudar lá muda o site inteiro.
Os textos de abertura de seção são curtos de propósito e cada um termina em um CTA.

## Antes de publicar

1. **Cases** — hoje são categorias de atuação (Beleza, Food, Moda), não clientes reais.
   Trocar por cases de verdade quando houver autorização.
3. **Links sociais** — apontam para as home de Instagram/TikTok/LinkedIn/YouTube.
4. **E-mail** — `contato@publica.ag` aparece no CTA de contato e na newsletter.
5. **Newsletter** — sem backend: o envio abre o cliente de e-mail. Ligar à ferramenta
   de e-mail marketing quando existir.
6. **Rotas internas** — `/#cases`, `/#blog` etc. são âncoras na home. As páginas
   internas (blog, cases) ainda não existem.

## Créditos das imagens

Vídeo e fotos de stock do [Pexels](https://www.pexels.com) (licença livre para uso
comercial, atribuição não exigida). Logo e foto da fundadora fornecidas pelo cliente.
