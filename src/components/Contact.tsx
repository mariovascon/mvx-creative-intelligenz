import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-glow-secondary opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in-up">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight italic">
          "Enquanto você vive,{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow">
            a gente automatiza."
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Vamos conversar e criar algo extraordinário juntos
        </p>

        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground font-medium px-10 py-7 text-lg group animate-pulse-glow"
            asChild
          >
            <a href="https://wa.me/5511982742665?text=Olá!%20Vamos%20criar%20algo%20extraordinário%20juntos!" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Vamos conversar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
