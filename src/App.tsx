import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Guitar, User, Home, BookOpen, Mail, Instagram, Youtube, Twitter } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FloatingGuitar from './components/FloatingGuitar';
import './App.css';
import './components.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Guitar size={60} color="#ff6b6b" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="loader-text"
        >
          Tuning Up...
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <motion.div
          className="nav-brand"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Guitar className="nav-icon" />
          <span>GuitarMaster</span>
        </motion.div>
        
        <motion.div
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
          >
            <Home size={16} />
            Home
          </button>
          <button
            className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            <User size={16} />
            About
          </button>
          <button
            className={`nav-link ${currentSection === 'courses' ? 'active' : ''}`}
            onClick={() => scrollToSection('courses')}
          >
            <BookOpen size={16} />
            Courses
          </button>
          <button
            className={`nav-link ${currentSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => scrollToSection('portfolio')}
          >
            <Guitar size={16} />
            Portfolio
          </button>
          <button
            className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            <Mail size={16} />
            Contact
          </button>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section id="home" className="section">
          <HeroSection />
        </section>
        
        <section id="about" className="section">
          <AboutSection />
        </section>
        
        <section id="courses" className="section">
          <CoursesSection />
        </section>
        
        <section id="portfolio" className="section">
          <PortfolioSection />
        </section>
        
        <section id="contact" className="section">
          <ContactSection />
        </section>
      </main>

      {/* Floating 3D Guitar */}
      <FloatingGuitar />

      {/* Social Links */}
      <motion.div
        className="social-links"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <button className="social-link">
          <Instagram size={20} />
        </button>
        <button className="social-link">
          <Youtube size={20} />
        </button>
        <button className="social-link">
          <Twitter size={20} />
        </button>
      </motion.div>

      {/* Background Music Visualizer */}
      <div className="music-visualizer">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="visualizer-bar"
            animate={{
              height: [10, 50, 10],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
