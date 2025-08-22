import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">N'Guess Global Imports</h3>
            <p className="text-primary-foreground/80 mb-4">
              Votre partenaire d'importation en toute confiance. 
              Nous connectons la Côte d'Ivoire au monde entier.
            </p>
            <p className="text-primary-foreground/80">
              Des produits du monde, livrés chez vous en toute sérénité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('accueil');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('avis');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Avis Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/2250172334334"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                📞 +225 01 72 33 43 34
              </p>
              <p className="text-primary-foreground/80">
                ✉️ nguessglobalimports2@gmail.com
              </p>
              <p className="text-primary-foreground/80">
                📍 Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 N'Guess Global Imports. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;