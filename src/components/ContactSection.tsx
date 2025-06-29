import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, Facebook, MessageCircle, Clock, Star } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@guitarmaster.com',
      description: 'Send me a message anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available for calls Mon-Fri'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      description: 'Available for in-person lessons'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', followers: '50K+' },
    { icon: Youtube, name: 'YouTube', url: '#', followers: '250K+' },
    { icon: Twitter, name: 'Twitter', url: '#', followers: '25K+' },
    { icon: Facebook, name: 'Facebook', url: '#', followers: '35K+' }
  ];

  return (
    <div className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to start your guitar journey? Get in touch with me today!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-left"
          >
            <div className="contact-info-container">
              <h3>Get In Touch</h3>
              <p>
                Whether you're a beginner looking to start your guitar journey or an advanced player 
                seeking to refine your skills, I'm here to help. Let's discuss your musical goals!
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-info-item"
                  >
                    <div className="info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p className="info-value">{info.value}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="availability-info glass-card">
                <div className="availability-header">
                  <Clock size={20} />
                  <h4>Teaching Schedule</h4>
                </div>
                <div className="schedule-grid">
                  <div className="schedule-item">
                    <span className="day">Mon - Fri</span>
                    <span className="time">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="schedule-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="schedule-item">
                    <span className="day">Sunday</span>
                    <span className="time">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h3>Follow My Journey</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-card glass-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <social.icon size={24} />
                    <span className="social-name">{social.name}</span>
                    <span className="social-followers">{social.followers}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact-right"
          >
            <div className="contact-form-container glass-card">
              <div className="form-header">
                <MessageCircle size={24} />
                <h3>Send Me a Message</h3>
                <p>I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your guitar goals..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="testimonial-preview glass-card">
              <div className="testimonial-header">
                <Star size={20} />
                <h4>What Students Say</h4>
              </div>
              <blockquote>
                "Amazing instructor! His teaching method is so clear and effective. 
                I went from complete beginner to playing my favorite songs in just 3 months."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>Mike Rodriguez</h5>
                  <span>Student for 6 months</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 