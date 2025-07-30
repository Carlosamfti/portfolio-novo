import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Nossas cores do Guia da Marca ---
  const colors = {
    azulVector: "#0D2C54",
    cinzaNeutro: "#f5f5ff", // Um cinza levemente azulado para um toque extra
    textoPrincipal: "#333333",
    verdeLeap: "#00A878",
  };

  // --- 1. Centralizamos os links de navegação em um só lugar ---
  const navLinks = [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "about", label: "Sobre" },
    { id: "portfolio", label: "Portfólio" },
    { id: "contact", label: "Contato" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Fecha o menu mobile após o clique
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-cinza-neutro">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a
          href="#home" // Adicionamos o href para semântica
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-bold cursor-pointer"
          style={{ color: colors.azulVector }}
        >
          VectorLeap
        </a>

        {/* --- 4. Menus (Desktop e Mobile) atualizados com as novas cores --- */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id} // Adicionamos o href para semântica
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="font-semibold text-texto-principal hover:text-verde-leap transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: colors.azulVector }} />
          ) : (
            <Menu size={24} style={{ color: colors.azulVector }} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav
          className="md:hidden border-t"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        >
          <div
            className="flex flex-col items-center py-4 space-y-4"
            style={{ backgroundColor: colors.cinzaNeutro }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-semibold text-lg"
                style={{ color: colors.textoPrincipal }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
