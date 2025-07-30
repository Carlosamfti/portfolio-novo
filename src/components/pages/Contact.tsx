import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Github,
  Facebook,
  Layers,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast.success("Mensagem enviada!", {
      description: "Obrigado pelo contato. Retornararemos em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- Array para os links sociais, como sugerido ---
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

  return (
    <section id="contact" className="py-20 px-4 bg-cinza-neutro">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-azul-vector mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-texto-principal max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade digital? Vamos
            conversar sobre seu próximo projeto!
          </p>
        </div>

        {/* Informaçãoes de contato */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start">
              <Mail className="h-8 w-8 text-verde-leap mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-azul-vector">Email</h3>
                <p className="text-lg text-texto-principal">
                  contato@vectorleap.com.br
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-8 w-8 text-verde-leap mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-azul-vector">WhatsApp</h3>
                <a
                  href="https://wa.me/5532999568858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-texto-principal hover:text-verde-leap transition-colors"
                >
                  +55 32 99956-8858
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-8 w-8 text-verde-leap mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-azul-vector">
                  Localização
                </h3>
                <p className="text-lg text-texto-principal">
                  Juiz de Fora, MG, Brasil
                </p>
                <p className="text-base text-gray-500">
                  (Atendimento remoto para todo o país)
                </p>
              </div>
            </div>
            <div className="pt-6 border-t">
              <h3 className="text-xl font-bold text-azul-vector mb-4">
                Conecte-se
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <social.icon className="h-8 w-8 text-texto-principal hover:text-verde-leap transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-azul-vector">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-texto-principal mb-2"
                      >
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-texto-principal mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-texto-principal mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-verde-leap hover:bg-green-700 text-white font-bold text-lg h-14"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
