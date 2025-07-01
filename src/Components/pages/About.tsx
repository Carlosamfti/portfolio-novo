import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const About = () => {
  const experiences = [
    {
      title: "Analista de Suporte de TI",
      company: "Mais Laudo",
      description: "Implementação de configurações, suporte técnico e treinamentos personalizados."
    },
    {
      title: "Analista de Implantação",
      company: "Smart NX", 
      description: "Modelagem de processos de negócio e condução de reuniões estratégicas."
    },
    {
      title: "Desenvolvedor de Software",
      company: "Proinfo",
      description: "Desenvolvimento e manutenção de sistemas, análise e implementação de melhorias."
    }
  ];

  return (
    <section id="About" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
            <p className="text-xl text-gray-600">
              Profissional experiente em tecnologia, apaixonado por criar soluções digitais inovadoras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Minha Jornada</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Olá! Sou Carlos Augusto, tenho 40 anos e sou apaixonado por tecnologia. 
                Formado em Sistemas de Informação e atualmente cursando Pós-graduação em 
                Ciência de Dados aplicada à saúde.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com mais de 15 anos de experiência em TI, passei por diversas áreas: 
                desenvolvimento de software, suporte técnico, análise de sistemas e consultoria. 
                Essa trajetória me proporcionou uma visão completa do ciclo de vida de projetos tecnológicos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, combino toda essa experiência para oferecer soluções web personalizadas, 
                sempre focando na qualidade e nas necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-lg">Formação</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Sistemas de Informação</p>
                  <p className="text-sm text-gray-500">Pós-graduação em Ciência de Dados aplicada à saúde</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-lg">Experiência</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">+15 anos em TI</p>
                  <p className="text-sm text-gray-500">Desenvolvimento, Suporte e Consultoria</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-lg">Especialidades</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Web Development & Data Science</p>
                  <p className="text-sm text-gray-500">Soluções personalizadas e análise de dados</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Experiência Profissional</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;