import { useState, useEffect } from 'react';
import './App.css';

// Componentes
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import About from './components/About';
import Footer from './components/Footer';

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
            <Services />
            <HowItWorks />
            <Results />
            <About />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
