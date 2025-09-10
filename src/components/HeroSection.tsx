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
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={heroImage}
          onError={(e) => {
            // Si la vidéo échoue, on cache la vidéo et affiche l'image fallback
            e.currentTarget.style.display = 'none';
            const fallbackImg = e.currentTarget.nextElementSibling as HTMLImageElement;
            if (fallbackImg) fallbackImg.style.display = 'block';
          }}
        >
          <source src="https://videos.pexels.com/video-files/857195/857195-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image */}
        <img 
          src={heroImage} 
          alt="Commerce international et importation" 
          className="w-full h-full object-cover"
          style={{ display: 'none' }}
        />
        
        {/* Water animation overlay pour améliorer l'effet */}
        <div className="absolute inset-0 water-animation opacity-20"></div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
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