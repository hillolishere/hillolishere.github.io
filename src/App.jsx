import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicProfile from './components/AcademicProfile';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="tech-grid-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <AcademicProfile />
      <ExperienceTimeline />
      <Skills />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
