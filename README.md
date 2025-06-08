# Makuva UI

Interfaz de usuario moderna para la plataforma Makuva, enfocada en la exploración de rutas, senderos y experiencias únicas en Colombia.

## Características principales

- Hero section con fondo animado y búsqueda interactiva.
- Navegación superior fija, transparente y responsiva.
- Cards de rutas destacadas con información relevante y diseño atractivo.
- Footer moderno con enlaces rápidos y redes sociales.
- Totalmente responsivo y visualmente consistente.

## Estructura del proyecto

```
Makuva ui/
├── public/
│   └── Makuva logo.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── styles/
│   │       ├── Cards.css
│   │       ├── Footer.css
│   │       ├── Hero.css
│   │       └── Nav.css
│   └── components/
│       ├── Card.jsx
│       ├── CardsContainer.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       └── Nav.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd "Makuva ui"
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Personalización
- Modifica los datos de las cards en `src/components/CardsContainer.jsx`.
- Cambia los estilos en los archivos de `src/assets/styles/`.
- Agrega más componentes según tus necesidades.

## Tecnologías usadas
- React
- Vite
- CSS moderno (sin frameworks)

## Créditos
- Imágenes de Unsplash.
- Iconos por emojis y SVG.

---

¡Explora, crea y comparte rutas inolvidables con Makuva!
