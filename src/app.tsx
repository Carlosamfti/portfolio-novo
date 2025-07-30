// Importando

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

import Header from "./components/pages/Header";
import HeroSection from "./components/pages/Hero";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    // O provider do React Query envolve tudo
    <QueryClientProvider client={queryClient}>
      {/* O provider do Tooltip envolve tudo */}
      <TooltipProvider>
        {/* O Toaster do Sonner para as notificações */}
        <Toaster richColors />

        <div>
          <Header />
          <main>
            <HeroSection />
            <Services />
            <About />
            <Portfolio />
            <Contact />
          </main>
          <Footer /> {/* <-- 2. Adicione o Footer no final */}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
