import { ArrowRight, AppWindow, Target, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // --- Nossas cores do Guia da Marca ---
  const colors = {
    azulVector: "#0D2C54",
    verdeLeap: "#00A878",
    cinzaNeutro: "#f5f5f5",
    textoPrincipal: "#333333", // Um cinza escuro para melhor legibilidade
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // --- 1. ID e Fundo Atualizados ---
    <section
      id="home"
      className="py-20 lg:py-32"
      style={{ backgroundColor: colors.cinzaNeutro }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* --- 2. Título (UVP) e Subtítulo (Bio) Atualizados --- */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: colors.azulVector }}
            >
              Transformando a complexidade do seu negócio em crescimento
              direcionado
            </h1>
            <p
              className="text-lg md:text-xl text-gray-700"
              style={{ color: colors.textoPrincipal }}
            >
              Atuamos como o navegador que te guia com precisão, transformando
              dados em decisões inteligentes, processos em produtividade e
              ideias em crescimento concreto
            </p>
          </div>
          {/* --- 3. Botões (CTAs) com Novas Cores e Texto --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-white px-8 py-4 text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
              style={{ backgroundColor: colors.verdeLeap }}
            >
              Vamos conversar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="px-8 py-4 text-lg font-semibold shadow-sm transition-colors text-[#0D2C54] hover:bg-[#0D2C54] hover:text-white"
              style={{
                borderColor: colors.azulVector,
              }}
            >
              Ver Serviços
            </Button>
          </div>
          {/* --- 4. Seção de Ícones com Novos Títulos --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-4">
              <AppWindow
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: colors.azulVector }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.azulVector }}
              >
                Websites e Sistemas
              </h3>
              <p style={{ color: colors.textoPrincipal }}>
                Desenvolvimento de sites e sistemas personalizados para conectar
                sua marca ao mundo.
              </p>
            </div>
            <div className="text-center p-4">
              <Target
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: colors.azulVector }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.azulVector }}
              >
                Dashboards e Dados
              </h3>
              <p style={{ color: colors.textoPrincipal }}>
                Transformação de dados brutos em dashboards interativos para
                decisões inteligentes.
              </p>
            </div>
            <div className="text-center p-4">
              <ClipboardList
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: colors.azulVector }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.azulVector }}
              >
                Produtividade e Notion
              </h3>
              <p style={{ color: colors.textoPrincipal }}>
                Organização de processos e equipes com sistemas de produtividade
                sob medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
