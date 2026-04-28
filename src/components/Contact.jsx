import React from 'react';
import { motion } from 'framer-motion';

const LinkedinIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative Blob */}
      <div style={{ position: 'absolute', right: '-10%', bottom: '-10%', width: '400px', height: '400px', background: 'var(--color-accent-3)', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1, opacity: 0.5 }} />

      <div className="container grid-2" style={{ alignItems: 'center' }}>
        
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, type: 'spring' }}
           viewport={{ once: true }}
        >
          <div style={{ display: 'inline-block', padding: '8px 24px', backgroundColor: 'var(--color-accent-2)', borderRadius: '100px', border: 'var(--border-playful)', fontWeight: '700', marginBottom: '24px', transform: 'rotate(2deg)' }}>
            Got an idea?
          </div>
          <h2 className="font-display hero-title" style={{ fontSize: '4.5rem', margin: '0 0 24px 0', lineHeight: 1.1 }}>Let's Work<br/>Together.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '48px', fontSize: '1.25rem', maxWidth: '400px', fontWeight: '500' }}>
            Ready to take your business to the next level? Send a message and let's create something brilliant.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <motion.div whileHover={{ x: 10 }} style={{ display: 'flex', gap: '24px', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', border: 'var(--border-playful)', borderRadius: '16px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-playful)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>+1 (555) 123-4567</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0, fontWeight: '500' }}>Direct Line</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} style={{ display: 'flex', gap: '24px', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--color-accent-4)', border: 'var(--border-playful)', borderRadius: '16px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-playful)', color: 'var(--text-main)' }}>
                <LinkedinIcon />
              </div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>in/kimberlykate</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0, fontWeight: '500' }}>LinkedIn Network</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
           viewport={{ once: true }}
           style={{ 
             backgroundColor: 'var(--color-accent-1)', 
             padding: '48px', 
             borderRadius: 'var(--border-radius-xl)',
             border: 'var(--border-playful)',
             boxShadow: '8px 8px 0px rgba(61, 49, 46, 1)',
             transform: 'rotate(-1deg)'
           }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', transform: 'rotate(1deg)' }}>
            <div className="grid-2" style={{ gap: '24px' }}>
              <input className="input-playful" type="text" placeholder="First Name" />
              <input className="input-playful" type="text" placeholder="Last Name" />
            </div>
            <input className="input-playful" type="email" placeholder="Email Address" />
            <input className="input-playful" type="text" placeholder="Subject" />
            <textarea className="input-playful" placeholder="How can I help you?" rows="4" style={{ resize: 'none', borderRadius: '24px' }}></textarea>
            
            <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', marginTop: '8px', fontSize: '1.25rem' }}>
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
