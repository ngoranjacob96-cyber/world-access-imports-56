import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "2250172334334"; // Format international sans +
  const message = "Bonjour ! Je viens de votre site internet et j'aimerais en savoir plus sur vos services d'importation.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;