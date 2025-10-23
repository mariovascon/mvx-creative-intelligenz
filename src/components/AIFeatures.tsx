import { Brain, FileText, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Assistentes personalizados com ChatGPT",
    description: "IA treinada especificamente para o seu negócio",
  },
  {
    icon: FileText,
    title: "Criação automática de conteúdo",
    description: "Textos, imagens e vídeos gerados com inteligência",
  },
  {
    icon: BarChart3,
    title: "Análise de dados e insights automatizados",
    description: "Decisões baseadas em dados em tempo real",
  },
  {
    icon: Zap,
    title: "Fluxos de atendimento inteligentes",
    description: "WhatsApp e e-mail automatizados com contexto",
  },
];

const AIFeatures = () => {
  return (
    <section className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Powered by AI</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Soluções com <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Inteligência Artificial</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto você vive, a gente automatiza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-2xl bg-card/50 border border-border hover:border-secondary/50 transition-all duration-300 hover:bg-glow-secondary group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-secondary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="currentColor"/>
    <path d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z" fill="currentColor"/>
    <path d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z" fill="currentColor"/>
  </svg>
);

export default AIFeatures;
