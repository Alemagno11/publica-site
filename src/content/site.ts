/**
 * Todo o conteúdo editorial do site em um lugar só.
 *
 * A marca é sempre escrita "PUBLIca." — essa string vira o lockup
 * (PUBLI grotesca + ca itálica + ponto) automaticamente.
 *
 * Em textos que passam pelo RevealCopy:
 *   **trecho**  → peso maior
 *   ==trecho==  → caixa de destaque, alternando lime e roxo na ordem de aparição
 *
 * Pontuação logo depois de um trecho marcado tem que ficar DENTRO dos
 * marcadores (`**assim.**`, não `**assim**.`), senão o ponto vira uma palavra
 * própria e sai separado por um espaço.
 *
 * Quase toda a copy abaixo saiu das artes da Carol e foi validada por ela
 * (13/11 e 18/11/2026). Ao editar, prefira manter as frases como ela escreveu.
 */

export const nav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "História", href: "/#historia" },
  { label: "Creators", href: "/#creators" },
];

export const navRight = { label: "Contato", href: "/#contato" };

export const hero = {
  lead: "Marketing de influência para marcas & creators —",
  accent: "muito além de uma publi.",
  video: "/media/hero.mp4",
  poster: "/media/hero-poster.jpg",
};

export const about = {
  headline:
    "Conectamos marcas & creators. Estratégia, influência e conexões que geram **resultados.**",
  body: "Operamos como extensão do time de marketing: casting escolhido por dado e não por feeling, briefing que respeita a linguagem de cada perfil e mensuração que vai muito além da curtida. Da nano à celebridade, do TikTok ao YouTube, o critério é sempre o mesmo — relevância real para quem está do outro lado da tela.",
  cta: { label: "Conheça a agência", href: "/#servicos" },
  image: "/media/about.jpg",
};

export const services = {
  headline:
    "Criadores que focam em ==comunidade== e ==relacionamento== geram muito mais impacto do que aqueles que só buscam números.",
  eyebrow: "Influência com estratégia.",
  title: "O que a PUBLIca. faz?",
  subtitle: "Ideias que geram resultados.",
  cta: { label: "Começar um projeto", href: "/#contato" },
  items: [
    {
      title: "Planejamento estratégico",
      description: "Estratégias sob medida para sua marca crescer.",
    },
    {
      title: "Conexão com creators",
      description: "Os influenciadores certos para o seu objetivo.",
    },
    {
      title: "Campanhas com resultado",
      description: "Da ideia à entrega, com foco em performance.",
    },
  ],
};

/** Passo a passo da arte "Como funciona?". */
export const process = {
  title: "Como funciona?",
  steps: [
    { title: "Entendemos", description: "a sua marca" },
    { title: "Conectamos", description: "ao creator ideal" },
    { title: "Criamos campanhas", description: "com resultado" },
  ],
  closing: "Estratégia, influência e **execução profissional.**",
};

/**
 * Antes chamada "Cases". Virou "Marcas & Creators" por decisão da reunião de 13/11.
 * As imagens continuam sendo de banco — a Carol vai enviar fotos reais dos
 * influenciadores agenciados para substituir.
 */
export const creators = {
  eyebrow: "Marketing de influência",
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
 * História da agência.
 *
 * O bloco de números (creators agenciados, marcas atendidas, campanhas, alcance)
 * saiu em 17/11 porque ainda não temos os valores reais. Para trazer de volta:
 * recriar `metrics` aqui e o <dl> em Story.tsx — está no commit anterior.
 */
export const story = {
  label: "Nossa história",
  name: "Carol",
  role: "Fundadora & Head de Estratégia",
  statement:
    "Marca nenhuma controla o que falam dela. O que dá para fazer é escolher bem com quem se conversa e aparecer com alguma coisa que valha o tempo de quem está assistindo. A PUBLIca. nasceu dessa conta simples.",
  body: "Começamos dentro de um estúdio de podcast em Itapevi, conectando marcas da região a criadores que já tinham a audiência certa. Hoje atendemos marcas de dentro e de fora da cidade — e seguimos com o mesmo método: entender o público antes de escolher o creator.",
  image: "/brand/founder.jpg",
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
        { label: "História", href: "/#historia" },
        { label: "Como funciona", href: "/#como-funciona" },
        { label: "Fale com a gente", href: "/#contato" },
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
