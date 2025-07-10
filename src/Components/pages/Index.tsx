import { ArrowRight, Code, Database, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import Services from "@/components/pages/Services";
import About from "@/components/pages/About";
import Portfolio from "@/components/pages/Portfolio";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;