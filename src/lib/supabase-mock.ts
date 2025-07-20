// Mock Supabase functions for development
// Replace with actual Supabase integration when connected

export interface Reservation {
  id: string;
  nombre: string;
  telefono: string;
  fecha: string;
  horario: string;
  mensaje: string;
  unidad?: string;
  creada_en: string;
  estado: 'pendiente' | 'confirmado' | 'cancelado';
}

// Mock occupied dates for demonstration
const mockOccupiedDates = [
  '2025-01-15',
  '2025-01-16', 
  '2025-01-20',
  '2025-02-14',
  '2025-03-10',
  '2025-03-11',
];

export const checkAvailability = async (fecha: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if date is in occupied dates
  return !mockOccupiedDates.includes(fecha);
};

export const createReservation = async (reservationData: Omit<Reservation, 'id' | 'creada_en' | 'estado'>): Promise<Reservation> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const newReservation: Reservation = {
    ...reservationData,
    id: crypto.randomUUID(),
    creada_en: new Date().toISOString(),
    estado: 'pendiente'
  };

  // In a real app, this would save to Supabase
  console.log('Mock reservation created:', newReservation);
  
  return newReservation;
};

export const getOccupiedDates = async (): Promise<string[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return mockOccupiedDates;
};

// Utility function to format WhatsApp message
export const generateWhatsAppMessage = (reservation: Partial<Reservation>): string => {
  const { nombre, fecha, horario, unidad, mensaje, telefono } = reservation;
  
  let whatsappMessage = `Hola! Quiero reservar Balconcitos de Colores el ${fecha}`;
  
  if (horario) whatsappMessage += ` a las ${horario}`;
  whatsappMessage += ` a nombre de ${nombre}.`;
  
  if (unidad) whatsappMessage += ` Unidad: ${unidad}.`;
  if (mensaje) whatsappMessage += ` Mensaje: ${mensaje}`;
  
  whatsappMessage += ` ¿Está disponible? Mi teléfono: ${telefono}`;
  
  return whatsappMessage;
};

export const openWhatsApp = (message: string, phoneNumber: string = '5493884000000') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};