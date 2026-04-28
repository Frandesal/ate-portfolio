import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="home" ref={containerRef} style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
        
        <motion.div style={{ y, opacity }}>
          {/* Intro line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '32px' }}
          >
            <span className="badge">Virtual Assistant</span>
          </motion.div>

          {/* Hero Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '80px', alignItems: 'center' }} className="hero-grid">
            
            {/* Text Side */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '32px', letterSpacing: '-0.02em' }}
              >
                I handle the <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>details</em>,{' '}
                so you can focus on what matters.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '48px', lineHeight: 1.7 }}
              >
                Hi, I'm Kimberly Kate — a dedicated virtual assistant helping entrepreneurs 
                and teams stay organized, productive, and ahead of schedule.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                className="hero-buttons"
              >
                <a href="#contact" className="btn btn-primary">
                  Work With Me
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="/resume.pdf" download className="btn btn-outline">
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative' }}
            >
              <motion.div style={{ scale: imgScale }}>
                <div style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  position: 'relative'
                }}>
                  <img
                    src={profileImg}
                    alt="Kimberly Kate Longno — Virtual Assistant"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(250,248,244,0.3), transparent)',
                    pointerEvents: 'none'
                  }} />
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '-40px',
                  background: 'white',
                  padding: '20px 28px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
                className="floating-card"
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1.3rem', lineHeight: 1, margin: 0 }}>50+</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Projects Completed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '1px', height: '40px', background: 'var(--border)' }}
          />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-grid > div:last-child {
            max-width: 360px;
            margin: 0 auto;
          }
          .floating-card {
            left: 0 !important;
            bottom: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-buttons {
            flex-direction: column;
          }
          .hero-buttons .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
