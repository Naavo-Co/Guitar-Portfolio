import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Guitar, Play, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Acoustic Guitar', level: 95 },
    { name: 'Electric Guitar', level: 90 },
    { name: 'Music Theory', level: 85 },
    { name: 'Songwriting', level: 80 },
    { name: 'Production', level: 75 }
  ];

  const achievements = [
    { icon: Award, title: '15+ Years Experience', description: 'Professional guitar instruction' },
    { icon: Users, title: '10,000+ Students', description: 'Successfully taught worldwide' },
    { icon: Clock, title: '50+ Courses', description: 'Comprehensive learning programs' },
    { icon: Star, title: '4.9/5 Rating', description: 'Student satisfaction rate' }
  ];

  return (
    <div className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2 className="section-title">
            About My <span className="gradient-text">Guitar Journey</span>
          </h2>
          <p className="section-subtitle">
            From passionate beginner to professional instructor - my story of musical transformation
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-left"
          >
            <div className="about-story">
              <h3>My Musical Journey</h3>
              <p>
                I started my guitar journey at the age of 12, completely self-taught and driven by pure passion. 
                What began as a hobby quickly evolved into a lifelong obsession with music and teaching.
              </p>
              <p>
                After 15+ years of performing, recording, and teaching, I've developed a unique methodology 
                that combines traditional techniques with modern approaches, making guitar learning accessible 
                and enjoyable for everyone.
              </p>
            </div>

            <div className="about-philosophy">
              <h3>Teaching Philosophy</h3>
              <p>
                I believe that everyone has the potential to become a great guitarist. My approach focuses on:
              </p>
              <ul>
                <li>Building strong fundamentals through structured learning</li>
                <li>Making practice enjoyable and rewarding</li>
                <li>Personalized instruction for individual learning styles</li>
                <li>Real-world application of skills</li>
              </ul>
            </div>

            <div className="about-stats">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="achievement-card"
                >
                  <achievement.icon size={32} className="achievement-icon" />
                  <div>
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-right"
          >
            <div className="skills-container glass-card">
              <h3>My Expertise</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="video-preview glass-card">
              <div className="video-thumbnail">
                <div className="play-button">
                  <Play size={24} />
                </div>
                <div className="video-overlay">
                  <h4>Watch My Story</h4>
                  <p>From bedroom guitarist to professional instructor</p>
                </div>
              </div>
            </div>

            <div className="testimonial glass-card">
              <div className="testimonial-content">
                <p>
                  "The best guitar instructor I've ever had. His teaching method is revolutionary and 
                  made learning guitar actually fun!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Guitar size={20} />
                  </div>
                  <div>
                    <h5>Sarah Johnson</h5>
                    <span>Student for 3 years</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 