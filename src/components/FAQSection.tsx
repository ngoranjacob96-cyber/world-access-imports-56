import { HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qui est N'Guess Global Imports et quels services proposez-vous ?",
      answer: "N'Guess Global Imports est votre partenaire de confiance pour l'achat et l'importation de produits depuis l'étranger vers la Côte d'Ivoire. Nous aidons entreprises et particuliers à commander, transporter et recevoir leurs produits en toute sécurité."
    },
    {
      question: "Comment fonctionne votre service d'importation ?",
      answer: "C'est simple ! Vous nous communiquez le produit que vous souhaitez acheter, nous nous occupons de l'achat (si besoin), du transport, du dédouanement et de la livraison jusqu'à Abidjan ou à votre domicile selon l'option choisie."
    },
    {
      question: "Quels types de produits puis-je importer avec vous ?",
      answer: "Presque tout ! Vêtements, accessoires, cosmétiques, électronique, pièces détachées, etc. Nous respectons toutefois les réglementations douanières et ne traitons pas les produits interdits ou illégaux."
    },
    {
      question: "Combien de temps prend la livraison depuis l'étranger ?",
      answer: "Cela dépend du pays d'origine et du mode de transport choisi (aérien ou maritime). En général, comptez entre 7 et 15 jours pour le transport aérien, et 25 à 45 jours pour le transport maritime."
    },
    {
      question: "Pouvez-vous acheter pour moi si je n'ai pas de carte bancaire internationale ?",
      answer: "Absolument ! Nous faisons l'achat à votre place auprès du fournisseur et vous envoyons la preuve d'achat. Vous n'avez donc pas besoin de carte bancaire internationale."
    },
    {
      question: "Quels sont vos tarifs pour l'importation ?",
      answer: "Nos tarifs varient selon le poids, le volume et la destination. Nous vous proposons un devis transparent avant toute opération, sans frais cachés."
    },
    {
      question: "Comment puis-je être sûr que mon argent est en sécurité ?",
      answer: "Votre confiance est notre priorité. Nous vous fournissons un devis clair, une preuve d'achat et un suivi complet de votre commande. De plus, nous avons déjà accompagné de nombreux clients satisfaits (voir section Témoignages)."
    },
    {
      question: "Que se passe-t-il si mon produit arrive endommagé ou non conforme ?",
      answer: "Nous faisons tout pour éviter cela. Si le problème vient du transport, nous proposons des solutions adaptées. Si c'est lié au fournisseur, nous vous assistons dans la réclamation."
    },
    {
      question: "Y a-t-il des produits que vous ne pouvez pas importer ?",
      answer: "Oui, certains produits interdits par la loi ou nécessitant des autorisations spéciales (armes, produits chimiques dangereux, etc.). Pour le reste, nous vous conseillons avant toute commande."
    },
    {
      question: "Est-ce que vous livrez directement à domicile ?",
      answer: "Oui ! Nous proposons la livraison à domicile ou la récupération en point relais à Abidjan selon votre choix."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 section-bg" role="region" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Foire Aux Questions – Tout ce que vous devez savoir avant d'importer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez des questions ? Nous avons les réponses !
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-elegant border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/50 transition-colors">
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <span className="font-semibold text-foreground leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="flex items-start gap-4 ml-12">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-elegant p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Contactez-nous dès maintenant via WhatsApp ou par téléphone pour obtenir une assistance rapide.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4 h-auto"
          >
            Nous contacter maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;