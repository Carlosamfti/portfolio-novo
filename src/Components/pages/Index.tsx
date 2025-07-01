import { ArrowRight, Code, Database, Users, Zap } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import Header from "@/Components/pages/Header";
import Hero from "@/Components/pages/Hero";
import Services from "@/Components/pages/Services";
import About from "@/Components/pages/About";
import Portfolio from "@/Components/pages/Portfolio";
import Contact from "@/Components/pages/Contact";
import Footer from "@/Components/pages/Footer";

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