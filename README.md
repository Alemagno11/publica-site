# PubliCa — site

Site da PubliCa (marketing de influência), construído sobre a estrutura, o layout e as
animações de [researchdesignagency.com](https://researchdesignagency.com/), com identidade,
conteúdo e paleta da PubliCa.

Next.js 16 (App Router) · React 19 · Tailwind v4 · Lenis · TypeScript.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o export estático em out/
```

## Deploy

Publicado no GitHub Pages pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
disparado a cada push na `main`. O build é um export estático (`output: "export"`).

O Pages serve o projeto em `/<repo>/`, então o workflow passa
`NEXT_PUBLIC_BASE_PATH=/<repo>` no build. Dois detalhes que quebram o site se
esquecidos:

- **`next/image` não aplica o basePath sozinho.** Todo `src` de imagem, `<video src>`
  e `poster` passa por `asset()` ([`src/lib/asset.ts`](src/lib/asset.ts)). Caminho
  novo de asset no código → use `asset()`.
- **`.nojekyll`** é criado no workflow. Sem ele o Jekyll ignora a pasta `_next` e o
  site sobe sem CSS nem JS.

Para conferir o artefato como o Pages vai servir, antes de empurrar:

```bash
NEXT_PUBLIC_BASE_PATH=/publica-site npm run build
mkdir -p /tmp/gh/publica-site && cp -r out/* /tmp/gh/publica-site/
npx serve /tmp/gh        # abrir /publica-site/
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

## Pendências antes de ir ao ar para marcas

1. **Números da agência** — `story.metrics` em `site.ts` está com `[ nº ]` de
   propósito. São os únicos placeholders visíveis no site; a Carol precisa informar
   os valores reais. Não invente.
2. **Fotos dos creators** — as três imagens de `creators` são de banco. A Carol vai
   mandar fotos reais dos influenciadores agenciados (citou o Isaac Santos como capa).
3. **Vídeo do hero** — trocado em 16/11 por um set de produção. Segue aberto para a
   Carol escolher outro.
4. **E-mail** — `contato@publica.ag` aparece no formulário, no contato e na newsletter.
   Confirmar o endereço real.
5. **Formulário e newsletter** — sem backend: o envio abre o cliente de e-mail.
   Ligar a uma ferramenta de CRM/e-mail marketing quando existir.
6. **Links sociais** — apontam para as home de Instagram/TikTok/LinkedIn/YouTube.
7. **Domínio** — hoje em `github.io`. Para `publica.com.br`, apontar o DNS e trocar
   `NEXT_PUBLIC_BASE_PATH` para vazio (domínio próprio serve na raiz).

## Seções removidas em 13/11

Últimos Posts, Sala de Criadores e Estúdio Aberto saíram para encurtar o site.
O código está no commit `Site PUBLIca. — versao inicial completa`; para recuperar:

```bash
git show <commit>:src/components/Spotlight.tsx > src/components/Spotlight.tsx
```

Junto com elas saiu o `StripReveal.tsx` (revelação de imagem em faixas), que só era
usado pela Sala de Criadores.

## Créditos das imagens

Vídeo e fotos de stock do [Pexels](https://www.pexels.com) (licença livre para uso
comercial, atribuição não exigida). Logo e foto da fundadora fornecidas pelo cliente.
