import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

// Componentes críticos (carga inmediata)
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';

// Componentes con lazy loading
const Services = lazy(() => import('./components/Services'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Results = lazy(() => import('./components/Results'));
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevenir scroll durante la carga
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      {!loading && (
        <div className="app">
          <ScrollProgress />

          <main>
            <Hero />
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <Services />
              <HowItWorks />
              <Results />
              <About />
              <Footer />
            </Suspense>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
