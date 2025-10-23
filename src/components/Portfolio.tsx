import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    description: "Plataforma completa com IA para recomendações personalizadas",
    image: portfolio1,
  },
  {
    title: "App de Produtividade",
    category: "Design de Produto",
    description: "Interface minimalista com automações inteligentes",
    image: portfolio2,
  },
  {
    title: "Sistema de CRM",
    category: "Automação & IA",
    description: "WhatsApp integrado com análise preditiva de vendas",
    image: portfolio3,
  },
  {
    title: "Identidade Visual Tech",
    category: "Branding",
    description: "Marca completa para startup de tecnologia",
    image: portfolio4,
  },
  {
    title: "Dashboard Analytics",
    category: "Data Visualization",
    description: "Painel de análise de dados em tempo real",
    image: portfolio5,
  },
  {
    title: "Assistente Virtual",
    category: "AI Integration",
    description: "Chatbot inteligente para atendimento",
    image: portfolio6,
  },
];

const Portfolio = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Portfólio <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Interativo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos que transformam visões em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="relative p-8 space-y-3">
                <div className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                  {project.category}
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
