import { motion } from 'framer-motion';
import { useEffect, useState, useMemo, memo } from 'react';
import './Hero.css';

// Memoizar partículas para evitar recrearlas en cada render
const Particle = memo(({ particle }) => (
  <motion.div
    className="particle"
    style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
));

Particle.displayName = 'Particle';

const Hero = () => {
  const fullText = 'Transformamos empresas con inteligencia artificial';
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // Detectar si es móvil solo una vez al montar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Activar animaciones después de un breve delay
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Crear partículas una sola vez (reducidas para mejor performance)
  const particleCount = isMobile ? 8 : 15;
  const particles = useMemo(() =>
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
    })), [particleCount]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Fondo de partículas optimizado */}
      <div className="particles-container">
        {particles.map((particle) => (
          <Particle key={particle.id} particle={particle} />
        ))}
      </div>

      {/* Grid de fondo */}
      <div className="grid-background" />

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          {/* Logo simplificado - animación vía CSS */}
          <div className="hero-logo">
            <img
              src="/logo-png.png"
              alt="Logo"
              className="logo-image"
              loading="eager"
            />
          </div>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Innovación • Automatización • IA
          </motion.div>

          <h1 className="hero-title">
            <span className="gradient-text typing-text">{fullText}</span>
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={isAnimated ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Asistentes virtuales, flujos inteligentes y automatización integral
            para tu negocio.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="btn btn-primary" onClick={scrollToServices}>
              Descubre cómo funciona
            </button>
            <button className="btn btn-secondary">Agenda una demo</button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={isAnimated ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Precisión IA</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponibilidad</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">40%</div>
              <div className="stat-label">Ahorro de tiempo</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator con animación CSS */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
