import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';
import RobotIcon from './icons/RobotIcon';
import AutomationIcon from './icons/AutomationIcon';
import BrainIcon from './icons/BrainIcon';
import ChartIcon from './icons/ChartIcon';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: 1,
      icon: RobotIcon,
      title: 'Asistentes Virtuales Inteligentes',
      description:
        'Chatbots avanzados con procesamiento de lenguaje natural para atención al cliente 24/7.',
      features: ['NLP Avanzado', 'Multicanal', 'Aprendizaje continuo'],
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      color: '#a855f7',
    },
    {
      id: 2,
      icon: AutomationIcon,
      title: 'Automatización de Flujos Empresariales',
      description:
        'Optimiza procesos repetitivos y conecta tus herramientas favoritas sin código.',
      features: ['Zapier & N8n', 'Triggers personalizados', 'Workflows ilimitados'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      color: '#06b6d4',
    },
    {
      id: 3,
      icon: BrainIcon,
      title: 'Modelos de IA Personalizados',
      description:
        'Entrenamiento de modelos específicos para las necesidades de tu negocio.',
      features: ['GPT-4 & Claude', 'Fine-tuning', 'API integrada'],
      gradient: 'linear-gradient(135deg, #84cc16, #10b981)',
      color: '#84cc16',
    },
    {
      id: 4,
      icon: ChartIcon,
      title: 'Integraciones con CRM',
      description:
        'Conecta tu IA con sistemas existentes como HubSpot, Salesforce y más.',
      features: ['Sync en tiempo real', 'Data analytics', 'Dashboard personalizado'],
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      color: '#f59e0b',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones de IA diseñadas para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card glass-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="card-glow" style={{ background: service.gradient }} />

              <div className="service-icon">
                <service.icon size={60} color={service.color} />
                <div
                  className="icon-background"
                  style={{ background: service.gradient }}
                />
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Más información
                <span className="btn-arrow">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decoración de fondo */}
      <div className="services-decoration">
        <motion.div
          className="decoration-circle decoration-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="decoration-circle decoration-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
};

export default Services;
