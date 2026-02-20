
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Steps } from './components/Steps';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Pricing } from './components/Pricing';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Stats />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
