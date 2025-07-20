# Balconcitos de Colores 🏡🌄

**Balconcitos de Colores** es un sitio web moderno y responsivo para un hospedaje turístico ubicado en Maimará, en el corazón de la Quebrada de Humahuaca, Jujuy (Argentina). Este sitio fue desarrollado con foco en la experiencia del usuario, el diseño visual atractivo y la facilidad para realizar reservas.

## 🧭 ¿Qué es este sitio?

Este proyecto representa el sitio oficial de **Balconcitos de Colores**, una propuesta de alojamiento con vistas únicas al Cerro Paleta del Pintor. Ofrece:

- Información completa sobre el hospedaje, anfitriones y servicios.
- Un formulario interactivo para solicitar reservas vía WhatsApp.
- Vista integrada de ubicación exacta vía Google Maps.
- Atracciones destacadas cerca del alojamiento.
- Testimonios y estética inspirada en la naturaleza y cultura de la Quebrada.

## 🛠️ Tecnologías utilizadas

- **Vite** – Empaquetador rápido y moderno.
- **React** – Librería base para la construcción del sitio.
- **Framer Motion** – Animaciones suaves y accesibles.
- **Lucide Icons** – Íconos SVG modernos y livianos.
- **React Datepicker** – Selección de fechas para el calendario de reservas.
- **CSS Modules / Clases personalizadas** – Sin Tailwind, con clases adaptadas al diseño.
- **Google Maps Embed** – Mapa interactivo con marcador del hospedaje.
- **React Toasts personalizados** – Sistema de notificaciones para validaciones.
- **Composición modular** – Estructura clara con componentes reutilizables.

## 🚀 Funcionalidades destacadas

- 📅 **Reserva por rango de fechas** con validación de disponibilidad.
- 📲 **Redirección automática a WhatsApp** con mensaje personalizado.
- 📍 **Mapa embebido** con ubicación exacta de Maimará.
- 🌟 **Servicios incluidos** visuales y expansibles ("Ver más").
- 👥 **Sección de anfitriones** clara y detallada.
- 🌄 **Listado de atracciones** turísticas cercanas.
- 💬 **Testimonios** y estética emocional vinculada a la experiencia.

## 📂 Estructura del proyecto

\`\`\`
src/
├── assets/              # Imágenes y recursos estáticos
├── components/          # Componentes reutilizables (Hero, Header, Form, etc.)
├── pages/               # Página principal (Index.tsx)
├── hooks/               # Custom hooks (ej: useToast)
├── styles/              # Estilos globales o modulares
public/
└── images/              # Imágenes públicas como fotos de anfitriones
\`\`\`

## 🧪 Instalación local

1. Cloná este repositorio:

\`\`\`bash
git clone https://github.com/tu-usuario/balconcitos-de-colores.git
cd balconcitos-de-colores
\`\`\`

2. Instalá las dependencias:

\`\`\`bash
npm install
\`\`\`

3. Iniciá el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

4. Accedé en tu navegador a: [http://localhost:8080](http://localhost:8080)

## 🔄 Despliegue

El sitio puede desplegarse en cualquier servicio que soporte aplicaciones Vite/React, como:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages (con build estático)

Para producción:

\`\`\`bash
npm run build
\`\`\`

## 🌐 SEO y rendimiento

- HTML semántico
- Carga optimizada de recursos
- Layout responsive
- Animaciones accesibles
- Buen rendimiento en Lighthouse

## 📸 Créditos

- Fotografías proporcionadas por los anfitriones.
- Íconos por [Lucide](https://lucide.dev)
- Imagen del cerro: Unsplash / personalizada.

## 📩 Contacto

¿Querés hacer reservas o hablar con los anfitriones?  
Visitá el sitio o escribí por WhatsApp desde el formulario de reserva.

## ⚖️ Licencia

Este proyecto es de uso privado para Balconcitos de Colores. No se permite su distribución sin autorización.

> "Balconcitos de Colores no es solo un hospedaje, es una invitación a bajar el ritmo, mirar el cerro y disfrutar del presente con las personas que querés." 🌄
