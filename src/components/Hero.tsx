import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8 animate-fade-in-up">
        {/* Logo MVX */}
        <div className="mb-8 animate-float">
          <div className="text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block bg-glow">
            MVX
          </div>
          <div className="text-sm md:text-base text-muted-foreground mt-2 tracking-wider">
            STUDIOS — INTELIGÊNCIA CRIATIVA
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Criamos o futuro das marcas
          <br />
          <span className="text-glow bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            com Inteligência Criativa.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Unimos design, automação e emoção humana em soluções digitais que pensam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-foreground font-medium px-8 py-6 text-lg group bg-glow animate-pulse-glow"
            asChild
          >
            <a href="https://wa.me/5511982742665?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20com%20a%20MVX%20Studios" target="_blank" rel="noopener noreferrer">
              Comece seu projeto
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg group transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/5511982742665?text=Olá!%20Vim%20do%20site%20da%20MVX%20Studios" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com a MVX no WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
