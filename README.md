# NeoTech AI - Landing Page Futurista

Landing page moderna y animada para mostrar soluciones de IA y automatización empresarial. Proyecto diseñado con React, CSS puro y Framer Motion.

## Características Principales

- **Diseño Futurista**: Look cyber minimalista con efectos de glassmorphism
- **Logo Animado 3D**: Logo PNG con animaciones 3D impresionantes (rotación, flotación, brillo pulsante)
- **Iconos SVG Personalizados**: 20 iconos SVG creados desde cero, sin emojis
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia visual impactante
- **Efectos 3D Avanzados**: Perspectiva, sombras múltiples y transformaciones tridimensionales
- **Totalmente Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- **CSS Puro**: Sin frameworks CSS, código optimizado y personalizable
- **Performance Optimizada**: Carga rápida con preloader animado

## Tecnologías Utilizadas

- **React 19** - Framework de UI
- **Vite** - Build tool y dev server
- **Framer Motion** - Librería de animaciones
- **CSS3** - Estilos personalizados con variables CSS

## Estructura del Proyecto

```
landig/
├── public/
│   └── logo-png.png         # Logo principal en PNG
├── src/
│   ├── components/          # Componentes React
│   │   ├── icons/           # 20 Iconos SVG personalizados
│   │   │   ├── RobotIcon.jsx
│   │   │   ├── AutomationIcon.jsx
│   │   │   ├── BrainIcon.jsx
│   │   │   ├── ChartIcon.jsx
│   │   │   └── ... (16 más)
│   │   ├── Hero.jsx         # Sección principal con logo 3D y typewriter
│   │   ├── Hero.css         # Estilos con animaciones 3D del logo
│   │   ├── Services.jsx     # Tarjetas de servicios animadas
│   │   ├── HowItWorks.jsx   # Diagrama de flujo animado
│   │   ├── Results.jsx      # Métricas y testimonios
│   │   ├── About.jsx        # Perfil y skills
│   │   ├── Footer.jsx       # Footer con CTA y enlaces
│   │   ├── Preloader.jsx    # Pantalla de carga animada
│   │   └── ScrollProgress.jsx # Barra de progreso superior
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales
│   ├── index.css            # Reset y variables CSS
│   └── main.jsx             # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

## Secciones del Landing

### 1. Hero Section
- **Logo animado 3D**: Rotación continua en eje Y, flotación vertical y brillo pulsante multicolor
- **Efectos visuales avanzados**: Sombras múltiples (púrpura, cyan, negro) con efecto glow
- **Hover interactivo**: Aumento de escala y profundidad al pasar el mouse
- Efecto typewriter animado en el título
- Partículas flotantes en el fondo
- Grid animado de fondo
- Estadísticas con glassmorphism
- Scroll indicator animado

### 2. Servicios
- 4 tarjetas con efectos hover
- Íconos animados con LottieFiles
- Efectos de resplandor por hover
- Decoración de fondo con círculos animados

### 3. Cómo Funciona
- Diagrama horizontal de 5 pasos
- Flechas conectoras animadas
- Cards con partículas flotantes
- CTA integrado

### 4. Resultados
- Grid de métricas con barras de progreso
- Carrusel de testimonios automático
- Partículas de fondo animadas
- Efectos visuales al scroll

### 5. Sobre Nosotros
- Perfil con avatar animado
- Grid de experiencia
- Barras de progreso de skills
- Efecto shimmer en las barras

### 6. Footer con CTA
- Llamado a la acción final
- Redes sociales con efectos hover
- Newsletter subscription
- Enlaces rápidos

### Extras
- **Preloader**: Animación de carga con barra de progreso
- **Scroll Progress**: Indicador visual del scroll en la parte superior

## Instalación y Uso

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone 

# Navegar al directorio
cd landig

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview del build de producción
npm run preview
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

## Paleta de Colores

- **Fondo oscuro**: `#0a0a0f`
- **Fondo secundario**: `#151520`
- **Neón morado**: `#a855f7`
- **Neón cyan**: `#06b6d4`
- **Neón verde**: `#84cc16`
- **Texto primario**: `#f8fafc`
- **Texto secundario**: `#94a3b8`

## Tipografía

- **Principal**: Space Grotesk (títulos y elementos destacados)
- **Secundaria**: Poppins (cuerpo de texto)

