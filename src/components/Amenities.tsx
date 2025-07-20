import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wifi, Car, ChefHat, Flame, PawPrint, Tv, ShowerHead,
  Home, ParkingCircle, Eye, Dog, Bath, CookingPot, Sun, Lock
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Wi-Fi gratuito" },
  { icon: Car, label: "Estacionamiento gratuito" },
  { icon: ChefHat, label: "Cocina equipada" },
  { icon: Flame, label: "Parrilla" },
  { icon: PawPrint, label: "Pet friendly" },
  { icon: Tv, label: "TV con Netflix" },
  { icon: Bath, label: "Baño privado" },
  { icon: ShowerHead, label: "Ducha" },
  { icon: Home, label: "Casa independiente" },
  { icon: CookingPot, label: "Utensilios de cocina" },
  { icon: Eye, label: "Vista a la montaña" },
  { icon: Sun, label: "Solárium / Terraza" },
  { icon: Dog, label: "Se aceptan mascotas" },
  { icon: ParkingCircle, label: "Parking privado" },
  { icon: Lock, label: "Entrada privada" },
];

const Amenities = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleAmenities = showAll ? amenities : amenities.slice(0, 6);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
        Servicios Incluidos
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
        {visibleAmenities.map((amenity, index) => (
          <motion.div
            key={amenity.label}
            className="flex flex-col items-center space-y-2 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-card rounded-full shadow-card group-hover:shadow-warm transition-shadow">
              <amenity.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground text-center">
              {amenity.label}
            </span>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="text-sm font-medium text-primary hover:underline transition-all"
      >
        {showAll ? "Ver menos" : "Ver más"}
      </button>
    </motion.div>
  );
};

export default Amenities;
