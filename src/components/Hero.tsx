import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-balconies.jpg";
import cerroImage from "@/assets/cerro-siete-colores.jpg";

const Hero = () => {
  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <img 
            src={heroImage} 
            alt="Balconcitos de Colores vista principal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-warm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">Hospedaje Familiar en la Quebrada de Humahuaca</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Descubrí los
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Cerros de Colores
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Hospedaje familiar en Maimará, Jujuy. Dos unidades confortables rodeadas de cerros multicolores, 
            cultura andina y tranquilidad absoluta. El lugar perfecto para descansar y reconectar.
          </motion.p>

          {/* Location */}
          <motion.div 
            className="flex items-center justify-center space-x-2 text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <MapPin className="h-5 w-5" />
            <span>Maimará, Quebrada de Humahuaca, Jujuy</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Button
              size="lg"
              onClick={scrollToReservations}
              className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow px-8 py-3 text-lg font-semibold"
            >
              Reservá tu Experiencia
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("accommodations");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 backdrop-blur-sm"
            >
              Ver Alojamientos
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 cursor-pointer"
            onClick={() => {
              const element = document.getElementById("accommodations");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;