// Imports core Reveal.js and styles
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';

// Import local styling (Tailwind + FarmaHumana Design Tokens)
import './style.css';

// Import GSAP for animation transitions
import { gsap } from 'gsap';

// Import Slides templates aggregator
import { buildSlidesHTML } from './slides/index.js';

// Import GSAP transitions orchestrator
import { initAnimations } from './animations.js';

// 1. Inyectar dinámicamente las diapositivas modulares en el contenedor de Reveal.js
const slidesContainer = document.querySelector('.reveal .slides');
if (slidesContainer) {
  slidesContainer.innerHTML = buildSlidesHTML();
}

// 2. Crear la instancia de Reveal.js con configuración personalizada
// Ocultamos los controles visuales (flechas en pantalla) pero permitimos navegación por teclado.
const deck = new Reveal({
  hash: true,
  controls: false,       // Oculta los controles de navegación visuales en pantalla
  progress: true,       // Muestra la barra de progreso inferior de la presentación
  keyboard: true,       // Habilita atajos de teclado (flechas, barra espaciadora, etc.)
  overview: true,       // Habilita el modo vista general presionando 'Esc'
  center: true,         // Centra verticalmente el contenido de cada diapositiva
  navigationMode: 'linear', // Navegación lineal (todas las diapositivas en un solo eje)
  transition: 'slide',  // Transición horizontal entre secciones principales
  transitionSpeed: 'slow', // Velocidad de la transición para dar un tono profesional
  width: 1280,          // Aumentar ancho para aprovechar pantallas
  height: 720,          // Proporción 16:9
  margin: 0.04,         // Menos margen, aprovecha mejor la pantalla
  minScale: 0.2,
  maxScale: 2.0
});

// 3. Inicializar las animaciones conectadas a las transiciones de diapositivas
initAnimations(deck, gsap);

// 4. Arrancar la presentación
deck.initialize();
