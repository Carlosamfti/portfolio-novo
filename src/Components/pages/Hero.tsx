import { ArrowRight, Code, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Carlos Augusto
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Especialista em TI & Construção de Sites
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Transformo ideias em soluções digitais. Com mais de 15 anos de experiência em tecnologia 
              e formação em Sistemas de Informação, ofereço consultoria em TI e desenvolvimento de sites profissionais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Fale Comigo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Ver Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Desenvolvimento</h3>
              <p className="text-gray-600">Sites e sistemas personalizados</p>
            </div>
            <div className="text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ciência de Dados</h3>
              <p className="text-gray-600">Análise e insights para seu negócio</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultoria</h3>
              <p className="text-gray-600">Suporte técnico especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;