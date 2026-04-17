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
      {/* Abstract Background Blur Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--primary-container) 0%, transparent 70%)', opacity: 0.05, filter: 'blur(80px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)', opacity: 0.05, filter: 'blur(100px)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          style={{ position: 'relative' }}
        >
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ 
              display: 'inline-block',
              padding: '6px 16px', 
              background: 'var(--bg-surface-lowest)', 
              borderRadius: '100px',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--shadow-ambient)',
              color: 'var(--primary)', 
              fontSize: '0.85rem',
              fontWeight: '600', 
              letterSpacing: '0.05em',
              marginBottom: '32px'
            }}
          >
            THE ETHEREAL ARCHITECT
          </motion.div>
          
          <h1 className="font-display" style={{ fontSize: '5rem', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
            <span style={{ display: 'block', color: 'var(--charcoal)' }}>Strategic</span>
            <span style={{ display: 'block', color: 'var(--primary)' }}>Curation &</span>
            <span style={{ display: 'block', color: 'var(--text-main)' }}>Execution.</span>
          </h1>
          
          {/* Asymmetrical shifting of body text as per guideline */}
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '440px', marginLeft: 'auto', marginRight: '40px' }}>
            Elevating your business efficiency with high-end administrative support, intentional planning, and seamless coordination.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: 'auto', width: 'fit-content', marginRight: '40px' }}>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="btn-primary"
            >
              Start the Journey
            </motion.a>
            <motion.a 
              whileHover={{ x: 5 }}
              href="#services" 
              style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              Explore Services <span style={{ fontSize: '1.2rem' }}>→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          {/* Off-Grid Offset Background Card */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '-40px',
            width: '100%',
            height: '100%',
            background: 'var(--bg-surface-low)',
            borderRadius: '24px',
            zIndex: -1
          }} />
          
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-ambient)',
            position: 'relative'
          }}>
            <img 
              src={profileImg} 
              alt="Kimberly Kate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Inner Glass Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              padding: '20px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              border: '1px solid var(--glass-border)'
            }}>
              <p style={{ margin: 0, fontWeight: '600', color: 'var(--primary)' }}>Kimberly Kate E. Longno</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Executive Virtual Assistant</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
