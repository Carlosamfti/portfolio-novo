import { Github,ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Sistema de Gestão Hospitalar",
      description: "Plataforma completa para gestão de prontuários eletrônicos e agendamentos médicos.",
      tech: ["React", "Node.js", "PostgreSQL", "API REST"],
      category: "Sistema Web",
      githubUrl: "https://github.com/seu-usuario/link-do-projeto-hospitalar"
    },
    {
      title: "E-commerce Responsivo",
      description: "Loja virtual moderna com carrinho de compras, pagamento online e painel administrativo.",
      tech: ["React", "Stripe", "MongoDB", "Express"],
      category: "E-commerce",
      githubUrl: "https://github.com/seu-usuario/link-do-E-commerce"

    },
    {
      title: "Dashboard Analytics",
      description: "Painel de controle com análise de dados em tempo real e relatórios customizados.",
      tech: ["React", "D3.js", "Python", "Machine Learning"],
      category: "Data Science",
      githubUrl: "https://github.com/seu-usuario/link-do-Dashboard"
    },
    {
      title: "Site Institucional",
      description: "Website corporativo com design moderno, otimizado para SEO e alta performance.",
      tech: ["React", "Tailwind CSS", "Vite", "SEO"],
      category: "Website",
      githubUrl: "https://github.com/seu-usuario/link-do-site-institucional"
    },
    {
      title: "App de Gerenciamento",
      description: "Aplicação web para controle de estoque e relatórios gerenciais automatizados.",
      tech: ["React", "Firebase", "Material-UI"],
      category: "Aplicação Web",
      githubUrl: "https://github.com/seu-usuario/link-do-site-app"
    },
    {
      title: "Portal de Notícias",
      description: "Sistema de publicação de conteúdo com área administrativa e sistema de comentários.",
      tech: ["React", "WordPress API", "Redux"],
      category: "Portal",
      githubUrl: "https://github.com/seu-usuario/link-do-portal-de-noticias"
    }
  ];

  return (
  <section id="portfolio" className="py-20 px-4 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfólio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Alguns dos projetos que desenvolvi, demonstrando expertise em diferentes 
          tecnologias e soluções personalizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                  {project.category}
                </span>
              </div>
              <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Projeto
                </Button>
                
                {/* AQUI ESTÁ A LÓGICA ADICIONADA */}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full flex-1 border-gray-600 text-gray-600 hover:bg-gray-50"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
                
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Interessado em ver mais projetos ou discutir uma solução personalizada?
        </p>
        <Button 
          size="lg"
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
        >
          Vamos Conversar
        </Button>
      </div>
    </div>
  </section>
  );
};

export default Portfolio;