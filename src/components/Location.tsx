import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Car, 
  Camera, 
  Mountain, 
  Utensils,
  ExternalLink,
  Navigation
} from "lucide-react";
import cerroImage from "@/assets/cerro-siete-colores.jpg";

const Location = () => {
  const attractions = [
    {
      name: "Cerro de los Siete Colores",
      distance: "15 min",
      description: "Icónica montaña multicolor de Purmamarca",
      icon: Mountain
    },
    {
      name: "Tilcara y Pucará",
      distance: "20 min",
      description: "Pueblo pintoresco y sitio arqueológico",
      icon: Camera
    },
    {
      name: "Salinas Grandes",
      distance: "1.5 hs",
      description: "Desierto de sal más grande del noroeste",
      icon: Navigation
    },
    {
      name: "Mercado de Maimará",
      distance: "5 min",
      description: "Productos locales y artesanías",
      icon: Utensils
    }
  ];

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Maimará,+Jujuy,+Argentina", "_blank");
  };

  return (
    <section id="location" className="py-20 bg-background">
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
            Ubicación Privilegiada
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En el corazón de la Quebrada de Humahuaca, rodeados de cerros de colores, 
            cultura andina y paisajes únicos en el mundo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map and Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-card">
              <div className="relative w-full h-64 md:h-96">
                <iframe
                  title="Ubicación en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.61704692648!2d-65.4045088!3d-23.6826639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941d86e5e8db6a07%3A0x55ec94737a79ad0!2sMaimar%C3%A1%2C%20Jujuy!5e0!3m2!1ses-419!2sar!4v1721412451356!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded shadow-md">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="font-medium">Maimará, Jujuy</span>
                  </div>
                  <p className="text-xs opacity-90">Quebrada de Humahuaca • Patrimonio de la Humanidad</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Fácil Acceso</p>
                      <p className="text-sm text-muted-foreground">
                        2.5 hs desde Salta • Ruta 9 en buen estado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Conexiones</p>
                      <p className="text-sm text-muted-foreground">
                        15 min a Purmamarca • 20 min a Tilcara
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={openGoogleMaps}
                    variant="outline"
                    className="w-full mt-4"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver en Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

          </motion.div>

          {/* Nearby Attractions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Qué Hacer Cerca
                </h3>
                <p className="text-muted-foreground mb-6">
                  Descubrí los tesoros de la Quebrada de Humahuaca desde nuestra ubicación estratégica
                </p>
              </div>

              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <motion.div
                    key={attraction.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-card hover:shadow-warm transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <attraction.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-foreground">{attraction.name}</h4>
                              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                {attraction.distance}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{attraction.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy */}
              <motion.div
                className="mt-8 p-6 bg-gradient-mountain rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-foreground mb-3">
                  Nuestra Filosofía
                </h4>
                <p className="text-foreground italic">
                  "Balconcitos de Colores no es solo un hospedaje, es una invitación a bajar el ritmo, 
                  mirar el cerro y disfrutar del presente con las personas que querés."
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  — Proyecto familiar que valora la calidez, la naturaleza y la cultura andina
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;