import { Clock, CheckCircle, Users, Star } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapidité",
      description: "Délais d'importation optimisés grâce à notre réseau de partenaires internationaux."
    },
    {
      icon: CheckCircle,
      title: "Fiabilité",
      description: "100% de nos colis arrivent à destination en parfait état depuis notre création."
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un conseiller dédié vous accompagne personnellement tout au long du processus."
    },
    {
      icon: Star,
      title: "Preuves de satisfaction",
      description: "Des centaines de clients satisfaits témoignent de la qualité de nos services."
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avantages qui font de N'Guess Global Imports 
            votre partenaire de choix pour l'importation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-lg shadow-elegant">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Importations réussies</div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-elegant">
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Pays partenaires</div>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-elegant">
            <div className="text-4xl font-bold text-primary mb-2">48h</div>
            <div className="text-muted-foreground">Délai moyen de réponse</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;