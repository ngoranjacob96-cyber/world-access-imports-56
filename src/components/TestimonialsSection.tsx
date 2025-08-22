import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialImage from "@/assets/testimonial-whatsapp.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      message: "Colis bien reçu, cliente satisfaite. Merciiii à N'Guess Global 🙏",
      client: "Aïcha K.",
      rating: 5,
      type: "WhatsApp"
    },
    {
      message: "Cliente satisfaite 😍 – Bien reçu mes colis 👍🥰",
      client: "Fatou D.",
      rating: 5,
      type: "WhatsApp"
    },
    {
      message: "Super bonne nouvelle ! N'Guess Global, la référence 👌👍",
      client: "Mohamed S.",
      rating: 5,
      type: "WhatsApp"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="avis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages authentiques de nos clients satisfaits 
            qui ont choisi N'Guess Global Imports.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* WhatsApp Style Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {testimonial.type}
                  </span>
                </div>

                {/* Message */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                  <p className="text-foreground italic leading-relaxed">
                    "{testimonial.message}"
                  </p>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Client */}
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {testimonial.client}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Client vérifié
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp Screenshot */}
        <div className="text-center">
          <div className="inline-block p-4 bg-white rounded-lg shadow-elegant">
            <img 
              src={testimonialImage} 
              alt="Captures d'écran des témoignages WhatsApp" 
              className="w-full max-w-sm h-auto rounded-lg"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Captures d'écran authentiques de nos échanges clients
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-accent p-8 rounded-lg shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Rejoignez nos clients satisfaits !
            </h3>
            <p className="text-muted-foreground mb-6">
              Faites comme eux, faites confiance à N'Guess Global Imports 
              pour vos importations en toute sérénité.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-cta font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
            >
              Commencer mon importation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;