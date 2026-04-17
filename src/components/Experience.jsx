import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Lead Virtual Assistant',
    company: 'Independent Contractor',
    desc: 'Managing operations for high-growth startups, specializing in project curation and executive-level administrative support. Executing seamlessly behind the scenes.'
  },
  {
    year: '2021 - 2023',
    role: 'Executive Assistant',
    company: 'Creative Agency Luxe',
    desc: 'Optimized internal workflows, managed complex international travel, and served as the primary gateway for key stakeholders and VIP clients.'
  },
  {
    year: '2019 - 2021',
    role: 'Project Coordinator',
    company: 'Nexus Tech Solutions',
    desc: 'Facilitated team communication, tracked critical milestones, and orchestrated the successful delivery of 20+ digital product launches.'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: 'var(--section-padding)', background: 'var(--bg-surface-low)' }}>
      <div className="container">
        <h2 className="font-display" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '80px', color: 'var(--charcoal)' }}>The Journey</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.01 }}
              style={{ 
                background: 'var(--bg-surface-lowest)',
                padding: '40px',
                borderRadius: '24px',
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 1fr) 3fr',
                gap: '40px',
                alignItems: 'start',
                boxShadow: 'var(--shadow-ambient)',
                transition: 'transform var(--transition)'
              }}
            >
              <div style={{ 
                color: 'var(--accent-gold)', 
                fontWeight: '600', 
                fontSize: '1rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em'
              }}>
                {exp.year}
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.75rem', marginBottom: '8px', color: 'var(--primary)' }}>{exp.role}</h3>
                <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '16px', letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                  {exp.company}
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
