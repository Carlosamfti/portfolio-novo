// Bibliotecas instaladas via NPM
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "sonner"; // Usaremos apenas o Sonner para notificações

// Componente de UI instalado via Shadcn
import { TooltipProvider } from "@/components/ui/tooltip";

// Seus componentes de página
import Index from "./components/pages/Index";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

// Crie o cliente do React Query
const queryClient = new QueryClient();

function App() {
  return (
    // O provider do React Query envolve tudo
    <QueryClientProvider client={queryClient}>
      {/* O provider do Tooltip envolve tudo */}
      <TooltipProvider>
        {/* O provider de Rotas */}
        <BrowserRouter>
          {/* As notificações/toasts do Sonner */}
          <Sonner richColors />

          {/* Definição das suas rotas/páginas */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;