import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              N'Guess Global Imports
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('avis')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Avis Clients
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              onClick={() => scrollToSection('contact')}
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('avis')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Avis Clients
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                variant="cta" 
                className="w-full mt-4"
                onClick={() => scrollToSection('contact')}
              >
                Demander un devis
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;