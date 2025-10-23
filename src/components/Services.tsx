import { Globe, Palette, Smartphone, MessageSquare, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Sites e Landing Pages Inteligentes",
    description: "Experiências web que convertem visitantes em clientes, com design impecável e performance otimizada.",
  },
  {
    icon: Palette,
    title: "Branding e Identidade Visual",
    description: "Marcas memoráveis que comunicam propósito e conectam emocionalmente com seu público.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos e Soluções Digitais",
    description: "Produtos digitais personalizados que resolvem problemas reais com tecnologia de ponta.",
  },
  {
    icon: MessageSquare,
    title: "Automação de Atendimento no WhatsApp",
    description: "Fluxos inteligentes que automatizam conversas e transformam atendimento em experiência.",
  },
  {
    icon: Sparkles,
    title: "Consultoria em IA e Fluxos Inteligentes",
    description: "Implementação estratégica de inteligência artificial para otimizar processos e decisões de negócio.",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Serviços <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Principais</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:bg-glow cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
