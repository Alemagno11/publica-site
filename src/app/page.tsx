import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Creators from "@/components/Creators";
import Story from "@/components/Story";
import Contact from "@/components/Contact";

/**
 * Ordem definida na reunião de 13/11: o site foi encurtado para levar o
 * visitante das marcas/creators direto para a história e os números.
 * As seções Últimos Posts, Sala de Criadores e Estúdio Aberto saíram
 * temporariamente — estão no commit "versao inicial completa" se precisarem voltar.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Creators />
      <Story />
      <Contact />
    </>
  );
}
