import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star, ShoppingCart, Check, ArrowRight, Music, Guitar, BookOpen } from 'lucide-react';

const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: Music },
    { id: 'beginner', name: 'Beginner', icon: Guitar },
    { id: 'intermediate', name: 'Intermediate', icon: BookOpen },
    { id: 'advanced', name: 'Advanced', icon: Star }
  ];

  const courses = [
    {
      id: 1,
      title: 'Guitar Fundamentals',
      category: 'beginner',
      description: 'Master the basics of guitar playing from scratch',
      duration: '8 weeks',
      students: 2500,
      rating: 4.9,
      price: 99,
      originalPrice: 149,
      features: ['Basic chords', 'Strumming patterns', 'Simple songs', 'Music theory basics'],
      image: '🎸',
      popular: true
    },
    {
      id: 2,
      title: 'Rock Guitar Mastery',
      category: 'intermediate',
      description: 'Learn advanced rock techniques and soloing',
      duration: '12 weeks',
      students: 1800,
      rating: 4.8,
      price: 149,
      originalPrice: 199,
      features: ['Power chords', 'Solo techniques', 'Rock riffs', 'Improvisation'],
      image: '🎸',
      popular: false
    },
    {
      id: 3,
      title: 'Acoustic Fingerstyle',
      category: 'intermediate',
      description: 'Master beautiful fingerpicking patterns',
      duration: '10 weeks',
      students: 1200,
      rating: 4.9,
      price: 129,
      originalPrice: 179,
      features: ['Fingerpicking', 'Travis picking', 'Classical pieces', 'Arrangement skills'],
      image: '🎸',
      popular: false
    },
    {
      id: 4,
      title: 'Jazz Guitar Essentials',
      category: 'advanced',
      description: 'Explore jazz harmony and improvisation',
      duration: '16 weeks',
      students: 800,
      rating: 4.7,
      price: 199,
      originalPrice: 249,
      features: ['Jazz chords', 'Improvisation', 'Standards', 'Theory advanced'],
      image: '🎸',
      popular: false
    },
    {
      id: 5,
      title: 'Songwriting & Composition',
      category: 'intermediate',
      description: 'Create your own music from idea to finished song',
      duration: '14 weeks',
      students: 950,
      rating: 4.8,
      price: 159,
      originalPrice: 209,
      features: ['Melody writing', 'Chord progressions', 'Lyrics', 'Arrangement'],
      image: '🎸',
      popular: false
    },
    {
      id: 6,
      title: 'Blues Guitar Deep Dive',
      category: 'advanced',
      description: 'Master the soulful art of blues guitar',
      duration: '12 weeks',
      students: 1100,
      rating: 4.9,
      price: 169,
      originalPrice: 219,
      features: ['Blues scales', 'Bending techniques', '12-bar blues', 'Soloing'],
      image: '🎸',
      popular: true
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // Debug logging
  console.log('Selected category:', selectedCategory);
  console.log('Filtered courses:', filteredCourses);
  console.log('Available courses by category:', {
    beginner: courses.filter(c => c.category === 'beginner').length,
    intermediate: courses.filter(c => c.category === 'intermediate').length,
    advanced: courses.filter(c => c.category === 'advanced').length
  });

  return (
    <div className="courses-section">
      <div className="courses-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="courses-header"
        >
          <h2 className="section-title">
            Master Guitar with My <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className="section-subtitle">
            Structured learning paths designed to take you from beginner to advanced guitarist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="category-filters"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                console.log('Category clicked:', category.id);
                setSelectedCategory(category.id);
              }}
            >
              <category.icon size={20} />
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="courses-grid">
          {filteredCourses.length === 0 ? (
            <div className="no-courses-message">
              <p>No courses found for this category.</p>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`course-card glass-card ${course.popular ? 'popular' : ''}`}
              >
                {course.popular && (
                  <div className="popular-badge">
                    <Star size={16} />
                    Most Popular
                  </div>
                )}
                
                <div className="course-header">
                  <div className="course-image">
                    <span className="course-emoji">{course.image}</span>
                  </div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </div>

                <div className="course-stats">
                  <div className="stat">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="stat">
                    <Star size={16} />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="course-features">
                  <h4>What you'll learn:</h4>
                  <ul>
                    {course.features.map((feature, idx) => (
                      <li key={idx}>
                        <Check size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-pricing">
                  <div className="price-info">
                    <span className="current-price">${course.price}</span>
                    <span className="original-price">${course.originalPrice}</span>
                    <span className="discount">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <button className="btn-primary">
                    <ShoppingCart size={20} />
                    Enroll Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="courses-cta"
        >
          <div className="cta-content glass-card">
            <h3>Ready to Start Your Guitar Journey?</h3>
            <p>Join thousands of students who have transformed their guitar skills with my proven methodology.</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <Play size={20} />
                Start Free Trial
              </button>
              <button className="btn-secondary">
                View All Courses
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesSection; 