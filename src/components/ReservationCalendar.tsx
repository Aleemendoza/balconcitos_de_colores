import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MessageSquare, Phone, User, Home } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ReservationCalendar = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [fromDate, toDate] = dateRange;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    accommodation: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const occupiedDates = [
    new Date(2025, 0, 15),
    new Date(2025, 0, 16),
    new Date(2025, 0, 20),
    new Date(2025, 1, 14),
  ];

  const isDateOccupied = (date: Date) => {
    return occupiedDates.some(occupiedDate =>
      occupiedDate.toDateString() === date.toDateString()
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fromDate || !toDate || !formData.name || !formData.phone || !formData.accommodation) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completá todos los campos obligatorios, incluyendo la fecha.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const formattedFrom = format(fromDate, "dd 'de' MMMM", { locale: es });
      const formattedTo = format(toDate, "dd 'de' MMMM 'de' yyyy", { locale: es });
      const whatsappMessage = `Hola! Quiero reservar Balconcitos de Colores desde el ${formattedFrom} hasta el ${formattedTo}${formData.time ? ` a las ${formData.time}` : ''} a nombre de ${formData.name}.${formData.accommodation ? ` Unidad: ${formData.accommodation}.` : ''}${formData.message ? ` Mensaje: ${formData.message}` : ''} ¿Está disponible? Mi teléfono: ${formData.phone}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/5493884000000?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      toast({
        title: "¡Solicitud enviada!",
        description: "Te redirigimos a WhatsApp para confirmar tu reserva.",
      });

      setDateRange([null, null]);
      setFormData({
        name: "",
        phone: "",
        accommodation: "",
        time: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Intentá nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidRange = (start: Date | null, end: Date | null): boolean => {
    if (!start || !end) return true;
  
    const current = new Date(start);
    while (current <= end) {
      if (isDateOccupied(current)) return false;
      current.setDate(current.getDate() + 1);
    }
    return true;
  };
  

  return (
    <section id="reservations" className="py-20 bg-gradient-mountain">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Reservá tu Estadía
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí tu fecha ideal y te contactaremos por WhatsApp para confirmar la disponibilidad
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Seleccioná tus fechas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="datepicker-container">
                    <DatePicker
                      selectsRange
                      startDate={fromDate}
                      endDate={toDate}
                      onChange={(update: [Date | null, Date | null]) => {
                        const [start, end] = update;
                      
                        if (start && end && !isValidRange(start, end)) {
                          toast({
                            title: "Rango inválido",
                            description: "El rango seleccionado incluye fechas ocupadas. Por favor elegí otro.",
                            variant: "destructive",
                          });
                          return;
                        }
                      
                        setDateRange(update);
                      }}
                      
                      minDate={new Date()}
                      excludeDates={occupiedDates}
                      locale={es}
                      inline
                      calendarClassName="custom-datepicker"
                      dayClassName={(date) =>
                        isDateOccupied(date)
                          ? "occupied-date"
                          : (fromDate && toDate &&
                              date >= fromDate &&
                              date <= toDate &&
                              !isDateOccupied(date))
                          ? "selected-date"
                          : "available-date"
                      }
                    />
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Fechas seleccionadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                      <span>Fechas ocupadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span>Fechas disponibles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Datos de la reserva</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Nombre completo *</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre y apellido"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Teléfono *</span>
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+54 9 388 400-0000"
                        required
                      />
                    </div>

                    <div>
                      <Label className="flex items-center space-x-2">
                        <Home className="h-4 w-4" />
                        <span>Tipo de alojamiento *</span>
                      </Label>
                      <Select value={formData.accommodation} onValueChange={(value) => handleInputChange("accommodation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Elegí tu alojamiento preferido" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cabana">Cabaña Premium (75 m²)</SelectItem>
                          <SelectItem value="monoambiente">Monoambiente Acogedor (52 m²)</SelectItem>
                          <SelectItem value="cualquiera">Cualquiera disponible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Horario preferido</span>
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Horario de llegada (opcional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mañana">Mañana (8:00 - 12:00)</SelectItem>
                          <SelectItem value="tarde">Tarde (12:00 - 18:00)</SelectItem>
                          <SelectItem value="noche">Noche (18:00 - 22:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje adicional</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="¿Algún pedido especial o información adicional?"
                        rows={3}
                      />
                    </div>

                    {fromDate && toDate && (
                      <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                        <p className="text-sm font-medium text-foreground">
                          Fechas seleccionadas: {format(fromDate, "dd 'de' MMMM", { locale: es })} - {format(toDate, "dd 'de' MMMM 'de' yyyy", { locale: es })}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-warm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Procesando..." : "Solicitar Reserva por WhatsApp"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Te redirigiremos a WhatsApp para confirmar la disponibilidad
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .custom-datepicker {
          font-family: inherit;
          border: none;
          background: transparent;
        }
        .react-datepicker__day--selected {
          background-color: hsl(var(--primary)) !important;
          color: hsl(var(--primary-foreground)) !important;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: hsl(var(--primary)/0.7) !important;
          color: hsl(var(--primary-foreground)) !important;
        }
        .react-datepicker__day:hover {
          background-color: hsl(var(--primary)/0.1) !important;
        }
        .occupied-date {
          background-color: hsl(var(--muted)) !important;
          color: hsl(var(--muted-foreground)) !important;
          cursor: not-allowed !important;
        }
        .available-date:hover {
          background-color: hsl(var(--accent)/0.1) !important;
        }
        .react-datepicker__header {
          background-color: hsl(var(--card));
          border-bottom: 1px solid hsl(var(--border));
        }
        .react-datepicker__current-month {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
        .react-datepicker__day-name {
          color: hsl(var(--muted-foreground));
        }
        .react-datepicker__day {
          color: hsl(var(--foreground));
        }
        .react-datepicker__day--disabled {
          color: hsl(var(--muted-foreground));
        }
      `}</style>
    </section>
  );
};

export default ReservationCalendar;
