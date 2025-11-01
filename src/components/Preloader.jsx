import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 20;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Reducir partículas para mejor performance
  const particles = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 1.5 + 1,
      delay: Math.random() * 1.5,
    })), []);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="preloader-content">
        <div className="preloader-logo">
          NeoTech <span className="logo-ai">AI</span>
        </div>

        <div className="preloader-bar-container">
          <motion.div
            className="preloader-bar"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <div className="preloader-percentage">
          {progress}%
        </div>

        {/* Partículas optimizadas */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="preloader-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
