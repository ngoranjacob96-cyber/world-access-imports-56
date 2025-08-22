import worldTradeImage from "@/assets/world-trade.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Votre partenaire de confiance pour l'importation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chez <span className="font-semibold text-primary">N'Guess Global Imports</span>, 
              nous simplifions vos achats à l'international et assurons l'importation 
              sécurisée de vos produits en Côte d'Ivoire.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Que vous soyez entreprise ou particulier, nous vous accompagnons 
              du devis à la livraison avec un service personnalisé et transparent.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Expertise internationale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Processus sécurisé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Suivi transparent</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Support dédié</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={worldTradeImage} 
                alt="Commerce mondial et importation" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;