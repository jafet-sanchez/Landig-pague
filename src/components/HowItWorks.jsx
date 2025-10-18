import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './HowItWorks.css';
import UserIcon from './icons/UserIcon';
import RobotIcon from './icons/RobotIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import LightningIcon from './icons/LightningIcon';
import SparklesIcon from './icons/SparklesIcon';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      id: 1,
      icon: UserIcon,
      title: 'Cliente',
      description: 'Tu cliente interactúa con el sistema',
      color: '#a855f7',
    },
    {
      id: 2,
      icon: RobotIcon,
      title: 'Bot IA',
      description: 'Nuestro asistente procesa la consulta',
      color: '#06b6d4',
    },
    {
      id: 3,
      icon: BriefcaseIcon,
      title: 'CRM',
      description: 'Sincronización con tu CRM favorito',
      color: '#84cc16',
    },
    {
      id: 4,
      icon: LightningIcon,
      title: 'Automatización',
      description: 'Flujos inteligentes se ejecutan',
      color: '#f59e0b',
    },
    {
      id: 5,
      icon: SparklesIcon,
      title: 'Resultado',
      description: 'Solución entregada al instante',
      color: '#ec4899',
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Cómo Funciona</h2>
          <p className="section-subtitle">
            Un proceso simple y automatizado que transforma tu negocio
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="step-wrapper"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="step-card glass-card">
                <div
                  className="step-number"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  }}
                >
                  {step.id}
                </div>

                <div className="step-icon">
                  <step.icon size={50} color={step.color} />
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                {/* Partículas flotantes */}
                <motion.div
                  className="step-particle"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  style={{ background: step.color }}
                />
              </div>

              {/* Flecha conectora */}
              {index < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                >
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 20 H50 M50 20 L40 10 M50 20 L40 30"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={step.color} />
                        <stop offset="100%" stopColor={steps[index + 1].color} />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Línea de tiempo visual */}
        <motion.div
          className="timeline-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* CTA */}
        <motion.div
          className="how-it-works-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3>¿Listo para automatizar tu negocio?</h3>
          <button className="btn btn-primary">Comienza ahora</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
