import { Code, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carlos Augusto</h3>
            <p className="text-gray-300 mb-4">
              Especialista em TI e Desenvolvimento Web, transformando ideias em soluções digitais inovadoras.
            </p>
            <div className="flex items-center text-gray-300">
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm">Desenvolvido com tecnologias modernas</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Desenvolvimento de Sites</li>
              <li>Sistemas Personalizados</li>
              <li>Consultoria em TI</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>carlos.augusto@email.com</li>
              <li>(11) 99999-9999</li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center text-gray-300">
            <span>Feito com</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 fill-current" />
            <span>por Carlos Augusto © 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;