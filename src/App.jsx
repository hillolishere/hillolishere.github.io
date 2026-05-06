import React, { useEffect, useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const About = lazy(() => import('./components/About'));
const AcademicProfile = lazy(() => import('./components/AcademicProfile'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline'));
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after boot sequence completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds match the Preloader animation duration
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          for(const card of document.querySelectorAll(".glass-panel")) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div className="tech-grid-bg"></div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>Loading modules...</div>}>
        <About />
        <AcademicProfile />
        <ExperienceTimeline />
        <Skills />
        <Achievements />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
