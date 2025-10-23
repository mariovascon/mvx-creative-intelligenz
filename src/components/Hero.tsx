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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Inteligência Criativa
          <br />
          <span className="text-glow bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            para um Novo Mundo.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Construímos marcas, sites, aplicativos e sistemas automatizados que unem design, emoção e tecnologia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-foreground font-medium px-8 py-6 text-lg group bg-glow"
          >
            Inicie seu projeto
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg group"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Fale com a MVX no WhatsApp
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
