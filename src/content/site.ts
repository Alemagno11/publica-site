/**
 * Todo o conteúdo editorial do site em um lugar só.
 * Textos em pt-BR, escritos a partir de prática corrente de marketing de influência.
 *
 * A marca é sempre escrita "PUBLIca." — essa string vira o lockup
 * (PUBLI grotesca + ca itálica + ponto) automaticamente.
 *
 * Frases oficiais vindas das artes da Carol (13/11/2026):
 *   "Muito além de uma publi."
 *   "Sua marca no creator certo."
 *   "Influência com estratégia."
 *   "Estratégia, influência e conexões que geram resultados."
 */

export const nav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Creators", href: "/#creators" },
  { label: "História", href: "/#historia" },
];

export const navRight = { label: "Contato", href: "/#contato" };

export const hero = {
  lead: "Agência de Marketing de Influência —",
  accent: "muito além de uma publi.",
  video: "/media/hero.mp4",
  poster: "/media/hero-poster.jpg",
};

export const about = {
  headline:
    "PUBLIca. conecta marcas às vozes que o público já escuta. Estratégia, influência e conexões que geram resultados.",
  body: "Operamos como extensão do time de marketing: casting escolhido por dado e não por feeling, briefing que respeita a linguagem de cada perfil e mensuração que vai muito além da curtida. Da nano à celebridade, do TikTok ao YouTube, o critério é sempre o mesmo — relevância real para quem está do outro lado da tela.",
  cta: { label: "Conheça a agência", href: "/#servicos" },
  image: "/media/about.jpg",
};

export const services = {
  headline:
    "Influência não se compra, se constrói. Começamos pelo público, não pelo creator. É assim que conteúdo vira conversa, e conversa vira venda.",
  cta: { label: "Começar um projeto", href: "/#contato" },
  items: [
    "Estratégia de Influência",
    "Casting & Curadoria",
    "Campanhas & Ativações",
    "Social Content",
    "Dados & Performance",
  ],
};

/**
 * Antes chamada "Cases". Virou "Marcas & Creators" por decisão da reunião de 13/11.
 * As imagens continuam sendo de banco — a Carol vai enviar fotos reais dos
 * influenciadores agenciados para substituir.
 */
export const creators = {
  title: "Sua marca no creator certo.",
  subtitle: "Campanhas com estratégia, influência e propósito.",
  items: [
    {
      title: "Beleza & Skincare",
      tag: "Casting, Campanha",
      image: "/media/case-1.jpg",
    },
    {
      title: "Food & Beverage",
      tag: "Always-on, UGC",
      image: "/media/case-2.jpg",
    },
    {
      title: "Moda & Lifestyle",
      tag: "Lançamento, Evento",
      image: "/media/case-3.jpg",
    },
  ],
};

/** Formulário de captação pedido na reunião ("quero ser agenciado" / "quero contratar"). */
export const leadForm = {
  title: "Vamos conversar",
  intro: "Conte em uma linha o que você precisa. A gente responde no mesmo dia.",
  email: "contato@publica.ag",
  roles: [
    { value: "marca", label: "Sou marca e quero contratar creators" },
    { value: "creator", label: "Sou creator e quero ser agenciado" },
  ],
  fields: {
    name: "Seu nome",
    contact: "E-mail ou WhatsApp",
    message: "O que você precisa?",
  },
  submit: "Enviar",
};

/**
 * História + números.
 * ATENÇÃO: os valores abaixo são placeholders. A Carol precisa informar os
 * números reais antes de o site ir ao ar para marcas.
 */
export const story = {
  label: "Nossa história",
  name: "Carol",
  role: "Fundadora & Head de Estratégia",
  statement:
    "Marca nenhuma controla o que falam dela. O que dá para fazer é escolher bem com quem se conversa e aparecer com alguma coisa que valha o tempo de quem está assistindo. A PUBLIca. nasceu dessa conta simples.",
  body: "Começamos dentro de um estúdio de podcast em Itapevi, conectando marcas da região a criadores que já tinham a audiência certa. Hoje atendemos marcas de dentro e de fora da cidade — e seguimos com o mesmo método: entender o público antes de escolher o creator.",
  image: "/brand/founder.jpg",
  metrics: [
    { value: "[ nº ]", label: "Creators agenciados" },
    { value: "[ nº ]", label: "Marcas atendidas" },
    { value: "[ nº ]", label: "Campanhas entregues" },
    { value: "[ nº ]", label: "Alcance somado" },
  ],
};

export const contact = {
  headline:
    "A gente gosta de conhecer gente nova, ouvir ideia nova e pegar desafio novo. Se você tem uma marca para colocar na conversa, queremos saber.",
  cta: { label: "Fale com a PUBLIca.", href: "mailto:contato@publica.ag" },
};

export const footer = {
  columns: [
    {
      title: "Agência",
      links: [
        { label: "Sobre", href: "/#sobre" },
        { label: "Serviços", href: "/#servicos" },
        { label: "Creators", href: "/#creators" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "Fale com a gente", href: "/#contato" },
        { label: "História", href: "/#historia" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "https://instagram.com", external: true },
        { label: "TikTok", href: "https://tiktok.com", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "YouTube", href: "https://youtube.com", external: true },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    placeholder: "voce@email.com",
    note: "Um e-mail por mês sobre o mercado de creators.",
  },
  year: 2026,
  copyright: "Marketing de Influência",
};
