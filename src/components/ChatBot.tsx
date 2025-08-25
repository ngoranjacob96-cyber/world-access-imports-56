import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // FAQ responses
  const faqResponses = [
    {
      keywords: ["qui", "entreprise", "service", "proposez", "ngues"],
      response: "N'Guess Global Imports est votre partenaire de confiance pour l'achat et l'importation de produits depuis l'étranger vers la Côte d'Ivoire. Nous aidons entreprises et particuliers à commander, transporter et recevoir leurs produits en toute sécurité."
    },
    {
      keywords: ["comment", "fonctionne", "service", "importation"],
      response: "C'est simple ! Vous nous communiquez le produit que vous souhaitez acheter, nous nous occupons de l'achat (si besoin), du transport, du dédouanement et de la livraison jusqu'à Abidjan ou à votre domicile selon l'option choisie."
    },
    {
      keywords: ["produits", "importer", "types"],
      response: "Presque tout ! Vêtements, accessoires, cosmétiques, électronique, pièces détachées, etc. Nous respectons toutefois les réglementations douanières et ne traitons pas les produits interdits ou illégaux."
    },
    {
      keywords: ["temps", "livraison", "délai", "combien"],
      response: "Cela dépend du pays d'origine et du mode de transport choisi (aérien ou maritime). En général, comptez entre 7 et 15 jours pour le transport aérien, et 25 à 45 jours pour le transport maritime."
    },
    {
      keywords: ["carte", "bancaire", "acheter", "paiement"],
      response: "Absolument ! Nous faisons l'achat à votre place auprès du fournisseur et vous envoyons la preuve d'achat. Vous n'avez donc pas besoin de carte bancaire internationale."
    },
    {
      keywords: ["tarifs", "prix", "coût", "combien"],
      response: "Nos tarifs varient selon le poids, le volume et la destination. Nous vous proposons un devis transparent avant toute opération, sans frais cachés."
    },
    {
      keywords: ["sécurité", "argent", "confiance", "sûr"],
      response: "Votre confiance est notre priorité. Nous vous fournissons un devis clair, une preuve d'achat et un suivi complet de votre commande. De plus, nous avons déjà accompagné de nombreux clients satisfaits."
    },
    {
      keywords: ["endommagé", "problème", "conforme"],
      response: "Nous faisons tout pour éviter cela. Si le problème vient du transport, nous proposons des solutions adaptées. Si c'est lié au fournisseur, nous vous assistons dans la réclamation."
    },
    {
      keywords: ["interdit", "ne pouvez pas", "impossible"],
      response: "Oui, certains produits interdits par la loi ou nécessitant des autorisations spéciales (armes, produits chimiques dangereux, etc.). Pour le reste, nous vous conseillons avant toute commande."
    },
    {
      keywords: ["livraison", "domicile", "récupération"],
      response: "Oui ! Nous proposons la livraison à domicile ou la récupération en point relais à Abidjan selon votre choix."
    }
  ];

  const defaultResponse = "Je vous remercie pour votre question ! Pour une réponse personnalisée, n'hésitez pas à nous contacter directement au +225 0172334334 ou via WhatsApp. Notre équipe sera ravie de vous aider ! 😊";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Message de bienvenue
      const welcomeMessage: Message = {
        id: 1,
        text: "Bonjour ! 👋 Je suis l'assistant virtuel de N'Guess Global Imports. Comment puis-je vous aider aujourd'hui ?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const findResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const faq of faqResponses) {
      if (faq.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
        return faq.response;
      }
    }
    
    return defaultResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simuler un délai de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">Assistant N'Guess</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 rounded-full w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        size="icon"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </Button>
    </>
  );
};

export default ChatBot;