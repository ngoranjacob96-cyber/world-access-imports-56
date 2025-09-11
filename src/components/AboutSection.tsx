import worldMapImage from "@/assets/world-map-packages.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 premium-gradient" role="main" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Votre partenaire de confiance
              </span>
              <span className="block mt-2">pour l'importation mondiale</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Chez <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">N'Guess Global Imports</span>, 
              nous révolutionnons vos achats internationaux avec une approche premium et personnalisée. 
              De l'achat à la livraison, nous transformons l'importation en une expérience fluide et sécurisée.
            </p>

            {/* Premium Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 glass-effect p-4 rounded-xl hover-lift">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-glow"></div>
                <span className="text-foreground font-semibold">Expertise internationale premium</span>
              </div>
              <div className="flex items-center gap-4 glass-effect p-4 rounded-xl hover-lift">
                <div className="w-4 h-4 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse-glow"></div>
                <span className="text-foreground font-semibold">Processus ultra-sécurisé</span>
              </div>
              <div className="flex items-center gap-4 glass-effect p-4 rounded-xl hover-lift">
                <div className="w-4 h-4 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse-glow"></div>
                <span className="text-foreground font-semibold">Suivi temps réel 24/7</span>
              </div>
              <div className="flex items-center gap-4 glass-effect p-4 rounded-xl hover-lift">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-glow"></div>
                <span className="text-foreground font-semibold">Support VIP personnalisé</span>
              </div>
            </div>
          </div>

          {/* Premium Image */}
          <div className="lg:order-first animate-zoom-in">
            <div className="relative group">
              <img 
                src={worldMapImage} 
                alt="Carte du monde avec colis d'importation internationale" 
                className="w-full h-auto rounded-2xl shadow-premium hover-lift group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-secondary/10 to-accent/20 rounded-2xl group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 border-2 border-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-effect px-6 py-3 rounded-full border border-accent/30 animate-float">
                <span className="text-sm font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  🌍 Mondial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;