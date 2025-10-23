import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-glow-secondary opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Vamos criar algo{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            inteligente juntos.
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transforme sua visão em realidade digital com a MVX Studios
        </p>

        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground font-medium px-10 py-7 text-lg group animate-pulse-glow"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Conversar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
