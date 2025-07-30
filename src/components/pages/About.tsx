import { Handshake, BrainCircuit, Lightbulb, Gem, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "Parceria Estratégica",
      description: `Acreditamos que o verdadeiro sucesso é construído em conjunto. 
      Atuamos como uma extensão da equipe dos nossos clientes, alinhando nossa expertise técnica diretamente aos objetivos estratégicos 
      e à visão de negócio de cada um para alcançar resultados grandiosos. O seu crescimento é o nosso crescimento.`,
    },
    {
      icon: BrainCircuit,
      title: "Empatia Profunda",
      description: `Antes de qualquer ferramenta, buscamos um entendimento profundo dos seus desafios e objetivos. 
      Nossas soluções não são apenas tecnicamente excelentes; 
      elas são desenhadas para serem genuinamente úteis e resolverem problemas reais do seu dia a dia.`,
    },
    {
      icon: Lightbulb,
      title: "Inovação com Propósito",
      description: `Não buscamos apenas a tecnologia, mas a solução inovadora que gera o maior impacto. 
      Estamos em constante aprendizado para dominar as ferramentas que nos permitem construir as melhores soluções 
      para os desafios reais dos nossos clientes de forma mais eficiente e inteligente.`,
    },

    {
      icon: Gem,
      title: "Excelência Técnica",
      description: `Somos guiados pela qualidade em cada detalhe. 
      Do código limpo e escalável ao design preciso e aos gráficos intuitivos, 
      nosso compromisso é com a entrega de soluções robustas, seguras e de alta performance que geram resultados concretos.`,
    },

    {
      icon: Eye,
      title: "Clareza e Transparência",
      description: `Acreditamos que a melhor parceria é construída com base na confiança. 
      Comunicamos cada etapa do processo de forma clara e honesta, traduzindo o complexo para o simples e 
      garantindo que você tenha total visibilidade e controle sobre o seu projeto.`,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-cinza-neutro">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* --- 1. CABEÇALHO DA SEÇÃO --- */}

          <div className="text-center mb -14">
            <h2 className="text-4xl font-bold text-azul-vector mb-4">
              Mais que um Fornecedor, um Parceiro Estratégico
            </h2>
            <p className="text-xl text-texto-principal leading-relaxed max-w-3xl mx-auto mb-4">
              Nós simplificamos a complexidade da tecnologia para que você possa
              focar no seu negócio. A VectorLeap nasceu com um propósito claro:
              ser seu parceiro estratégico na jornada digital. Unimos nossa
              expertise em desenvolvimento e análise de dados com um design
              focado em resultados para transformar seu potencial em crescimento
              concreto
            </p>
          </div>
          {/* --- 2. NOSSA MISSÃO --- */}

          <div className="text-center mb-10 p-8 bg-cinza-neutro rounded-lg">
            <h3 className="text-3xl font-bold text-azul-vector mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-texto-principal">
              Empoderar negócios a prosperarem no cenário digital. Fazemos isso
              transformando dados em insights estratégicos, organizando
              processos em sistemas eficientes e desenvolvendo a presença online
              que conecta cada marca ao seu público.
            </p>
          </div>
          {/* --- 3. NOSSOS VALORES --- */}

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-azul-vector mb-12">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-start text-left">
                  <div className="flex-shrink-0">
                    <value.icon className="h-10 w-10 text-verde-leap" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-azul-vector mb-2">
                      {value.title}
                    </h4>
                    <p className="text-texto-principal">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- 4. O FUNDADOR --- */}

          <div className="pt-16 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <img
                  src="images/carlos.png"
                  alt="Carlos Augusto, Fundador da Vector Leap"
                  className="w-full max-w-[280px] h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h4 className="text-3xl font-bold text-azul-vector">
                  Carlos Augusto
                </h4>
                <p className="text-xl text-verde-leap font-semibold mb-4">
                  Fundador & Estrategista Digital
                </p>
                <p className="text-lg text-texto-principal leading-relaxed">
                  Com mais de 15 anos de experiência, minha paixão é usar a
                  tecnologia como uma ponte para o sucesso de outros negócios. A
                  VectorLeap é a materialização desse propósito: unir expertise
                  técnica com uma parceria genuína para criar um crescimento
                  real e sustentável para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
