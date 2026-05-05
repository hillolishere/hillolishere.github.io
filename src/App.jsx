import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicProfile from './components/AcademicProfile';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      for(const card of document.querySelectorAll(".glass-panel")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div className="tech-grid-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <AcademicProfile />
      <ExperienceTimeline />
      <Skills />
      <Achievements />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
