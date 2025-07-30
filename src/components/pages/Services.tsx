import { LayoutTemplate, TrendingUpDown, ListChecks } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  // --- 1. CONTEÚDO REFINADO E FOCADO EM 3 PILARES ---

  //Eu criei um array de três objetos. A função .map() percorre esse array, me entregando um objeto de cada vez.
  //Para cada um, o React exige uma key única, então eu também pego o index (a posição) que o .map() me oferece e a uso como essa key."

  const services = [
    {
      icon: LayoutTemplate,
      title: "Desenvolvimento de Sites e Sistemas",
      description: `Criamos a presença online que seu negócio merece.
        Desenvolvemos sites com design moderno e perfeito para todos os dispositivos, feitos para atrair e engajar clientes.`,
      features: [
        "Sites Institucionais e Portfólios",
        "Landing Pages de Alta Conversão",
        "Sistemas Web Personalizados",
      ],
    },
    {
      icon: TrendingUpDown,
      title: "Dashboards e Análise de Dados",
      description:
        "Transformamos dados brutos em painéis visuais interativos para que você tome decisões mais inteligentes e rápidas, baseadas em fatos.",
      features: [
        "ETL e Engenharia de Dados",
        "Criação de Dashboards (Power BI)",
        "Análise de Insights Estratégicos",
      ],
    },
    {
      icon: ListChecks,
      title: "Sistemas de Produtividade com Notion",
      description:
        "Organize o caos e centralize a operação da sua equipe com Centros de Operações personalizados para otimizar seus processos e conhecimento.",
      features: [
        "Central de Operações (COs)",
        "Otimização de Fluxos de Trabalho",
        "Gestão de Conhecimento",
      ],
    },
  ];

  return (
    // --- 2. ID E FUNDO ATUALIZADOS ---
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-azul-vector mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-texto-principal max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia, atuando como seu
            parceiro estratégico para transformar sua presença digital e
            otimizar seus processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            // --- 4. CARDS COM A NOVA IDENTIDADE VISUAL ---
            <Card
              key={service.title}
              className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg border-gray-200"
            >
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-azul-vector" />
                </div>
                <CardTitle className="text-2xl text-azul-vector">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-texto-principal text-base pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 pt-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-base text-texto-principal"
                    >
                      <div className="h-2 w-2 bg-verde-leap rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
