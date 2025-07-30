import {
  Linkedin,
  Instagram,
  Github,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#services", label: "Serviços" },
    { href: "#about", label: "Sobre" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contact", label: "Contato" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/vectorleaptech",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vectorleap.tech",
    },

    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/VectorLeap",
    },

    {
      name: "Whastapp",
      icon: MessageCircle,
      url: "https://wa.me/5532999568858",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-verde-leap text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Coluna 1: Marca e Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold">VectorLeap</h3>
            <p className="text-gray-200">Seu vetor de crescimento digital.</p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegue</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="font-bold text-lg mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <social.icon className="h-7 w-7 hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="bg-black bg-opacity-20">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-300">
          © {currentYear} VectorLeap. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
