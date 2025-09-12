import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Award, Globe2, Zap } from "lucide-react";

const PremiumAbout = () => {
  const achievements = [
    { icon: Users, number: "10,000+", label: "Clients satisfaits", color: "text-primary" },
    { icon: Globe2, number: "180+", label: "Pays partenaires", color: "text-secondary" },
    { icon: TrendingUp, number: "2.5M€", label: "Marchandises importées", color: "text-accent" },
    { icon: Award, number: "15+", label: "Années d'expérience", color: "text-primary" }
  ];

  const keyPoints = [
    {
      title: "Excellence Opérationnelle",
      description: "Processus optimisés et technologies de pointe pour une efficacité maximale",
      icon: Zap
    },
    {
      title: "Réseau Global Premium",
      description: "Partenariats exclusifs avec les meilleurs fournisseurs et transporteurs mondiaux",
      icon: Globe2
    },
    {
      title: "Conformité Internationale",
      description: "Expertise réglementaire et douanière dans tous les pays opérationnels",
      icon: CheckCircle
    },
    {
      title: "Service Client VIP",
      description: "Accompagnement personnalisé par des experts dédiés à votre réussite",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-lg border-primary/20 text-primary">
            À propos de nous
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Leaders Internationaux
            </span>
            <span className="block text-gray-800 text-3xl md:text-4xl font-normal mt-4">
              en Solutions Logistiques
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Depuis notre fondation, <span className="font-bold text-primary">N'Guess Global Imports</span> s'impose 
            comme le partenaire de référence pour vos importations internationales. Notre expertise multiculturelle 
            et notre réseau mondial garantissent des solutions sur mesure d'exception.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-zoom-in">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 shadow-elegant hover-lift bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${achievement.color.split('-')[1]}/10 to-${achievement.color.split('-')[1]}/20 rounded-2xl flex items-center justify-center`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Key Points */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Excellence en 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Action</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nous combinons expertise humaine et technologies avancées pour créer des solutions 
                logistiques qui dépassent vos attentes. Chaque projet est unique, chaque solution sur mesure.
              </p>
            </div>

            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex gap-6 p-6 bg-white/50 rounded-2xl border border-gray-100 hover:bg-white/80 transition-all duration-300 hover-lift">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                      <point.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Elements */}
          <div className="space-y-8 animate-zoom-in">
            {/* Premium Quote Card */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 shadow-premium">
              <CardContent className="p-10">
                <div className="text-6xl font-black mb-6 opacity-20">"</div>
                <blockquote className="text-xl font-medium leading-relaxed mb-6">
                  Notre mission est de transformer chaque défi logistique en opportunité de croissance 
                  pour nos clients, en alliant innovation technologique et excellence opérationnelle.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Direction Générale</div>
                    <div className="text-white/80">N'Guess Global Imports</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-0 shadow-elegant bg-white/80 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">ISO 9001</div>
                  <div className="text-sm text-gray-600">Qualité Certifiée</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 shadow-elegant bg-white/80 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Globe2 className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">IATA Cargo</div>
                  <div className="text-sm text-gray-600">Agent Agréé</div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0 shadow-elegant">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Rejoignez nos clients d'excellence
                </h4>
                <p className="text-gray-600 mb-6">
                  Découvrez pourquoi les plus grandes entreprises nous font confiance 
                  pour leurs opérations d'importation.
                </p>
                <Badge variant="outline" className="px-6 py-2 text-primary border-primary/20">
                  🏆 Partenaire de confiance depuis 2009
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;