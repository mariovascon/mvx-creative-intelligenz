import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    description: "Plataforma completa com IA para recomendações personalizadas",
  },
  {
    title: "App de Produtividade",
    category: "Design de Produto",
    description: "Interface minimalista com automações inteligentes",
  },
  {
    title: "Sistema de CRM",
    category: "Automação & IA",
    description: "WhatsApp integrado com análise preditiva de vendas",
  },
  {
    title: "Identidade Visual Tech",
    category: "Branding",
    description: "Marca completa para startup de tecnologia",
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
              
              {/* Image placeholder with gradient */}
              <div className="relative h-64 bg-gradient-to-br from-surface to-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-700" />
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
