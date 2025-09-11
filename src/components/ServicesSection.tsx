import { ShoppingCart, Shield, Eye, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Achat à l'international",
      description: "Nous trouvons et achetons vos produits depuis n'importe quel pays du monde avec les meilleurs prix négociés."
    },
    {
      icon: Shield,
      title: "Importation sécurisée",
      description: "Gestion complète des formalités douanières et administratives pour une importation en toute légalité."
    },
    {
      icon: Eye,
      title: "Suivi en temps réel",
      description: "Suivez votre commande à chaque étape grâce à notre système de tracking avancé et nos mises à jour régulières."
    },
    {
      icon: Truck,
      title: "Livraison garantie",
      description: "Livraison sécurisée jusqu'à votre domicile ou bureau en Côte d'Ivoire avec assurance incluse."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour faciliter vos importations 
            et vous offrir une expérience sans stress.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-premium hover-lift glass-effect animate-zoom-in group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 hover-glow group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {service.description}
                </p>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Prêt à commencer votre importation ?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-cta font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
          >
            Obtenir un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;