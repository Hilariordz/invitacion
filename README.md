# Boda Minimalista - Invitación Digital

Invitación digital interactiva para la boda de Nicolas y Wendy, con una estética elegante y natural en tonos oliva. La experiencia está optimizada para teléfonos y reúne la información del evento, ubicaciones, cuenta regresiva y confirmación de asistencia en una sola página.

## Funcionalidades

- Portada con nombres, fecha y música ambiental opcional.
- Calendario con la fecha de la boda y enlace para agregar el evento a Google Calendar.
- Frase de bienvenida y sección de cuenta regresiva en tiempo real.
- Formulario RSVP con nombre, asistencia y número de personas.
- Envío de la confirmación directamente a WhatsApp.
- Animaciones suaves al entrar en pantalla.

## Tecnologías

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- pnpm

## Personalización

La información principal de la invitación se encuentra en `src/App.jsx`:

- Nombres y fecha de la portada.
- Fecha de la cuenta regresiva.
- Número de WhatsApp para confirmar asistencia.
- Archivo de música usado por el reproductor.

Las ubicaciones se editan en `src/components/Locations.jsx`. La música debe colocarse en `public/music.mp3` para que el reproductor pueda cargarla.
