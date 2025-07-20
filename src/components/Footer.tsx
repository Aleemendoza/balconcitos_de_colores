import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone,
  Mail,
  Heart,
  Mountain
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5493884000000?text=Hola! Me interesa conocer más sobre Balconcitos de Colores", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/balconcitosdecolores", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://facebook.com/balconcitosdecolores", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-sunset text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Balconcitos de Colores" className="h-12 w-12" />
              <div>
                <h3 className="font-heading font-bold text-xl">Balconcitos de Colores</h3>
                <p className="text-primary-foreground/80">Hospedaje familiar en Jujuy</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Un refugio de tranquilidad en el corazón de la Quebrada de Humahuaca. 
              Donde cada atardecer pinta nuevos colores en las montañas y cada momento 
              se convierte en un recuerdo inolvidable.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleInstagramClick}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleFacebookClick}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
              <Mountain className="h-5 w-5 mr-2" />
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("accommodations")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Alojamientos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("location")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ubicación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("reservations")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Reservar
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  Maimará, Quebrada de Humahuaca<br />
                  Jujuy, Argentina
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  +54 9 388 400-0000
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  info@balconcitosdecolores.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-8 border-t border-primary-foreground/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-semibold text-xl mb-3">
            ¿Listo para vivir la experiencia?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Reservá tu estadía en Balconcitos de Colores y descubrí la magia 
            de la Quebrada de Humahuaca desde nuestro refugio familiar.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("reservations")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg px-8 py-3"
          >
            Hacer Reserva Ahora
          </Button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary-foreground/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Balconcitos de Colores. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/70 text-sm flex items-center">
              Hecho con 
              <Heart className="h-4 w-4 mx-1 fill-current text-red-300" /> 
              por 
              <a 
                href="https://altiorasoftware.com.ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 font-medium hover:text-primary-foreground transition-colors"
              >
                Altiora Software
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;