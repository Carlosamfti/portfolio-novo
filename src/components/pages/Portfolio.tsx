import { Github, ExternalLink, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Portfolio = () => {
  // --- 1. SEUS PROJETOS REAIS ADICIONADOS AQUI ---
  const projects = [
    {
      title: "VectorLeap (Este Site)",
      category: "Website Institucional",
      imageUrl: "/images/portfolio/Embreve.png", // <--- ADICIONE UM PRINT DO SEU SITE AQUI
      description: `Desenvolvimento da identidade visual e website da VectorLeap, 
      com foco em performance e design responsivo, utilizando as tecnologias mais modernas do mercado.`,
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      liveUrl: "https://www.vectorleap.com.br",
      githubUrl: "https://github.com/Carlosamfti/portfolio-novo",
      caseStudyUrl: "#", // <--- ADICIONE O LINK DO SEU BEHANCE AQUI
    },
    {
      title: "Dashboard de Controle de Vendas",
      category: "Business Intelligence",
      imageUrl: "/images/portfolio/Embreve.png", // <--- ADICIONE UM PRINT DO DASHBOARD AQUI
      description: `Criação de um painel estratégico em Power BI que transforma planilhas de Excel em insights visuais 
      e acionáveis para a tomada de decisão.`,
      tech: ["Power BI", "Excel", "Análise de Dados", "ETL"],
      liveUrl: null, // Sem link ao vivo para este projeto
      githubUrl: null, // Código privado
      caseStudyUrl: "#", // <--- ADICIONE O LINK DO SEU BEHANCE AQUI
    },
    {
      title: "Organização de Processos - CA Internet",
      category: "Sistemas de Produtividade",
      imageUrl: "/images/portfolio/Embreve.png", // <--- ADICIONE UM PRINT DO SISTEMA NOTION AQUI
      description: `Desenvolvimento de uma Central de Operações (CO) em Notion contendo sessão comercial com funil de clientes, 
      contratos, tarefas e implatação do projeto.`,
      tech: ["Notion", "Gestão de Projetos", "Otimização de Processos"],
      liveUrl: null, // Sem link ao vivo para este projeto
      githubUrl: null,
      caseStudyUrl: "#", // <--- ADICIONE O LINK DO SEU BEHANCE AQUI
    },

    {
      title: "Organização de Processos - Central de Marca",
      category: "Sistemas de Produtividade",
      imageUrl: "/images/portfolio/Embreve.png", // <--- ADICIONE UM PRINT DO SISTEMA NOTION AQUI
      description: `Desenvolvimento de uma Central de Operações (CO) em Notion contendo sessão de Guia de marca, tarefas, 
      funil de clientes e projetos.`,
      tech: ["Notion", "Gestão de Projetos", "Otimização de Processos"],
      liveUrl: null, // Sem link ao vivo para este projeto
      githubUrl: null,
      caseStudyUrl: "#", // <--- ADICIONE O LINK DO SEU BEHANCE AQUI
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-azul-vector mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-texto-principal max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, aplicando tecnologia e
            estratégia para criar soluções de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className=" bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.title}`}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <CardHeader>
                <span className="px-3 py-1 bg-verde-leap/20 text-verde-leap text-sm font-semibold rounded-full self-start mb-3">
                  {project.category}
                </span>
                <CardTitle className="text-2xl text-azul-vector">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-texto-principal text-base pt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 justify-end items-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-verde-leap hover:bg-green-700 text-white flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto Online
                      </Button>
                    </a>
                  )}
                  {project.caseStudyUrl && project.caseStudyUrl !== "#" && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-azul-vector text-azul-vector hover:bg-azul-vector hover:text-white"
                      >
                        <BookText className="h-4 w-4 mr-2" />
                        Estudo de Caso
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver código no GitHub"
                    >
                      <Github className="h-6 w-6 text-texto-principal hover:text-azul-vector transition-colors" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