## Iconos SVG Personalizados

El proyecto incluye **20 iconos SVG** creados desde cero, completamente personalizables:

### Lista de Iconos Disponibles

1. **RobotIcon** - Asistentes virtuales
2. **AutomationIcon** - Automatización
3. **BrainIcon** - IA y machine learning
4. **ChartIcon** - Analytics y métricas
5. **UserIcon** - Usuarios y perfiles
6. **BriefcaseIcon** - Negocios y proyectos
7. **LightningIcon** - Velocidad y eficiencia
8. **SparklesIcon** - Innovación
9. **StarIcon** - Calificaciones
10. **ClockIcon** - Tiempo
11. **CodeIcon** - Desarrollo
12. **GithubIcon** - GitHub
13. **LinkedinIcon** - LinkedIn
14. **TwitterIcon** - Twitter/X
15. **EmailIcon** - Email
16. **GlobeIcon** - Web/Global
17. **MapPinIcon** - Ubicación
18. **TargetIcon** - Objetivos
19. **RocketIcon** - Lanzamiento/Crecimiento
20. **LockIcon** - Seguridad

### Uso de Iconos

Todos los iconos aceptan props personalizables:

```jsx
import RobotIcon from './components/icons/RobotIcon';

<RobotIcon size={40} color="#a855f7" />
```

**Props disponibles:**
- `size`: Tamaño del icono (default: 40)
- `color`: Color del icono (default: "currentColor")

## Animaciones 3D del Logo

El logo principal incluye múltiples efectos visuales y animaciones 3D:

### Efectos Implementados

**1. Rotación 3D Continua**
- Gira 360° en el eje Y cada 8 segundos
- Animación infinita con movimiento lineal suave
- Implementada con Framer Motion `rotateY`

**2. Flotación Vertical**
- Movimiento ascendente/descendente de 15px
- Duración de 6 segundos por ciclo
- Efecto de profundidad con `translateZ`

**3. Pulsación de Escala**
- Escala entre 1.0 y 1.1 cada 3 segundos
- Crea efecto de "respiración" del logo
- Transición suave con easing

**4. Brillo Pulsante Multicolor**
- Alterna entre 3 colores neón: púrpura, cyan y verde
- Sombras múltiples con diferentes intensidades
- Animación CSS `logo-glow` de 3 segundos

**5. Hover Interactivo**
- Escala aumenta a 1.15 al pasar el mouse
- Intensifica el brillo y las sombras
- Efecto de profundidad con `translateZ(30px)`

### Detalles Técnicos

```jsx
// Animación en Hero.jsx
<motion.img
  src="/logo-png.png"
  animate={{
    rotateY: [0, 360],
    scale: [1, 1.1, 1],
  }}
  transition={{
    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }}
/>
```

```css
/* Estilos 3D en Hero.css */
.hero-logo {
  perspective: 1000px; /* Perspectiva 3D */
}

.logo-image {
  transform-style: preserve-3d;
  animation: logo-glow 3s ease-in-out infinite,
             logo-float 6s ease-in-out infinite;
}
```

## Personalización

### Cambiar colores
Edita las variables CSS en `src/index.css`:

```css
:root {
  --bg-dark: #0a0a0f;
  --neon-purple: #a855f7;
  /* ... más colores */
}
```

### Modificar animaciones
Las animaciones se controlan en los componentes usando Framer Motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenido */}
</motion.div>
```

### Añadir secciones
Crea un nuevo componente en `src/components/` e impórtalo en `App.jsx`.

## Optimizaciones Aplicadas

- Lazy loading de componentes
- Animaciones optimizadas con Framer Motion
- CSS modular por componente
- Imágenes y assets optimizados
- Código minificado en producción

## Mejoras Futuras Sugeridas

- [ ] Integrar Three.js para fondo 3D interactivo
- [ ] Añadir modo claro/oscuro
- [ ] Implementar chatbot demo funcional
- [ ] Añadir formulario de contacto con backend
- [ ] Integrar analytics (Google Analytics, Hotjar)
- [ ] Añadir animaciones con GSAP ScrollTrigger
- [ ] Implementar i18n para múltiples idiomas

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

ISC

## Contacto

Para consultas o colaboraciones: [sanchezdreik511@gmail.com]

---

Hecho con React y Framer Motion
