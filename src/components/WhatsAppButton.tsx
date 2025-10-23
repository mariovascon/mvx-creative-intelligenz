import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 p-0 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
