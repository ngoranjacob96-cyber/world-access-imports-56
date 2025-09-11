import { ShoppingCart, Shield, Eye, Truck, Globe, Zap, Star, Award } from "lucide-react";
import { useState } from "react";

const UltraModernServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: ShoppingCart,
      title: "Achat International Premium",
      description: "Intelligence artificielle pour identifier les meilleurs fournisseurs mondiaux. Négociation automatique des prix optimaux.",
      features: ["IA de sourcing", "Négociation automatique", "Vérification qualité"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Shield,
      title: "Sécurité Blockchain",
      description: "Chaque transaction sécurisée par blockchain. Traçabilité complète et assurance intégrée pour une tranquillité absolue.",
      features: ["Blockchain security", "Traçabilité totale", "Assurance incluse"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Eye,
      title: "Tracking Satellitaire",
      description: "Suivi GPS en temps réel par satellite. Notifications push instantanées à chaque étape de votre commande.",
      features: ["GPS satellitaire", "Notifications temps réel", "Prédictions IA"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Truck,
      title: "Livraison Drone & Express",
      description: "Livraison par drone pour les zones urbaines. Service express 24h garanti avec géolocalisation précise.",
      features: ["Livraison drone", "Express 24h", "Géolocalisation"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ];

  const premiumFeatures = [
    {
      icon: Globe,
      title: "Réseau Mondial",
      description: "180+ pays connectés",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Zap,
      title: "Ultra Rapide",
      description: "Livraison en 48h",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Concierge 24/7/365",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Award,
      title: "Certification ISO",
      description: "Qualité certifiée",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
            <span className="block text-white/90 text-3xl md:text-5xl font-normal mt-4">
              Nouvelle Génération
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos services révolutionnaires qui combinent intelligence artificielle, 
            blockchain et technologies de pointe pour une expérience d'importation inégalée.
          </p>
        </div>

        {/* Premium features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-zoom-in">
          {premiumFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-2xl border border-white/10 hover-lift text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl border border-white/10 transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredService === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              }`}
              style={{
                background: hoveredService === index 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.bgColor}`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${service.color} p-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-400 group-hover:text-white/80 transition-colors text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-l ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl`}></div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-12 rounded-3xl border border-white/20 animate-slide-up">
          <h3 className="text-3xl font-bold text-white mb-4">
            Prêt pour l'expérience ultime ?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'entreprises qui ont choisi l'excellence avec nos services premium.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            🚀 Démarrer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltraModernServices;