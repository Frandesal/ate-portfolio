import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kimberly-kate-longno-92465537a';

const Contact = () => {
  const [focused, setFocused] = useState(null);

  const inputStyle = (name) => ({
    width: '100%',
    padding: '16px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1.5px solid ${focused === name ? 'var(--accent)' : 'var(--border)'}`,
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.3s var(--ease)',
    boxSizing: 'border-box'
  });

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start' }} className="contact-grid">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: '20px' }}>Get In Touch</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Let's work <em style={{ fontStyle: 'italic' }}>together</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '56px', maxWidth: '420px' }}>
              Have a project in mind or need reliable administrative support? 
              I'd love to hear from you.
            </p>

            {/* Contact Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <a href="mailto:hello@katelongno.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, margin: 0 }}>Email</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>hello@katelongno.com</p>
                </div>
              </a>

              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, margin: 0 }}>LinkedIn</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Kimberly Kate Longno</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: '4px', display: 'block' }}>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    style={inputStyle('first')}
                    onFocus={() => setFocused('first')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: '4px', display: 'block' }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={inputStyle('last')}
                    onFocus={() => setFocused('last')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: '4px', display: 'block' }}>Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: '4px', display: 'block' }}>Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  style={{ ...inputStyle('message'), resize: 'none', lineHeight: 1.6 }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '32px', alignSelf: 'flex-start' }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-light);
        }
      `}} />
    </section>
  );
};

export default Contact;
