import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Footer.css';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import EmailIcon from './icons/EmailIcon';
import GlobeIcon from './icons/GlobeIcon';
import MapPinIcon from './icons/MapPinIcon';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      icon: GithubIcon,
      url: '#',
      color: '#a855f7',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: '#',
      color: '#06b6d4',
    },
    {
      id: 3,
      name: 'Twitter',
      icon: TwitterIcon,
      url: '#',
      color: '#84cc16',
    },
    {
      id: 4,
      name: 'Email',
      icon: EmailIcon,
      url: 'mailto:contact@neotech.ai',
      color: '#f59e0b',
    },
  ];

  const quickLinks = [
    { name: 'Servicios', url: '#services' },
    { name: 'Cómo funciona', url: '#how-it-works' },
    { name: 'Resultados', url: '#results' },
    { name: 'Sobre nosotros', url: '#about' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Final */}
      <section className="final-cta" id="contact" ref={ref}>
        <div className="container">
          <motion.div
            className="cta-content glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="cta-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-dot-pulse" />
              Disponible para nuevos proyectos
            </motion.div>

            <motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Lleva tu negocio al siguiente nivel con IA personalizada
            </motion.h2>

            <motion.p
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Transforma tus procesos con automatización inteligente. Agenda una
              consultoría gratuita y descubre cómo podemos ayudarte.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <button className="btn btn-primary btn-large">
                Agenda una demo gratuita
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary btn-large">
                Contáctanos
                <span className="btn-icon">💬</span>
              </button>
            </motion.div>

            {/* Decoración */}
            <div className="cta-decoration">
              <motion.div
                className="cta-particle cta-particle-1"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="cta-particle cta-particle-2"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="cta-particle cta-particle-3"
                animate={{
                  y: [0, -15, 0],
                  x: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Columna 1 - Brand */}
            <motion.div
              className="footer-column footer-brand"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="footer-logo">
                NeoTech <span className="logo-accent">AI</span>
              </h3>
              <p className="footer-description">
                Transformamos empresas con inteligencia automatizada. Soluciones
                de IA diseñadas para el futuro.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <span className="social-icon">
                      <social.icon size={24} color="currentColor" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Columna 2 - Quick Links */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <h4 className="footer-title">Enlaces Rápidos</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">
                      <span className="link-arrow">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Columna 3 - Contact */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <span className="contact-icon">
                    <EmailIcon size={20} color="#a855f7" />
                  </span>
                  <a href="mailto:contact@neotech.ai">contact@neotech.ai</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <GlobeIcon size={20} color="#06b6d4" />
                  </span>
                  <span>www.neotech.ai</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">
                    <MapPinIcon size={20} color="#84cc16" />
                  </span>
                  <span>Global - Remote First</span>
                </li>
              </ul>
            </motion.div>

            {/* Columna 4 - Newsletter */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <h4 className="footer-title">Newsletter</h4>
              <p className="newsletter-text">
                Recibe las últimas novedades en IA y automatización.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  →
                </button>
              </form>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="copyright">
              © {currentYear} NeoTech AI. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">
                Privacidad
              </a>
              <span className="link-separator">•</span>
              <a href="#" className="bottom-link">
                Términos
              </a>
              <span className="link-separator">•</span>
              <a href="#" className="bottom-link">
                Cookies
              </a>
            </div>
          </motion.div>
        </div>

        {/* Línea decorativa animada */}
        <div className="footer-line" />
      </footer>
    </>
  );
};

export default Footer;
