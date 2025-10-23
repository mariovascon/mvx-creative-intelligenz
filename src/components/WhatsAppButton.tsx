import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 p-0 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
      asChild
    >
      <a href="https://wa.me/5511982742665?text=Olá!%20Vim%20do%20site%20da%20MVX%20Studios" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
