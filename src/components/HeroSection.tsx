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
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="block mb-2">Votre passerelle vers</span>
              <span className="block bg-gradient-to-r from-white via-primary-light to-accent-foreground bg-clip-text text-transparent animate-gradient">
                le monde entier
              </span>
              <span className="block text-3xl md:text-5xl mt-4 text-gray-200 font-medium">
                Importez sans stress, nous gérons tout !
              </span>
            </h1>
          </div>
          
          <div className="animate-zoom-in">
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Des produits du monde entier, livrés chez vous en toute confiance avec un service premium et personnalisé
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
            <Button 
              variant="cta" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-5 h-auto hover-glow text-white font-bold border-2 border-accent shadow-cta"
            >
              ✨ Importer maintenant
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-5 h-auto glass-effect hover-lift"
            >
              📋 Demander un devis
            </Button>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12">
            <div className="text-center glass-effect rounded-2xl p-8 hover-lift animate-float">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-gray-200 text-lg font-medium">Colis importés avec succès</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-8 hover-lift animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-gray-200 text-lg font-medium">Clients satisfaits garantis</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-8 hover-lift animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-gray-200 text-lg font-medium">Support premium dédié</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;