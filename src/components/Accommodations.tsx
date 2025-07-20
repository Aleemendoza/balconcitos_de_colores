import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Wifi, 
  Car, 
  ChefHat, 
  Flame, 
  PawPrint, 
  Tv, 
  Mountain,
  Bed,
  Bath,
  Home
} from "lucide-react";
import cabinInterior from "@/assets/cabin-interior.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import Amenities from "./Amenities";

const Accommodations = () => {
  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const amenities = [
    { icon: Wifi, label: "Wi-Fi gratuito" },
    { icon: Car, label: "Estacionamiento" },
    { icon: ChefHat, label: "Cocina equipada" },
    { icon: Flame, label: "Parrilla" },
    { icon: PawPrint, label: "Pet friendly" },
    { icon: Tv, label: "TV con Netflix" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="accommodations" className="py-20 bg-gradient-mountain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestros Alojamientos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dos opciones únicas para vivir la experiencia completa de la Quebrada de Humahuaca
          </p>
        </motion.div>

        {/* Accommodations Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Cabaña */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 group">
              <div className="relative h-64">
                <img 
                  src={cabinInterior} 
                  alt="Cabaña interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Cabaña
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      Cabaña Premium
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      75 m² • Planta alta con terraza privada
                    </p>
                  </div>
                  <Mountain className="h-8 w-8 text-primary" />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-accent" />
                    <span>2-4 personas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Bed className="h-4 w-4 text-accent" />
                    <span>1 dormitorio</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Bath className="h-4 w-4 text-accent" />
                    <span>1 baño</span>
                  </div>
                </div>

                <p className="text-foreground mb-4">
                  Terraza privada con vista al Cerro Paleta del Pintor, cocina completa, 
                  living-comedor amplio y el mejor atardecer de la Quebrada.
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-foreground mb-2">Incluye:</h4>
                  <p className="text-sm text-muted-foreground">
                    Vista panorámica • Terraza privada • Cocina completa • Living amplio
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Departamento */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 group">
              <div className="relative h-64">
                <img 
                  src={studioInterior} 
                  alt="Departamento interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Departamento
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      Monoambiente Acogedor
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      52 m² • Planta baja funcional
                    </p>
                  </div>
                  <Home className="h-8 w-8 text-secondary" />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-accent" />
                    <span>2-3 personas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Bed className="h-4 w-4 text-accent" />
                    <span>Cama matrimonial</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Bath className="h-4 w-4 text-accent" />
                    <span>1 baño</span>
                  </div>
                </div>

                <p className="text-foreground mb-4">
                  Espacio cómodo y funcional con cocina equipada, perfecto para parejas 
                  o amigos que buscan comodidad y calidez en planta baja.
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-foreground mb-2">Incluye:</h4>
                  <p className="text-sm text-muted-foreground">
                    Diseño funcional • Cocina equipada • Ambiente cálido • Acceso directo
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Amenities */}
        <Amenities />
      </div>
    </section>
  );
};

export default Accommodations;