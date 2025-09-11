import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap, Star } from "lucide-react";
import { useState, useEffect } from "react";

const RevolutionaryHero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Innovation", "Excellence", "Fiabilité", "Performance"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Globe, text: "Mondial", color: "from-blue-400 to-cyan-400" },
    { icon: Shield, text: "Sécurisé", color: "from-green-400 to-emerald-400" },
    { icon: Zap, text: "Rapide", color: "from-yellow-400 to-orange-400" },
    { icon: Star, text: "Premium", color: "from-purple-400 to-pink-400" }
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallbackDiv = e.currentTarget.nextElementSibling as HTMLDivElement;
            if (fallbackDiv) fallbackDiv.style.display = 'block';
          }}
        >
          <source src="https://videos.pexels.com/video-files/857195/857195-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback gradient */}
        <div 
          className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
          style={{ display: 'none' }}
        />
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading with dynamic text */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block text-white mb-4">L'importation</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                révolutionnée
              </span>
            </h1>
            
            {/* Dynamic word animation */}
            <div className="text-3xl md:text-5xl font-bold text-white/90 mb-8">
              <span>Synonyme d'</span>
              <span className="relative inline-block ml-3">
                <span 
                  key={currentWord}
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-zoom-in"
                >
                  {words[currentWord]}
                </span>
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-zoom-in">
            Importez depuis n'importe où dans le monde avec notre technologie de pointe. 
            Une expérience premium qui redéfinit les standards de l'importation internationale.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full border border-white/20 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-zoom-in">
            <Button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-110 border-0"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Commencer l'importation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="glass-effect border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-12 py-6 rounded-2xl backdrop-blur-xl hover-lift"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up">
            {[
              { number: "500+", label: "Importations réussies", icon: "🚀" },
              { number: "50+", label: "Pays couverts", icon: "🌍" },
              { number: "100%", label: "Satisfaction client", icon: "⭐" },
              { number: "24/7", label: "Support premium", icon: "💎" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-3xl border border-white/20 hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryHero;