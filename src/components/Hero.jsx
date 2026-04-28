import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Playful Organic Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '5%', left: '-5%', width: '40vw', height: '40vw', background: 'var(--color-accent-2)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', opacity: 0.6, filter: 'blur(40px)', zIndex: 0 }} 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'var(--color-accent-4)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', opacity: 0.5, filter: 'blur(60px)', zIndex: 0 }} 
      />

      <div className="container grid-2" style={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          style={{ position: 'relative' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            style={{ 
              display: 'inline-block',
              padding: '8px 24px', 
              backgroundColor: 'var(--color-accent-3)',
              color: 'var(--text-main)', 
              borderRadius: 'var(--border-radius-xl)',
              border: 'var(--border-playful)',
              boxShadow: 'var(--shadow-playful)',
              fontFamily: 'var(--font-body)',
              fontWeight: '700', 
              fontSize: '0.9rem',
              marginBottom: '32px',
              transform: 'rotate(-2deg)'
            }}
          >
            👋 Hi, I'm Kate
          </motion.div>
          
          <h1 className="font-display hero-title" style={{ fontSize: '5.5rem', marginBottom: '24px', position: 'relative', zIndex: 2, lineHeight: 1.05 }}>
            <span style={{ display: 'block' }}>Let's Build</span>
            <span style={{ display: 'block', color: 'var(--color-accent-1)' }}>Brilliant</span>
            <span style={{ display: 'block' }}>Operations.</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '440px', fontWeight: '500' }}>
            Elevating your business with stylish, high-end administrative support and seamless coordination. I handle the details so you can create the magic.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              Let's Chat
            </a>
            <a href="/resume.pdf" download className="btn-outline" style={{ backgroundColor: 'var(--bg-card)' }}>
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Playful Image Frame */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '100%',
            height: '100%',
            background: 'var(--color-accent-1)',
            borderRadius: 'var(--border-radius-xl)',
            border: 'var(--border-playful)',
            zIndex: -1,
            transform: 'rotate(4deg)'
          }} />
          
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            borderRadius: 'var(--border-radius-xl)',
            border: 'var(--border-playful)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-card)',
            position: 'relative'
          }}>
            <img 
              src={profileImg} 
              alt="Kate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
