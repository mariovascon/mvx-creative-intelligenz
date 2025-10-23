import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina Mendes",
    role: "CEO, TechFlow",
    content: "A MVX não só criou nosso site — ela transformou nossa presença digital em um sistema inteligente.",
  },
  {
    name: "Rafael Costa",
    role: "Fundador, StartupX",
    content: "Design impecável e automação que realmente funciona. O ROI foi imediato.",
  },
  {
    name: "Ana Paula Silva",
    role: "Diretora de Marketing, Innovate",
    content: "Profissionalismo e criatividade em cada detalhe. Superou todas as expectativas.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Depoimentos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 space-y-6 hover:border-primary/50 transition-all duration-300 hover:bg-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
