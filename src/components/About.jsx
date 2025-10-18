import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import BriefcaseIcon from './icons/BriefcaseIcon';
import TargetIcon from './icons/TargetIcon';
import RocketIcon from './icons/RocketIcon';
import CodeIcon from './icons/CodeIcon';
import SparklesIcon from './icons/SparklesIcon';
import LockIcon from './icons/LockIcon';
import LightningIcon from './icons/LightningIcon';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Botpress', level: 95, color: '#a855f7' },
    { name: 'ChatGPT & Claude', level: 98, color: '#06b6d4' },
    { name: 'Zapier & N8n', level: 92, color: '#84cc16' },
    { name: 'Node.js & React', level: 90, color: '#f59e0b' },
    { name: 'Python & IA', level: 88, color: '#ec4899' },
    { name: 'CRM Integration', level: 85, color: '#8b5cf6' },
  ];

  const experience = [
    {
      id: 1,
      icon: BriefcaseIcon,
      title: 'Proyectos Completados',
      value: '50+',
      description: 'Implementaciones exitosas',
      color: '#a855f7',
    },
    {
      id: 2,
      icon: TargetIcon,
      title: 'Satisfacción',
      value: '100%',
      description: 'Clientes satisfechos',
      color: '#06b6d4',
    },
    {
      id: 3,
      icon: RocketIcon,
      title: 'Experiencia',
      value: '5+',
      description: 'Años en IA y automatización',
      color: '#84cc16',
    },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="section-subtitle">
            Expertos en transformación digital y automatización inteligente
          </p>
        </motion.div>

        <div className="about-content">
          {/* Lado izquierdo - Información */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="profile-section glass-card">
              <div className="profile-avatar">
                <motion.div
                  className="avatar-circle"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.5)',
                      '0 0 40px rgba(6, 182, 212, 0.5)',
                      '0 0 20px rgba(168, 85, 247, 0.5)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <CodeIcon size={70} color="white" />
                </motion.div>
              </div>

              <h3 className="profile-name">Desarrollador Full Stack & IA</h3>

              <p className="profile-bio">
                Desarrollador especializado en asistentes virtuales,
                automatizaciones y flujos de IA. Experiencia integrando
                herramientas como <strong>Botpress</strong>,{' '}
                <strong>Zapier</strong>, <strong>N8n</strong> y modelos de{' '}
                <strong>ChatGPT & Claude</strong>.
              </p>

              <div className="profile-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <SparklesIcon size={24} color="#a855f7" />
                  </span>
                  <span>Soluciones personalizadas</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <LockIcon size={24} color="#06b6d4" />
                  </span>
                  <span>Seguridad garantizada</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <LightningIcon size={24} color="#84cc16" />
                  </span>
                  <span>Implementación rápida</span>
                </div>
              </div>
            </div>

            {/* Experiencia */}
            <div className="experience-grid">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="experience-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="exp-icon">
                    <item.icon size={32} color={item.color} />
                  </div>
                  <div className="exp-value">{item.value}</div>
                  <div className="exp-title">{item.title}</div>
                  <div className="exp-description">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado derecho - Skills */}
          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="skills-container glass-card">
              <h3 className="skills-title">Tecnologías & Herramientas</h3>

              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills-footer">
                <p>
                  Siempre aprendiendo y explorando nuevas tecnologías para
                  ofrecer las mejores soluciones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="about-decoration">
        <motion.div
          className="deco-circle deco-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="deco-circle deco-2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
};

export default About;
