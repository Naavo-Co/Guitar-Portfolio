import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Music, Guitar, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Background Effects */}
      <div className="hero-background">
        <div className="floating-notes">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="note"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <Star size={16} />
            <span>Professional Guitar Instructor</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Master the Art of
            <span className="gradient-text"> Guitar</span>
            <br />
            <span className="hero-subtitle">Transform Your Musical Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            Join thousands of students who have transformed their guitar skills with my proven methodology. 
            From beginner to advanced, discover the secrets of professional guitar playing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-buttons"
          >
            <button className="btn-primary">
              <Play size={20} />
              Start Learning
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              <Music size={20} />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-stats"
          >
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Rating</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="hero-3d-container">
            <div className="guitar-3d-placeholder">
              <Guitar size={120} color="#ff6b6b" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="rotating-ring"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-arrow"
        >
          ↓
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default HeroSection; 