import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María y Carlos",
      location: "Buenos Aires",
      rating: 5,
      comment: "Una experiencia inolvidable. La vista desde la cabaña es espectacular y la atención de los anfitriones excepcional. Volvemos el año que viene sin dudas.",
      initials: "MC",
      stayType: "Cabaña Premium"
    },
    {
      name: "Ana García",
      location: "Córdoba",
      rating: 5,
      comment: "El lugar perfecto para desconectar. El monoambiente tenía todo lo necesario y la ubicación es ideal para recorrer la Quebrada. Súper recomendable.",
      initials: "AG",
      stayType: "Monoambiente"
    },
    {
      name: "José y familia",
      location: "Rosario",
      rating: 5,
      comment: "Nos encantó la calidez del lugar y cómo nos hicieron sentir como en casa. Los chicos disfrutaron mucho y nosotros pudimos relajarnos completamente.",
      initials: "JF",
      stayType: "Cabaña Premium"
    },
    {
      name: "Laura Mendez",
      location: "Mendoza",
      rating: 5,
      comment: "Balconcitos de Colores superó todas mis expectativas. La filosofía del lugar se siente en cada detalle. Un refugio de paz en la Quebrada.",
      initials: "LM",
      stayType: "Monoambiente"
    }
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
    <section className="py-20 bg-background">
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
            Experiencias que Inspiran
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí por qué nuestros huéspedes eligen volver a Balconcitos de Colores
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full shadow-card hover:shadow-warm transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-primary" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 bg-primary/10">
                        <AvatarFallback className="text-primary font-medium">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{testimonial.stayType}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              ¿Listo para tu propia experiencia?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a cientos de viajeros que han encontrado su refugio perfecto 
              en el corazón de la Quebrada de Humahuaca.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Huéspedes felices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Calificación promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Huéspedes que regresan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;