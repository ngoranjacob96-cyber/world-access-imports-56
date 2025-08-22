import worldMapImage from "@/assets/world-map-packages.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 section-bg" role="main" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Votre partenaire de confiance pour l'importation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chez <span className="font-semibold text-primary">N'Guess Global Imports</span>, 
              nous simplifions vos achats à l'international et assurons l'importation 
              sécurisée de vos produits en Côte d'Ivoire. Que vous soyez entreprise ou particulier, 
              nous vous accompagnons du devis à la livraison.
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
                src={worldMapImage} 
                alt="Carte du monde avec colis d'importation internationale" 
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