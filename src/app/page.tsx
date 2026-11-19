import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Creators from "@/components/Creators";
import Contact from "@/components/Contact";

/**
 * Ordem: o visitante lê o que a agência faz (Serviços), descobre quem está por
 * trás (História), entende como funciona e só então vê os segmentos e o
 * formulário (Creators).
 *
 * As seções Últimos Posts, Sala de Criadores e Estúdio Aberto saíram em 13/11 —
 * estão no commit "versao inicial completa" se precisarem voltar.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Story />
      <Process />
      <Creators />
      <Contact />
    </>
  );
}
