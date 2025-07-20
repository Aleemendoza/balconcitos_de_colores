// Constants for the Balconcitos de Colores application

export const CONTACT_INFO = {
  phone: '+54 9 388 400-0000',
  whatsappNumber: '5493884000000',
  email: 'info@balconcitosdecolores.com',
  address: 'Maimará, Quebrada de Humahuaca, Jujuy, Argentina',
  instagram: 'https://instagram.com/balconcitosdecolores',
  facebook: 'https://facebook.com/balconcitosdecolores',
  googleMapsUrl: 'https://maps.google.com/?q=Maimará,+Jujuy,+Argentina'
};

export const ACCOMMODATION_TYPES = {
  CABANA: {
    id: 'cabana',
    name: 'Cabaña Premium',
    size: '75 m²',
    capacity: '2-4 personas',
    features: ['Terraza privada', 'Vista panorámica', 'Cocina completa', 'Living amplio'],
    description: 'Terraza privada con vista al Cerro Paleta del Pintor, cocina completa, living-comedor amplio y el mejor atardecer de la Quebrada.'
  },
  MONOAMBIENTE: {
    id: 'monoambiente',
    name: 'Monoambiente Acogedor', 
    size: '52 m²',
    capacity: '2-3 personas',
    features: ['Diseño funcional', 'Cocina equipada', 'Ambiente cálido', 'Acceso directo'],
    description: 'Espacio cómodo y funcional con cocina equipada, perfecto para parejas o amigos que buscan comodidad y calidez en planta baja.'
  }
};

export const AMENITIES = [
  { icon: 'Wifi', label: 'Wi-Fi gratuito' },
  { icon: 'Car', label: 'Estacionamiento privado' },
  { icon: 'ChefHat', label: 'Cocina equipada' },
  { icon: 'Flame', label: 'Parrilla' },
  { icon: 'PawPrint', label: 'Pet friendly' },
  { icon: 'Tv', label: 'TV con Netflix' },
  { icon: 'Map', label: 'Mapas y folletos' },
  { icon: 'Gamepad2', label: 'Juegos de mesa' },
  { icon: 'Thermometer', label: 'Calefacción' },
  { icon: 'Bed', label: 'Ropa de cama incluida' }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: 'Cerro de los Siete Colores',
    distance: '15 min',
    description: 'Icónica montaña multicolor de Purmamarca',
    type: 'natural'
  },
  {
    name: 'Tilcara y Pucará',
    distance: '20 min',
    description: 'Pueblo pintoresco y sitio arqueológico',
    type: 'cultural'
  },
  {
    name: 'Salinas Grandes',
    distance: '1.5 hs',
    description: 'Desierto de sal más grande del noroeste',
    type: 'natural'
  },
  {
    name: 'Mercado de Maimará',
    distance: '5 min',
    description: 'Productos locales y artesanías',
    type: 'shopping'
  }
];

export const TIME_SLOTS = [
  { value: 'mañana', label: 'Mañana (8:00 - 12:00)' },
  { value: 'tarde', label: 'Tarde (12:00 - 18:00)' },
  { value: 'noche', label: 'Noche (18:00 - 22:00)' }
];

export const SOCIAL_LINKS = {
  whatsapp: (message: string) => `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
  instagram: CONTACT_INFO.instagram,
  facebook: CONTACT_INFO.facebook
};

export const SEO = {
  title: 'Balconcitos de Colores - Hospedaje en Maimará, Jujuy',
  description: 'Hospedaje familiar en el corazón de la Quebrada de Humahuaca. Cabaña y departamento con vista a los cerros de colores. Reservá tu estadía.',
  keywords: 'hospedaje jujuy, quebrada humahuaca, maimara, turismo jujuy, alojamiento familiar, cerros de colores'
};