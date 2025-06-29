import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, Music, Guitar, Star, Clock, Eye } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos', icon: Music },
    { id: 'covers', name: 'Covers', icon: Guitar },
    { id: 'originals', name: 'Originals', icon: Star },
    { id: 'lessons', name: 'Lessons', icon: Play }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Wonderwall - Oasis Cover',
      category: 'covers',
      description: 'Acoustic cover of the classic Oasis song',
      duration: '3:45',
      views: '125K',
      likes: '8.2K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Original Song: "Midnight Dreams"',
      category: 'originals',
      description: 'My latest original composition with full band',
      duration: '4:20',
      views: '89K',
      likes: '6.1K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Fingerpicking Basics Tutorial',
      category: 'lessons',
      description: 'Learn the fundamentals of fingerpicking',
      duration: '12:30',
      views: '156K',
      likes: '9.8K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Hotel California - Eagles Cover',
      category: 'covers',
      description: 'Full band cover with guitar solo',
      duration: '6:15',
      views: '203K',
      likes: '12.5K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Blues Improvisation Lesson',
      category: 'lessons',
      description: 'Advanced blues soloing techniques',
      duration: '18:45',
      views: '78K',
      likes: '5.2K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Original: "Ocean Waves"',
      category: 'originals',
      description: 'Instrumental piece inspired by the sea',
      duration: '5:30',
      views: '67K',
      likes: '4.8K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Stairway to Heaven - Led Zeppelin',
      category: 'covers',
      description: 'Acoustic arrangement of the legendary song',
      duration: '8:20',
      views: '312K',
      likes: '18.9K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: true
    },
    {
      id: 8,
      title: 'Songwriting Workshop',
      category: 'lessons',
      description: 'How to write your first song',
      duration: '22:15',
      views: '95K',
      likes: '7.3K',
      thumbnail: '🎸',
      videoUrl: '#',
      featured: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Musical Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Watch my performances, covers, and educational content
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="portfolio-filters"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`portfolio-filter ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon size={20} />
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`portfolio-card glass-card ${item.featured ? 'featured' : ''}`}
            >
              {item.featured && (
                <div className="featured-badge">
                  <Star size={16} />
                  Featured
                </div>
              )}

              <div className="video-thumbnail">
                <div className="thumbnail-content">
                  <span className="thumbnail-emoji">{item.thumbnail}</span>
                  <div className="play-overlay">
                    <button className="play-button">
                      <Play size={32} />
                    </button>
                  </div>
                </div>
                <div className="video-duration">
                  <Clock size={14} />
                  {item.duration}
                </div>
              </div>

              <div className="video-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                <div className="video-stats">
                  <div className="stat">
                    <Eye size={16} />
                    <span>{item.views}</span>
                  </div>
                  <div className="stat">
                    <Heart size={16} />
                    <span>{item.likes}</span>
                  </div>
                </div>

                <div className="video-actions">
                  <button className="action-btn">
                    <Play size={16} />
                    Watch
                  </button>
                  <button className="action-btn">
                    <Heart size={16} />
                    Like
                  </button>
                  <button className="action-btn">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="portfolio-cta"
        >
          <div className="cta-content glass-card">
            <h3>Want to See More?</h3>
            <p>Subscribe to my YouTube channel for weekly guitar content, covers, and lessons.</p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Videos</span>
              </div>
              <div className="stat">
                <span className="stat-number">250K+</span>
                <span className="stat-label">Subscribers</span>
              </div>
              <div className="stat">
                <span className="stat-number">15M+</span>
                <span className="stat-label">Views</span>
              </div>
            </div>
            <button className="btn-primary">
              <Play size={20} />
              Subscribe to YouTube
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSection; 