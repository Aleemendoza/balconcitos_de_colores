import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5493884000000?text=Hola! Me interesa conocer más sobre Balconcitos de Colores", "_blank");
  };

  return (
    <motion.header 
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-card"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} alt="Balconcitos de Colores" className="h-10 w-10" />
            <div>
              <h1 className="font-heading font-semibold text-lg text-foreground">
                Balconcitos de Colores
              </h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                Maimará, Jujuy
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("accommodations")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Alojamientos
            </button>
            <button 
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection("reservations")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reservar
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Contacto</span>
            </Button>
            <Button
              onClick={() => scrollToSection("reservations")}
              className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-warm"
            >
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;