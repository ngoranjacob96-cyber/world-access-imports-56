import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-import.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20" role="banner">
      {/* Background Image with Water Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Commerce international et importation" 
          className="w-full h-full object-cover"
        />
        
        {/* Water animation overlay */}
        <div className="absolute inset-0 water-animation opacity-30"></div>
        <div className="absolute inset-0 water-animation-2 opacity-20"></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Votre passerelle vers le monde –{" "}
            <span className="text-primary-light">Importez sans stress</span>, 
            nous gérons tout !
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Des produits du monde, livrés chez vous en toute confiance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto"
            >
              Importer maintenant
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto"
            >
              En savoir plus
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">500+</div>
              <div className="text-gray-300">Colis importés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">100%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">24/7</div>
              <div className="text-gray-300">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;