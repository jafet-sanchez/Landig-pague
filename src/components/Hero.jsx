import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Transformamos empresas con inteligencia automatizada';
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [counts, setCounts] = useState({ precision: 0, disponibilidad: 0, ahorro: 0 });

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);

  // Animación de contador para estadísticas
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counts.precision < 98) {
        setCounts(prev => ({
          ...prev,
          precision: Math.min(prev.precision + 2, 98)
        }));
      }
      if (counts.disponibilidad < 24) {
        setCounts(prev => ({
          ...prev,
          disponibilidad: Math.min(prev.disponibilidad + 1, 24)
        }));
      }
      if (counts.ahorro < 40) {
        setCounts(prev => ({
          ...prev,
          ahorro: Math.min(prev.ahorro + 1, 40)
        }));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [counts]);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Crear partículas flotantes (menos en móvil para mejor performance)
  const particleCount = isMobile ? 20 : 50;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Fondo de partículas */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
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
        ))}
      </div>

      {/* Grid de fondo */}
      <div className="grid-background" />

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          {/* Logo animado */}
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            <motion.img
              src="/logo-png.png"
              alt="Logo"
              className="logo-image"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Innovación • Automatización • IA
          </motion.div>

          <h1 className="hero-title">
            <span className="gradient-text">{text}</span>
            <span className="cursor">|</span>
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Asistentes virtuales, flujos inteligentes y automatización integral
            para tu negocio.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <button className="btn btn-primary" onClick={scrollToServices}>
              Descubre cómo funciona
            </button>
            <button className="btn btn-secondary">Agenda una demo</button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="stat-item">
              <div className="stat-number">{counts.precision}%</div>
              <div className="stat-label">Precisión IA</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">{counts.disponibilidad}/7</div>
              <div className="stat-label">Disponibilidad</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">{counts.ahorro}%</div>
              <div className="stat-label">Ahorro de tiempo</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="mouse">
            <div className="wheel" />
          </div>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
