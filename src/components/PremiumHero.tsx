import { Button } from "@/components/ui/button";
import { Globe, Truck, Shield, Star } from "lucide-react";

const PremiumHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden" role="banner">
      {/* Premium Background with Corporate Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-light/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-white">
              <div className="animate-slide-up">
                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
                  <span className="block mb-4 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent">
                    Logistics
                  </span>
                  <span className="block text-4xl md:text-6xl font-normal text-white/90">
                    Sans Frontières
                  </span>
                </h1>
              </div>
              
              <div className="animate-zoom-in">
                <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl leading-relaxed font-light">
                  L'excellence internationale à votre service. 
                  <span className="font-semibold text-accent-light">N'Guess Global Imports</span> révolutionne 
                  vos achats mondiaux avec une expertise premium et une technologie de pointe.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-up">
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={scrollToContact}
                  className="text-lg px-12 py-6 h-auto bg-white text-primary hover:bg-white/90 font-bold shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
                >
                  Commencer maintenant
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToServices}
                  className="text-lg px-12 py-6 h-auto border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md font-semibold"
                >
                  Découvrir nos services
                </Button>
              </div>

              {/* Key Features Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                    <Globe className="w-8 h-8 text-accent-light" />
                  </div>
                  <p className="text-sm text-white/80 font-medium">Mondial</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                    <Truck className="w-8 h-8 text-accent-light" />
                  </div>
                  <p className="text-sm text-white/80 font-medium">Express</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                    <Shield className="w-8 h-8 text-accent-light" />
                  </div>
                  <p className="text-sm text-white/80 font-medium">Sécurisé</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                    <Star className="w-8 h-8 text-accent-light" />
                  </div>
                  <p className="text-sm text-white/80 font-medium">Premium</p>
                </div>
              </div>
            </div>

            {/* Stats & Visual Elements */}
            <div className="space-y-8">
              {/* Premium Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift">
                  <div className="text-4xl font-black text-accent-light mb-2">180+</div>
                  <div className="text-white/90 font-medium">Pays connectés</div>
                  <div className="text-white/70 text-sm mt-1">Réseau mondial premium</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift">
                  <div className="text-4xl font-black text-white mb-2">99.8%</div>
                  <div className="text-white/90 font-medium">Taux de réussite</div>
                  <div className="text-white/70 text-sm mt-1">Livraisons garanties</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift">
                  <div className="text-4xl font-black text-accent-light mb-2">24/7</div>
                  <div className="text-white/90 font-medium">Support VIP</div>
                  <div className="text-white/70 text-sm mt-1">Assistance premium</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift">
                  <div className="text-4xl font-black text-white mb-2">48h</div>
                  <div className="text-white/90 font-medium">Livraison express</div>
                  <div className="text-white/70 text-sm mt-1">Service ultra-rapide</div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-white/15 to-accent/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Certification ISO 9001</h4>
                    <p className="text-white/80 text-sm">Qualité internationale certifiée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;