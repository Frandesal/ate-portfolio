import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2023 — Present',
    role: 'Lead Virtual Assistant',
    company: 'Independent / Freelance',
    desc: 'Providing high-level executive support to multiple startup founders. Managing complex schedules, travel logistics, and cross-functional team communications.',
    skills: ['Project Management', 'Email Triage', 'CRM']
  },
  {
    period: '2021 — 2023',
    role: 'Executive Assistant',
    company: 'Creative Agency',
    desc: 'Served as the primary point of contact for VIP clients. Streamlined internal workflows resulting in a 30% reduction in administrative overhead.',
    skills: ['Client Relations', 'Workflow Design', 'Travel']
  },
  {
    period: '2019 — 2021',
    role: 'Project Coordinator',
    company: 'Tech Solutions Inc.',
    desc: 'Orchestrated team communications and tracked project milestones across 20+ digital product launches, all delivered on-time and under budget.',
    skills: ['Coordination', 'Reporting', 'Scheduling']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <span className="badge" style={{ marginBottom: '20px' }}>Experience</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', maxWidth: '500px' }}>
            Where I've <em style={{ fontStyle: 'italic' }}>made an impact</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '48px',
                padding: '48px 0',
                borderTop: '1px solid var(--border)',
                alignItems: 'start'
              }}
              className="exp-row"
            >
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{exp.period}</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '4px' }}>{exp.role}</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '16px' }}>{exp.company}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '560px' }}>{exp.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {exp.skills.map((skill, j) => (
                    <span key={j} style={{
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .exp-row { 
            grid-template-columns: 1fr !important; 
            gap: 16px !important;
            padding: 32px 0 !important;
          }
        }
      `}} />
    </section>
  );
};

export default Experience;
