import { TrendingUp, Palette, Smartphone, Bot, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Criação de Negócio Online",
    description: "Transformamos ideias em negócios digitais lucrativos, com estratégia, tecnologia e design.",
    image: service1,
  },
  {
    icon: Palette,
    title: "Criação de Marcas",
    description: "Marcas memoráveis que comunicam propósito e conectam emocionalmente com seu público.",
    image: service2,
  },
  {
    icon: Smartphone,
    title: "Aplicativos",
    description: "Aplicativos mobile e web personalizados que resolvem problemas reais com tecnologia de ponta.",
    image: service3,
  },
  {
    icon: Bot,
    title: "Automação de Atendimento com IA",
    description: "Assistentes inteligentes que automatizam conversas e transformam atendimento em experiência.",
    image: service4,
  },
  {
    icon: Users,
    title: "Consultoria",
    description: "Consultoria estratégica em tecnologia e IA para otimizar processos e decisões de negócio.",
    image: service5,
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
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:bg-glow cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
