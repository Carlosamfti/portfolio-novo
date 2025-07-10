import { Monitor, Smartphone, Database, Users, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Desenvolvimento de Sites",
      description: "Sites profissionais, landing pages e lojas virtuais responsivas e otimizadas para conversão.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Alta"]
    },
    {
      icon: Database,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de sistemas web sob medida para atender às necessidades específicas do seu negócio.",
      features: ["Integração de APIs", "Banco de Dados", "Painel Administrativo"]
    },
    {
      icon: Users,
      title: "Consultoria em TI",
      description: "Análise de processos, implementação de soluções tecnológicas e treinamento de equipes.",
      features: ["Análise de Processos", "Implementação", "Treinamentos"]
    },
    {
      icon: Smartphone,
      title: "Aplicações Web",
      description: "Desenvolvimento de aplicações web modernas com foco na experiência do usuário.",
      features: ["Interface Moderna", "Performance", "Usabilidade"]
    },
    {
      icon: Shield,
      title: "Suporte Técnico",
      description: "Suporte contínuo, manutenção de sistemas e resolução de problemas técnicos.",
      features: ["Suporte 24/7", "Manutenção", "Atualizações"]
    },
    {
      icon: Zap,
      title: "Otimização & Performance",
      description: "Análise e otimização de sites existentes para melhorar velocidade e conversões.",
      features: ["Análise Técnica", "Otimização", "Relatórios"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meus Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço soluções completas em tecnologia para transformar sua presença digital 
            e otimizar seus processos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
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