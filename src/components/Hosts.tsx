import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Hosts = () => {
  return (
    <section id="hosts" className="py-20 bg-gradient-hosts">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 flex justify-center items-center gap-2">
            <User className="h-6 w-6 text-primary" />
            Anfitriones: Mara y Juan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conocé a quienes hacen posible la experiencia en Balconcitos de Colores
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Imagen de los anfitriones */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-card w-full max-w-md">
              <CardContent className="p-0">
                <img
                  src="/images/hosts-booking.png"
                  alt="Mara y Juan"
                  className="w-full h-auto rounded-t-md"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold text-foreground">
                  Mara y Juan
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-card">
              <CardContent className="space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  Balconcito de Colores ofrece una vista espectacular del cerro Paleta del Pintor. Contamos con una cabaña de 75 m² y un departamento tipo monoambiente de 52 m², rodeados de cultivos típicos de la Quebrada y acequias que conducen al río Grande de Jujuy.
                </p>
                <p>
                  Desde nuestra terraza o tomando unos mates en el jardín podés disfrutar amaneceres y atardeceres únicos. Compartimos con nuestros huéspedes fotos, historias y costumbres locales.
                </p>
                <p>
                  Las unidades están en el corazón de Maimará, entre Tilcara y Purmamarca, a metros de la nueva estación del tren solar. Es el lugar ideal para recorrer la Quebrada con comodidad.
                </p>
                <p>
                  <strong>Idiomas:</strong> Español, Inglés
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hosts;
