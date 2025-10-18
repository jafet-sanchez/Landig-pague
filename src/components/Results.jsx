import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Results.css';
import LightningIcon from './icons/LightningIcon';
import ChartIcon from './icons/ChartIcon';
import StarIcon from './icons/StarIcon';
import ClockIcon from './icons/ClockIcon';
import UserIcon from './icons/UserIcon';
import CodeIcon from './icons/CodeIcon';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const results = [
    {
      id: 1,
      metric: '40%',
      label: 'Reducción en tiempos de respuesta',
      description: 'Respuestas instantáneas 24/7 con IA',
      icon: LightningIcon,
      color: '#a855f7',
    },
    {
      id: 2,
      metric: '1000+',
      label: 'Interacciones automatizadas al mes',
      description: 'Escalabilidad sin límites',
      icon: ChartIcon,
      color: '#06b6d4',
    },
    {
      id: 3,
      metric: '85%',
      label: 'Satisfacción del cliente',
      description: 'Experiencia mejorada y personalizada',
      icon: StarIcon,
      color: '#84cc16',
    },
    {
      id: 4,
      metric: '300hrs',
      label: 'Ahorradas en tareas repetitivas',
      description: 'Enfócate en lo que importa',
      icon: ClockIcon,
      color: '#f59e0b',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO, TechStartup',
      text: 'NeoTech AI transformó completamente nuestra atención al cliente. Ahora respondemos en segundos lo que antes tomaba horas.',
      avatar: UserIcon,
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'CTO, E-commerce Pro',
      text: 'La integración con nuestro CRM fue perfecta. Nuestros flujos de trabajo ahora son 100% automáticos.',
      avatar: CodeIcon,
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Gerente de Operaciones',
      text: 'ROI increíble. Recuperamos la inversión en menos de 2 meses gracias a la automatización.',
      avatar: UserIcon,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="results" id="results" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resultados Comprobados</h2>
          <p className="section-subtitle">
            Números que demuestran el impacto real de nuestras soluciones
          </p>
        </motion.div>

        {/* Métricas */}
        <div className="results-grid">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              className="result-card glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="result-icon">
                <result.icon size={50} color={result.color} />
              </div>

              <div
                className="result-metric"
                style={{
                  background: `linear-gradient(135deg, ${result.color}, ${result.color}dd)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {result.metric}
              </div>

              <div className="result-label">{result.label}</div>
              <div className="result-description">{result.description}</div>

              {/* Barra de progreso animada */}
              <motion.div
                className="result-progress"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                style={{ background: result.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonios */}
        <motion.div
          className="testimonials-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="testimonials-title">Lo que dicen nuestros clientes</h3>

          <div className="testimonials-container">
            <motion.div
              key={currentTestimonial}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-avatar">
                {(() => {
                  const AvatarIcon = testimonials[currentTestimonial].avatar;
                  return <AvatarIcon size={40} color="white" />;
                })()}
              </div>

              <p className="testimonial-text">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="testimonial-author">
                <div className="author-name">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="author-position">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </motion.div>

            {/* Indicadores */}
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentTestimonial ? 'active' : ''
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partículas de fondo (menos en móvil) */}
      <div className="results-particles">
        {[...Array(isMobile ? 10 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Results;
